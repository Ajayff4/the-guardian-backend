import crypto, { HashOptions } from "crypto";

export const getHash = (text: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const value = crypto.createHash("sha256", salt as HashOptions).update(text).digest("base64");
  return {salt, value};
}