import { User } from "./models/User";

const user = new User({ name: "Kirat", age: 24 });

console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => {
	console.log("Change #1");
});
user.on("change", () => {
	console.log("Change #1");
});
user.on("save", () => {
	console.log("Save was triggered");
});

user.trigger("change");
