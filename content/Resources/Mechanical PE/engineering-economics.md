---
title: Engineering Economics
description: Notes on Engineering Economics basics
tags:
  - engineering
  - mechanical
  - economics
publish: true
---
## About

Economics in engineering is all about analyzing different investment (or lack of investment) scenarios in order to make informed decisions. This may come as a question from a client on what piece of equipment they should invest in, a project you've been tasked with to determine areas of opportunity, or maybe as a response to a piece of equipment that broke down and needs either remanufacturing or replacement - these scenarios are all very common.

In order for engineers to make these informed decisions, there are simple yet effective approaches one can use to confidently determine the best course of action. For simplicity purposes, the main terms one should know about are:

**Present Value:** 
- How much your money is worth today.
- *$1000 today is worth $1000*... simple
- It can be calculated form Future Value (*FV*) using the following equation. Using this equation is common when working backwards to determine how much Present Value (*PV*) is needed to obtain some FV at some interest rate (*i*) for *n* number of years or how much receiving some FV in the future is actually worth today.
$$
PV = \frac{FV}{(1 + i)^n}
$$

**Future Value:** 
- How much your money today will be worth in the future after interest.
- *$1000 today will be worth more in the future due to interest*... This does not necessarily mean you have more buying power due to inflation (if inflation rates outgrow interest returns), but in very simple engineering analysis, this can be ignored
- FV can be calculated manipulating the above equation. Using this equation is common to determine how much your money will be worth in the future.
$$
FV = PV(1 + i)^n
$$
**Annual Value or Annuities:** 
- How much annual savings or expenses are incurred; typically due to ownership of an asset
- *$500 annual maintenance costs need to be accounted for*... $1000 in annual savings due to your investment 
- This can be converted to PV or FV using the following equations:
$$
PV = A \cdot \frac{1 - (1 + i)^{-n}}{i}
$$
$$
FV = A \cdot \frac{(1 + i)^n - 1}{i}
$$

Or you can calculate Annuities from PV or FV using:
$$
A = PV \cdot \frac{i(1 + i)^n}{(1 + i)^n - 1}
$$
$$
A = FV \cdot \frac{i}{(1 + i)^n - 1}
$$

## Example

<iframe
  src="/static/econ/index.html"
  width="100%"
  height="600"
  style="border: none; border-radius: 8px;"
  allowFullScreen>
</iframe>

## Practice
*Coming soon..*