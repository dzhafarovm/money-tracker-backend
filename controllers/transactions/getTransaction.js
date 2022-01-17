const { IncomeTransaction, CostsTransaction } = require("../../models");

const getIncomeByMonth = async (req, res, next) => {
    const { month } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const data = IncomeTransaction.find({ date: month }, '', { skip, limit: String(limit) })
        .populate('owner', 'month type category description');
    
    res.json({
        status: 'success',
        code: 200,
        data
    });
};


const getCostsByMonth = async (req, res, next) => {
    console.log("hello");
};

module.exports = {
    getIncomeByMonth,
    getCostsByMonth,
};