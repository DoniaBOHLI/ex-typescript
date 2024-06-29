interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

export function fetchUserData(userId: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id === userId);
            if (user) {
                resolve(user);
            } else {
                reject(new Error(`User with id ${userId} not found`));
            }
        }, 2000); 
    });
}