let exchangeRates = null;
let lastFetch = 0;

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24h

export async function getExchangeRates() {
  const now = Date.now();

  if (exchangeRates && now - lastFetch < CACHE_DURATION) {
    return exchangeRates;
  }

  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=USD");
    const data = await res.json();

    exchangeRates = data.rates;
    lastFetch = now;

    return exchangeRates;
  } catch (err) {
    console.error("Exchange rate API error:", err);
    return exchangeRates || {};
  }
}

export async function convertFromUSD(amount, targetCurrency) {
  const rates = await getExchangeRates();

  if (!rates || !rates[targetCurrency]) return amount;

  return amount * rates[targetCurrency];
}