"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectDetails = exports.premiumUserSignInInps = exports.premiumUserSignUpInps = exports.userSigInInps = exports.userSignUpInps = void 0;
const zod_1 = require("zod");
exports.userSignUpInps = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
    phoneNo: zod_1.z.number().min(10)
});
exports.userSigInInps = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
exports.premiumUserSignUpInps = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
    phoneNo: zod_1.z.number().min(10)
});
exports.premiumUserSignInInps = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
exports.ProjectDetails = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
