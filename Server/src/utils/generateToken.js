import jwt from "jsonwebtoken";

export const generateAccessToken = (userId) => {
  return jwt.sign({id: userId }, process.env.ACCESS_TOKEN_SECRETKEY, {
    expiresIn: "15m",
  });
};

export async function generateRefreshToken(userId) {
  return jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRETKEY, {
    expiresIn: "7d",
  });
}
