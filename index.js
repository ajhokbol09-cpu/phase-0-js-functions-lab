function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(a, b) {
  return Math.max(a, b);
}

function isPalindrome(text) {
  const lowerText = text.toLowerCase();
  const reversed = lowerText.split("").reverse().join("");

  return lowerText === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount =
    originalPrice * (discountPercentage / 100);

  return originalPrice - discountAmount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
