"use strict";
// numeric enums 
var Color;
(function (Color) {
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Pink"] = 3] = "Pink";
})(Color || (Color = {}));
const favColor = Color.Pink;
console.log(favColor);
console.log(Color[3]);
// string enums
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
const userRole = Role.ADMIN;
console.log(userRole);
console.log(Role["USER"]);
// Computed Values
var Levels;
(function (Levels) {
    Levels[Levels["easy"] = 2] = "easy";
    Levels[Levels["medium"] = 5] = "medium";
    Levels[Levels["hard"] = 10] = "hard";
})(Levels || (Levels = {}));
const mediumLevel = Levels.medium;
console.log(mediumLevel);
console.log(Levels["hard"]);
// user roles 
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "user";
})(Role || (Role = {}));
const currentUser = {
    name: "Aashir",
    role: Role.Admin
};
console.log(currentUser);
var roles;
(function (roles) {
    roles["admin"] = "admin";
    roles["user"] = "user";
})(roles || (roles = {}));
const currentUser1 = {
    name: "Ahmed",
    email: "user@gmail.com",
    password: 12345678,
    role: roles.user
};
const currentUser2 = {
    name: "Aashir",
    email: "admin@gmail.com",
    password: 87654321,
    role: roles.admin
};
const isAdmin = (activeUser) => {
    const { name, role } = activeUser;
    return role === "admin" ? `${name ?? "User"} is allowed to edit the website` : `${name ?? "User"} is not allowed to edit the website`;
};
console.log(isAdmin(currentUser2));
console.log(isAdmin(currentUser1));
