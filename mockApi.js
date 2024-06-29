"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = fetchUserData;
var users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];
function fetchUserData(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var user = users.find(function (u) { return u.id === userId; });
            if (user) {
                resolve(user);
            }
            else {
                reject(new Error("User with id ".concat(userId, " not found")));
            }
        }, 2000);
    });
}
