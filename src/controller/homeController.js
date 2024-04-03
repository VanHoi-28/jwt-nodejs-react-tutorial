import userSevice from "../service/userSevice";

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userSevice.createNewUser(email, password, username);

  userSevice.getUserList();

  return res.send("handleCreateNewUser");
};

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
};
