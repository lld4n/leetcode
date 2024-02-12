function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false;
  if (/[a-z]/.test(password) === false) return false;
  if (/[A-Z]/.test(password) === false) return false;
  if (/\d/.test(password) === false) return false;
  if (/[!@#$%^&*()\-+]/.test(password) === false) return false;
  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) return false;
  }
  return true;
}
