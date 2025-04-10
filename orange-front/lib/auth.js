// lib/auth.js
import { getSession } from '@auth0/nextjs-auth0';

export function getUserSession(req, res) {
  const session = getSession(req, res);
  return session?.user || null;
}
