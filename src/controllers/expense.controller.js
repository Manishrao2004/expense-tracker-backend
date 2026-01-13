const pool = require("../config/db")
exports.addExpense= async(req,res)=>{
    try{
        const{amount, category}=req.body;
        const userId= req.user.userId;
        const result = await pool.query(
            "insert into expenses(user_id,amount,category) values ($1,$2,$3) returning *",[userId,amount,category])
        res.status(201).json({
            message:"Expense added",
            expense: result.rows[0],
        })
    }
    catch(error){
        console.error(error);
    res.status(500).json({ error: "Failed to add expense" });
    }
}

exports.getExpenses= async (req,res)=>{
    try{
        const userId = req.user.userId
        const result = await pool.query("select * from expenses where user_id = $1 order by created_at desc",[userId])
        res.json({
            expenses: result.rows,
        })
    }
    catch (error){
        console.log.error(error);
        res.status(500).json({
            error:"Failed to fetch expenses"
        })
    }
    }
