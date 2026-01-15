const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth.middleware")

const {getTotalExpense,}= require("../controllers/analytics.controller")

router.get("/analytics/total",auth,getTotalExpense)
module.exports=router