// check username, password in post(login) request
// if exist create new JWT
// send back to fron-end
// setup authentication so only the request with JWT can access the dasboard
const CustomAPIEror = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  //mongoose validations
  //Joi
  //Check in the controller

  if (!username || !password) {
    throw new CustomAPIEror("Please provide email and password", 400);
  }
  res.send("Fake login");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello João`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
