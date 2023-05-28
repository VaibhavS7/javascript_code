// Check if User with Such name exists in array of objects

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

// 1.
// const isNameExists = (name, users) => {
//     let exist = false;
//     for(let i=0; i<users.length; i++) {
//         if(users[i].name === name) {
//             exist = true;
//         }
//     }
//     return exist;
// }

// 2.
const isNameExists = (name, users) => users.some(user => user.name === name);

// 3.
// const isNameExists = (name, users) => {
//     const user = users.find(user => user.name === name);
//     console.log(user);
//     return Boolean(user);
// }

console.log(isNameExists("Jack", users));
