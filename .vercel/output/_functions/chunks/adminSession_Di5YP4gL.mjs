import { parse, serialize } from 'cookie';
import jwt from 'jsonwebtoken';

const SESSION_COOKIE = "admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12;
function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not defined in environment variables.");
  }
  return secret;
}
function createAdminSessionCookie(username) {
  const token = jwt.sign({ username }, getSecret(), { expiresIn: SESSION_DURATION_SECONDS });
  return serialize(SESSION_COOKIE, token, {
    httpOnly: true,
    path: "/",
    maxAge: SESSION_DURATION_SECONDS,
    secure: true,
    sameSite: "lax"
  });
}
function clearAdminSessionCookie() {
  return serialize(SESSION_COOKIE, "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    secure: true,
    sameSite: "lax"
  });
}
function getAdminSession(request) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, getSecret());
    return { username: payload.username };
  } catch (error) {
    return null;
  }
}

export { clearAdminSessionCookie as a, createAdminSessionCookie as c, getAdminSession as g };
