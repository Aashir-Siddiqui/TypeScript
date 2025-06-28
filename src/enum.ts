// numeric enums 

enum Color {
    Green = 1,
    Blue = 2,
    Pink = 3,
}

const favColor: Color = Color.Pink

console.log(favColor)

console.log(Color[3])


// string enums

enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
}

const userRole: Role = Role.ADMIN

console.log(userRole)

console.log(Role["USER"])


// Computed Values

enum Levels {
    easy = 2,
    medium = easy + 3,
    hard = medium + 5,
}

const mediumLevel: Levels = Levels.medium

console.log(mediumLevel)

console.log(Levels["hard"])


// user roles 

enum Role {
    Admin = "Admin",
    User = "user",
}

const currentUser: {
    name: string,
    role: Role
} = {
    name: "Aashir",
    role: Role.Admin
}

console.log(currentUser)


enum roles {
    admin = "admin",
    user = "user",
}

type LoginDetails = {
    name?: string;
    email: string;
    password: number;
    role: roles;
}

const currentUser1: LoginDetails = {
    name: "Ahmed",
    email: "user@gmail.com",
    password: 12345678,
    role: roles.user
}

const currentUser2: LoginDetails = {
    name: "Aashir",
    email: "admin@gmail.com",
    password: 87654321,
    role: roles.admin
}

const isAdmin: (activeUser: LoginDetails) => string = (activeUser: LoginDetails): string => {
    const { name, role } = activeUser

    return role === "admin" ? `${name ?? "User"} is allowed to edit the website` : `${name ?? "User"} is not allowed to edit the website`;
}

console.log(isAdmin(currentUser2))

console.log(isAdmin(currentUser1))