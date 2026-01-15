const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth.middleware")

const {addExpense,getExpenses,} = require("../controllers/expense.controller")

router.post("/expenses",auth,addExpense)
router.get("/expenses",auth,getExpenses)

module.exports=router;