const pool= require("../config/db")
exports.getTotalExpense = async (req, res) => {
  try {
    const userId = req.user.userId;

    const result = await pool.query(
      "SELECT COALESCE(SUM(amount), 0) AS total FROM expenses WHERE user_id = $1",
      [userId]
    );

    res.json({
      totalExpense: result.rows[0].total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch total expense" });
  }
};
