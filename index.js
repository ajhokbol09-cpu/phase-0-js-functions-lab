function createLoginTracker(userInfo) {
  const maxAttempts = 3;
  let failedAttempts = 0;
  let accountLocked = false;

  const login = (username, password) => {
    if (accountLocked) {
      return "Account locked due to too many failed login attempts";
    }

    const storedUsername = userInfo && userInfo.username;
    const storedPassword = userInfo && userInfo.password;
    const isValidUsername = username === storedUsername;
    const isValidPassword = password === storedPassword;

    if (isValidUsername && isValidPassword) {
      failedAttempts = 0;
      accountLocked = false;
      return "Login successful";
    }

    failedAttempts += 1;

    if (failedAttempts >= maxAttempts) {
      accountLocked = true;
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${failedAttempts}: Login failed`;
  };

  return login;
}

module.exports = {
  createLoginTracker,
};
