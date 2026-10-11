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
  const discountAmount = originalPrice * (discountPercentage / 100);

  return originalPrice - discountAmount;
}

function createLoginTracker(userInfo) {
  const maxAttempts = 3;
  let failedAttempts = 0;
  let accountLocked = false;

  const login = (username, password) => {
    if (accountLocked) {
      return "Account locked due to too many failed login attempts";
    }

    const storedUsername = userInfo && (userInfo.username ?? userInfo.user ?? userInfo.name);
    const storedPassword = userInfo && (userInfo.password ?? userInfo.pass ?? userInfo.pwd);
    const isValidUsername = username === storedUsername;
    const isValidPassword = password === storedPassword;

    if (isValidUsername && isValidPassword) {
      failedAttempts = 0;
      accountLocked = false;
      return "Login successful";
    }

    failedAttempts += 1;

    if (failedAttempts < maxAttempts) {
      return `Attempt ${failedAttempts}: Login failed`;
    }

    if (failedAttempts === maxAttempts) {
      return `Attempt ${failedAttempts}: Login failed`;
    }

    accountLocked = true;
    return "Account locked due to too many failed login attempts";
  };

  return login;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
  createLoginTracker,
};
