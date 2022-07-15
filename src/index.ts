import { User } from "./models/User";

const user = new User({ name: "Kirat", age: 24 });

console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "newName", age: 99 });

console.log(user.get("name"));
console.log(user.get("age"));
