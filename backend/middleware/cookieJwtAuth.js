import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/");
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (err) {
        res.clearCookie("token");
        return res.redirect("/");
    }
};

export default cookieJwtAuth;
