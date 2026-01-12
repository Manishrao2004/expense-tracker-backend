require("dotenv").config()
const express= require('express');
const app = express();

app.use(express.json())

const healthRoutes = require("./src/routes/health.routes")
const authRoutes= require("./src/routes/auth.routes")

app.use(healthRoutes)
app.use(authRoutes)

const PORT= process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running port ${PORT}`);
})