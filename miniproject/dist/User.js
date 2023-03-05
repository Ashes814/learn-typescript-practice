"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out`);
    }
}
exports.default = User;
