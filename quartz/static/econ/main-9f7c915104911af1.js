// --- Inline Plotting helpers ---
function showInlinePlot(canvasId, labels, data, label, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    if (!window._inlineCharts) window._inlineCharts = {};

    if (window._inlineCharts[canvasId]) {
        window._inlineCharts[canvasId].destroy();
    }

    const ChartLib = window.Chart || Chart;

    window._inlineCharts[canvasId] = new ChartLib(canvas, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label,
                data,
                borderColor: color || '#6c63ff',
                backgroundColor: 'rgba(108,99,255,0.10)',
                fill: true,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: color || '#6c63ff',
                pointBorderColor: '#fff',
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#ffb347',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#444',
                        font: {
                            size: 14,
                            family: 'Segoe UI, Arial, sans-serif'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#444',
                    bodyColor: '#444',
                    borderColor: '#eee',
                    borderWidth: 1
                }
            },
            layout: { padding: 10 },
            scales: {
                x: {
                    ticks: {
                        color: '#888',
                        font: { size: 12 }
                    },
                    grid: { color: '#eee' }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#888',
                        font: { size: 12 }
                    },
                    grid: { color: '#eee' }
                }
            }
        }
    });
}


function getBindings() {
    const bindings = window.wasmBindings;
    if (!bindings) {
        throw new Error("WASM bindings are not available yet.");
    }
    return bindings;
}

function showTab(tab) {
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    const active = document.getElementById('tab-' + tab);
    if (active) active.style.display = '';
}

function wireTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showTab(btn.dataset.tab);
        });
    });
    // Set default tab
    showTab('pv');
    const firstBtn = document.querySelector('.tab-btn[data-tab="pv"]');
    if (firstBtn) firstBtn.classList.add('active');
}

