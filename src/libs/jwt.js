import { TOKEN_1 } from "../config.js";
import  jwt from "jsonwebtoken";

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload, 
        TOKEN_1,
         { expiresIn: "1d"
         }, 
         (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
      );
    });
  }
