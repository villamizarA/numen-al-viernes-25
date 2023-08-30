import jwt from "jsonwebtoken";
import { TOKEN_1 } from "../config.js";

export const authRequiered =(req, res, next) => {
    const { token } = req.cookies;

    if (!token)
    return res.status(401).json({ message: "no hay token, acceso denegado" });

    jwt.verify(token, TOKEN_1, (err, user)  => {
        if (err) return res.status(403).json({ message: "token invalido" });

        req.user = user

        next();   
    })

};