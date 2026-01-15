require("dotenv").config()
const express= require('express');
const app = express();
const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max:100,
})
app.use(limiter)

app.use(express.json({limit: "10kb"}))

const healthRoutes = require("./src/routes/health.routes")
const authRoutes= require("./src/routes/auth.routes")
const protectedRoutes = require("./src/routes/protected.routes")
const expenseRoutes = require("./src/routes/expense.routes")
const analyticsRoutes= require("./src/routes/analytics.routes")

app.use(healthRoutes)
app.use(authRoutes)
app.use(protectedRoutes)
app.use(expenseRoutes)
app.use(analyticsRoutes)

const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running port ${PORT}`);
})

app.use(require("./src/middleware/error.middleware"));
