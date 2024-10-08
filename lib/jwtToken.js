import jwt from "jsonwebtoken";

export const createToken = async (id) => {
    if (!id) {
        throw new Error("Id not found");
    }
    const token = await jwt.sign({ id }, process.env.JWT_SECRET);
    return token;
};

export const compareToken = (token) => {
    if (!token) {
        throw new Error("Token not found");
    }
    var result;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            result =  false;
        }
        if (decoded) {
            result = decoded;
        }
    });
    return result;
};
