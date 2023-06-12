let user = {
  name: "john",
  age: 12
}

// console.log(user.name)
// console.log(user.age)

user.location = "new York"

// console.log(user.location)

delete user.location;

console.log(user)

for (key in user) {
  console.log(key)
}