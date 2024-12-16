import { serialize } from "cookie";
import jwt from "jsonwebtoken";

interface Props {
  id: number;
  email: string;
  role: string;
}
export function generateToken({ id ,email ,role }: Props) {
  // generate jwt token
  const secretKey = process.env.JWT_SECRET as string;
  const token = jwt.sign(
    { userId: id, email: email, role: role },
    secretKey,
    { expiresIn: "30d" }
  );
  return token;
}

export function setCookie(user: Props): string {
  const token = generateToken(user);

  const cookie = serialize("auth-token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", //development=http , production=https
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return cookie;
}
