module.exports = {
 getGratitude: (req, res) => {
  try {
    res.render("gratitude.ejs");
  } catch (err) {
    console.log(err);
  }
 },
};