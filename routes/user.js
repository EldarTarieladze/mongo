const router = require("express").Router();

let User = require("../models/user.model");
router.route("/").get((req, res) => {
  User.findById("605cfd6f4beedc8424dd3d5b").then(user => res.json(user));
});
router.route("/add/1").post((req, res) => {
  var title = req.body.title;
  var username = req.body.username;
  var format = req.body.format;
  User.findOne({ username: username }).then(record => {
    record.description.push({
      title: title,
      format: format,
      info: { name: title, sname: format },
    });
    record.save();
    res.json("success");
  });
});
router.route("/add").post((req, res) => {
  let username = req.body.username;
  let title = req.body.description.title;
  let format = req.body.description.format;
  let name = req.body.description.info.name;
  let sname = req.body.description.info.sname;

  console.log(format);
  const newUser = new User({
    username: username,
    description: {
      title: title,
      format: format,
      info: { name: name, sname: sname },
    },
  });

  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.send(err));
});

module.exports = router;
