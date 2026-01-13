const bcrypt = require('bcrypt')
const pool = require('../config/db')

exports.signup= async (req,res)=>{
    try{
    const {email, password}= req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const result = await pool.query(
        "insert into users(email,password) values ($1,$2) returning id, email",[email,hashedPassword]
    )
    res.status(201).json({
        message:"user created",
        user: result.rows[0]
    })
}
catch(error){
    if (error.code === "23505"){
        return res.status(409).json({
            error:"Email already exists",
        })
    }
    console.error(error);
    res.status(500).json({error: "signup failed"});
}

} 