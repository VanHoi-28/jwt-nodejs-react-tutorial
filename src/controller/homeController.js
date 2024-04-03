import userSevice from "../service/userSevice";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
 let userList = await userSevice.getUserList();
await userSevice.deleteUser(5)

  return res.render("user.ejs", {userList});
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userSevice.createNewUser(email, password, username);
  return res.redirect("/user");
};

const handleDeleteUser = async (req, res) => {
  console.log(">>> Check id: " + req.params.id)
  await userSevice.deleteUser(req.params.id);
  return res.redirect("/user");
}

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
};
