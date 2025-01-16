const express = require("express");
const adminRouter = express.Router();
const admin = require("../middlewares/admin");
const { Details } = require("../models/details");
const { PromiseProvider } = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");


// Add product
adminRouter.post("/admin/add-details", async (req, res) => {
  const currentdate = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo'});
  try {
    const { name,youare,contactnumber,whatsappnumber,email,location,alstream,course,remark,scounselorname } = req.body;
    let details = new Details({
      name,
      youare,
      contactnumber,
      whatsappnumber,
      email,
      location,
      alstream,
      course,
      remark,
      scounselorname,
      createdAt:currentdate
        //images,
    });
    details = await details.save();
    res.json(details);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

adminRouter.post("/admin/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Username" });
    }

    // Perform password comparison here
    if (password !== user.password) {
      return res.status(400).json({ msg: "Incorrect password." });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = adminRouter;
