const { Transaction } = require("../../models");

const getTransactionByMonth = async (req, res, next) => {
    const { month } = req.params;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const data = Transaction.find({ date: month }, '', { skip, limit: String(limit) })
        .populate('owner', 'month type category description');
    
    res.json({
        status: 'success',
        code: 200,
        data
    });
};

module.exports = {
    getTransactionByMonth,
};