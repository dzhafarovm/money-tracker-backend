const { Transaction } = require("../../models");

const getTransactionByMonth = async (req, res) => {
    const { _id } = req.user;
    const { month, year } = req.query;

    const userFilter = {
        owner: _id,
        month,
        year,
    };
    console.log(userFilter);
    const incomeTransactions = await Transaction.aggregate([
        { $match: { ...userFilter, type: "income" } },
        { $group: { _id: { month: { $month: '$month' }, year: { $year: '$year' } }, total: { $sum: '$sum' } } },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
        
    ]).limit(6);
    
    const costsTransactions = await Transaction.aggregate([
        { $match: { ...userFilter, type: "costs" } },
        { $group: { _id: { month: { $month: '$month' }, year: { $year: '$year' } }, total: { $sum: '$sum' } } },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
    ]).limit(6);

    

    res.json({
        status: "success",
        code: 200,
        data: {
            incomeTransactions,
            costsTransactions,
        }
    });
};

module.exports = getTransactionByMonth;