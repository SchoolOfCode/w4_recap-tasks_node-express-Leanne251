import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";
const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/users", function (req,res){
  const allUsers = getUsers();
  res.json({
    success: true,
    payload: allUsers})
})

app.get("/users/:id", function (req, res){
  
  let idNumber = Number(req.params.id);
  const userByID = getUserByID(idNumber);
  
  res.json({
    success: true,
    payload: userByID

  })
})

app.post("/users", function(req, res){
  
  const newUser = createUser(req.body);
  res.json({
    success: true,
    payload: newUser})
   
})

app.put("/users/:id", function(req,res){
  const updatedUserbyId = updateUserByID(req.params.id, req.body)
  res.json({
    success: true,
    payload: updatedUserbyId})

})

app.delete("/users/:id", function(req,res){
  const deletedUserById = deleteUserByID(req.params.id)
  res.json({
    success: true,
    payload: deletedUserById
  })
})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
