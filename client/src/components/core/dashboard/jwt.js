function assertAlive(decoded) {
  const now = Date.now().valueOf() / 1000;
  if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
    throw new Error(`token expired: ${JSON.stringify(decoded)}`);
  }
  if (typeof decoded.nbf !== "undefined" && decoded.nbf > now) {
    throw new Error(`token not yet valid: ${JSON.stringify(decoded)}`);
  }
}

try {
  assertAlive(jwtDecode(token));
} catch (error) {
  console.error(error);
}

isTokenExpired = () => {
  const token = localStorage.getItem("access_token");
  try {
    const date = new Date(0);
    const decoded = decode(token);
    date.setUTCSeconds(decoded.exp);
    return date.valueOf() > new Date().valueOf();
  } catch (err) {
    return false;
  }
};