function wireUi() {
    // No plot buttons: plot is shown automatically after calculation
    const { ValueModel, Value } = getBindings();

    // Present Value tab
    document.querySelector('.run-btn[data-calc="pv"]').addEventListener('click', () => {
        const fv = parseFloat(document.getElementById('pv-fv').value);
        const rate = parseFloat(document.getElementById('pv-rate').value);
        const years = parseInt(document.getElementById('pv-years').value);
        const output = document.getElementById('output-pv');
        const row = output.parentElement;
        // Defensive: Remove duplicate labels/outputs
        const labels = row.querySelectorAll('.result-label');
        const outputs = row.querySelectorAll('.output');
        labels.forEach((el, idx) => { if (idx > 0) el.remove(); });
        outputs.forEach((el, idx) => { if (idx > 0) el.remove(); });
        const label = row.querySelector('.result-label');
        try {
            if (!Number.isFinite(fv) || !Number.isFinite(rate) || !Number.isFinite(years)) {
                throw new Error('Please enter valid numeric inputs.');
            }
            const model = new ValueModel(fv, rate, years, Value.FutureValue, Value.PresentValue);
            const result = model.solve();
            label.textContent = 'Result:';
            label.style.color = '#1abc9c';
            output.textContent = `${Number(result).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            // Plot yearly increments
            let plotLabels = ['0'], data = [fv];
            for (let n = 1; n <= years; n++) {
                const m = new ValueModel(fv, rate, n, Value.FutureValue, Value.PresentValue);
                data.push(Number(m.solve()).toFixed(2));
                plotLabels.push(n.toString());
            }
            showInlinePlot('plot-pv', plotLabels, data, 'Present Value', '#6c63ff');
        } catch (e) {
            output.textContent = `${e instanceof Error ? e.message : String(e)}`;
            label.textContent = 'Error:';
            label.style.color = '#e74c3c';
        }
    });

    // Future Value tab
    document.querySelector('.run-btn[data-calc="fv"]').addEventListener('click', () => {
        const pv = parseFloat(document.getElementById('fv-pv').value);
        const rate = parseFloat(document.getElementById('fv-rate').value);
        const years = parseInt(document.getElementById('fv-years').value);
        const output = document.getElementById('output-fv');
        const row = output.parentElement;
        // Defensive: Remove duplicate labels/outputs
        const labels = row.querySelectorAll('.result-label');
        const outputs = row.querySelectorAll('.output');
        labels.forEach((el, idx) => { if (idx > 0) el.remove(); });
        outputs.forEach((el, idx) => { if (idx > 0) el.remove(); });
        const label = row.querySelector('.result-label');
        try {
            if (!Number.isFinite(pv) || !Number.isFinite(rate) || !Number.isFinite(years)) {
                throw new Error('Please enter valid numeric inputs.');
            }
            const model = new ValueModel(pv, rate, years, Value.PresentValue, Value.FutureValue);
            const result = model.solve();
            label.textContent = 'Result:';
            label.style.color = '#1abc9c';
            output.textContent = `${Number(result).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            // Plot yearly increments
            let plotLabels = ['0'], data = [pv];
            for (let n = 1; n <= years; n++) {
                const m = new ValueModel(pv, rate, n, Value.PresentValue, Value.FutureValue);
                data.push(Number(m.solve()).toFixed(2));
                plotLabels.push(n.toString());
            }
            showInlinePlot('plot-fv', plotLabels, data, 'Future Value', '#6c63ff');
        } catch (e) {
            output.textContent = `${e instanceof Error ? e.message : String(e)}`;
            label.textContent = 'Error:';
            label.style.color = '#e74c3c';
        }
    });

    // Annuity FV
    document.querySelector('.run-btn[data-calc="annuity-fv"]').addEventListener('click', () => {
        const pmt = parseFloat(document.getElementById('annuity-pmt').value);
        const rate = parseFloat(document.getElementById('annuity-rate').value);
        const years = parseInt(document.getElementById('annuity-years').value);
        const output = document.getElementById('output-annuity');
        const row = output.parentElement;
        // Defensive: Remove duplicate labels/outputs
        const labels = row.querySelectorAll('.result-label');
        const outputs = row.querySelectorAll('.output');
        labels.forEach((el, idx) => { if (idx > 0) el.remove(); });
        outputs.forEach((el, idx) => { if (idx > 0) el.remove(); });
        const label = row.querySelector('.result-label');
        try {
            if (!Number.isFinite(pmt) || !Number.isFinite(rate) || !Number.isFinite(years)) {
                throw new Error('Please enter valid numeric inputs.');
            }
            const model = new ValueModel(pmt, rate, years, Value.AnnuityPayment, Value.FutureValue);
            const result = model.solve();
            label.textContent = 'Result:';
            label.style.color = '#1abc9c';
            output.textContent = `${Number(result).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
            // Plot yearly increments
            let plotLabels = ['0'], data = [0];
            for (let n = 1; n <= years; n++) {
                const m = new ValueModel(pmt, rate, n, Value.AnnuityPayment, Value.FutureValue);
                data.push(Number(m.solve()).toFixed(2));
                plotLabels.push(n.toString());
            }
            showInlinePlot('plot-annuity', plotLabels, data, 'Annuity FV', '#6c63ff');
        } catch (e) {
            output.textContent = `${e instanceof Error ? e.message : String(e)}`;
            label.textContent = 'Error:';
            label.style.color = '#e74c3c';
        }
    });

    // Annuity PV
    document.querySelector('.run-btn[data-calc="annuity-pv"]').addEventListener('click', () => {
        const pmt = parseFloat(document.getElementById('annuity-pmt').value);
        const rate = parseFloat(document.getElementById('annuity-rate').value);
        const years = parseInt(document.getElementById('annuity-years').value);
        const output = document.getElementById('output-annuity');
        const row = output.parentElement;
        // Defensive: Remove duplicate labels/outputs
        const labels = row.querySelectorAll('.result-label');
        const outputs = row.querySelectorAll('.output');
        labels.forEach((el, idx) => { if (idx > 0) el.remove(); });
        outputs.forEach((el, idx) => { if (idx > 0) el.remove(); });
        const label = row.querySelector('.result-label');
        try {
            if (!Number.isFinite(pmt) || !Number.isFinite(rate) || !Number.isFinite(years)) {
                throw new Error('Please enter valid numeric inputs.');
            }
            const model = new ValueModel(pmt, rate, years, Value.AnnuityPayment, Value.PresentValue);
            const result = model.solve();
            label.textContent = 'Result:';
            label.style.color = '#1abc9c';
            output.textContent = `${Number(result).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        } catch (e) {
            output.textContent = `${e instanceof Error ? e.message : String(e)}`;
            label.textContent = 'Error:';
            label.style.color = '#e74c3c';
        }
    });
}

window.addEventListener('TrunkApplicationStarted', () => {
    try {
        wireTabs();
        wireUi();
    } catch (e) {
        console.error(e);
        // Try to show error in all output areas
        ['output-pv', 'output-fv', 'output-annuity'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = `Initialization error: ${e instanceof Error ? e.message : String(e)}`;
        });
    }
});