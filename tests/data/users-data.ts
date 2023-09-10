import { Utils } from "../assignment/pages/utils";

export default {
    signupUser:{
    email: `ipfolio${Utils.getRandomNumber()}@mail.com`,
    password: `Password${Utils.getRandomNumber()}`,
    },
    loginUser: {
    email: "ipfolio@mail.com",
    password: "Password",
    },
    invalidUser: {
    emailFormat: "invalidEmailFormat.com",
    password: "invalidPassword",
    },
    unregisteredEmail: "invalidEmail@example.com",
};