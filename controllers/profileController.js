module.exports = {
 getProfile: (req, res) => {
  // console.log(req.user)
  try {
    res.render("profile.ejs", { user: req.user });
  } catch (err) {
    console.log(err);
  }
 },
};