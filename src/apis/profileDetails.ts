
interface User {
    name: string;
    phone: string;
    email: string;
}

const userInfoMap: Record<number, User> = {
    1: { name: "John Doe", phone: "123-456-7890", email: "john@example.com" },
    2: { name: "Jane Smith", phone: "987-654-3210", email: "jane@example.com" },
    3: { name: "Alice Johnson", phone: "555-555-5555", email: "alice@example.com" },
    4: { name: "Bob Brown", phone: "444-444-4444", email: "bob@example.com" },
    5: { name: "Emily Davis", phone: "777-777-7777", email: "emily@example.com" }
};

export function GetProfileInfo(id: number){
    const user: User | undefined = userInfoMap[id];
    if (user !== undefined){
        return user
    }
    console.log(`user not found in id : ${id}`)
    return null
}