export function tickStep(start: number, stop: number, count: number): number;
export function getScaledDecimals(decimals, tick_size);
export function getFlotTickSize(min: number, max: number, noTicks: number, tickDecimals: number);
export function getFlotRange(panelMin, panelMax, datamin, datamax);
export function getFlotTickDecimals(data, axis);
export function grafanaTimeFormat(ticks: number, min: number, max: number);
export function logp(value: number, base: number);
export function getPrecision(num: number);
export function getStringPrecision(num: string);