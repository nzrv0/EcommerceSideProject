import { jwtVerify } from "jose";

export async function verifyToken(req, res, next) {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(403).send("Accsess denied");
        if (token.startsWith("Token ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

        const verified = jwtVerify(token, secret);
        req.user = verified;
        console.log(req.user);
        next();
    } catch (err) {
        throw new Error(`something get wronge ${err}`);
    }
}
