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

function createLoginTracker(userInfo) {
  const maxAttempts = 3;
  let failedAttempts = 0;
  let accountLocked = false;

  const login = (username, password) => {
    if (accountLocked) {
      return "Account locked";
    }

    const isValidUsername = username === userInfo.username;
    const isValidPassword = password === userInfo.password;

    if (isValidUsername && isValidPassword) {
      failedAttempts = 0;
      accountLocked = false;
      return "Login successful";
    }

    failedAttempts += 1;

    if (failedAttempts >= maxAttempts) {
      accountLocked = true;
      return "Account locked";
    }

    return `Invalid credentials. ${maxAttempts - failedAttempts} attempts remaining`;
  };

  return login;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
  createLoginTracker
};
