// utils/currency.js

/**
 * Converts a displayed amount (e.g. "Tax: $2.40" or "$29.99") to integer cents,
 * so arithmetic is exact and free of floating-point drift.
 */
const parseCurrencyToCents = (text) => {
  const match = text.match(/\$(\d+(?:\.\d{2})?)/);
  if (!match) {
    throw new Error(`No currency amount found in "${text}"`);
  }
  return Math.round(parseFloat(match[1]) * 100);
};

module.exports = { parseCurrencyToCents };
