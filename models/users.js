import users from "../data/users.js";

// GET ALL USERS
export function getUsers() {
    // return array of all the users
    return users
}
// console.log(getUsers());

// GET A USER BY ID

// find a user based on the id that the client has entered. 
 // Search through the array of users until we mind a match with the client entry.
   // search using .find method. 
 // return this user to the client. 


export function getUserByID(id) { 
    const foundUser = users.find(function(user){
        return user.id === id;
    })
    return foundUser;
} 

// console.log(getUserByID(3))
     
// CREATE A USER

// client inserts some information about a user
// we add this information to the end of users array.
// if we use .push, this returns the length of the new array.
// we then to return the new user at the end of the list. 
// this is the length of the array but length count starts at 1,
// so we have to minus 1 to get the last entry.

export function createUser(newUser) {
    users.push(newUser);
    return users[users.length-1];
}
// console.log(users.length);
// console.log(createUser("JimBob"));

// UPDATE A USER BY ID

// use the id to select which user we want tp update. 
// in the array this will be id-1
// use splice to insert new info. 

export function updateUserByID(id, updatedUser) {
  
   users.splice((id-1), 1, updatedUser)
   return users[id-1]
 
}

 console.log("update user by ID", updateUserByID(3, "holly"))


// DELETE A USER BY ID
//use the id to find the user in the array.
// use the splice method to delete this user. 
// return the list of users with deleted person. 


export function deleteUserByID(id) {
    
    return users.splice(id-1,1)
    

} 
    
// console.log("delete User", deleteUserByID(4));