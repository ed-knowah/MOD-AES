const noahAes = require("./noahAes");

let text = "This is my text";
let key = "secret_key";

const encryptedText = noahAes.Ctr.encrypt(text, key, 256);
console.log(encryptedText);

const decryptedText = noahAes.Ctr.decrypt(encryptedText, key, 256);
console.log(decryptedText);
