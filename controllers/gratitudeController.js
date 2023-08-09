const Gratitude = require("../models/GratitudeModel")

module.exports = {
 getGratitude: async (req, res) => {
  try {
    const gratitudes = await Gratitude.find().sort({ createdAt: "desc" }).lean();
    const formattedGratitudes = gratitudes.map(gratitude => {
      const formattedDate = gratitude.createdAt.toLocaleDateString('en-GB');
      return {
        ...gratitude,
        createdAt: formattedDate
      };
    });
    res.render("gratitude.ejs", {grads: formattedGratitudes, user: req.user});
    
  } catch (err) {
    console.log(err);
  }
 },

 postGratitude: async (req, res) => {
  // console.log(req.body)
  try {
    const gratitude = await Gratitude.create({
      grad1: req.body.grad1,
      grad2: req.body.grad2,
      grad3: req.body.grad3,
      grad4: req.body.grad4,
      grad5: req.body.grad5,
      user: req.user.id,
    })
    console.log("Gratitude has been created")
    console.log(gratitude)
    res.redirect('/gratitude')
  } catch (err) {
    console.log(err);
  }
 },

 deleteGratitude: async (req, res) => {
  console.log(req.params.id)
  try {
    // Find gratitude by id
    let gratitude = await Gratitude.findById({ _id: req.params.id });
    
    // Delete post from db
    await Gratitude.deleteOne({ _id: req.params.id });
    console.log("Deleted Entry");
    res.redirect("/gratitude");
  } catch (err) {
    console.log(err)
    res.redirect("/profile");
  }
 }
};