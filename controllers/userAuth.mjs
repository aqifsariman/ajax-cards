export default function initUserController(db) {
  const registration = (req, res) => {
    res.render("register");
  };
  const loginPage = (req, res) => {
    res.render("login");
  };
  const createUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      await db.User.create({
        email,
        password,
      });
      console.log(email);
      res.send({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const login = async (req, res) => {
  //   const { email } = req.body;
  //   try {
  //     await db.User.find({
  //       where: {
  //         email: email,
  //       },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return { registration, createUser, loginPage };
}
