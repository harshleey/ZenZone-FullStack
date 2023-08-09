module.exports = {
  getIndex: (req, res) => {
   try {
     res.render("index.ejs", { user: req.user });
   } catch (err) {
     console.log(err);
   }
  },
 };