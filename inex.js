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
  return text === text.split('').reverse().join('');
}

function calculateDiscountedPrice(price, discountPercentage) {
  return price - (price * discountPercentage / 100);
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
