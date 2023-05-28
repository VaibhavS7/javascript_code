// Mapping users to get Usernames
// 1. Write a code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort the users by descending order

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 18,
    },
    {
        id:3,
        name: "Mike",
        isActive: false,
        age: 30
    }
]

// 1.1
// const names = [];
// for(let i=0; i<users.length; i++) {
//     names.push(users[i].name);
// }

// 1.2
// const names = [];
// for (const user of users) {
//     names.push(user.name);
// } 

// 1.3
// const names =[];
// users.forEach(user => {
//     names.push(user.name);
// })

// 1.4
// const names = users.map((user) => user.name);

// 2.1
// const names = users.filter(user => user.isActive).map(user => user.name);

// 3.1
const names = users.sort((user1, user2) => (user1.age < user2.age ? 1 : -1)).filter(user => user.isActive).map(user => user.name);

console.log("Result: ", names);