const { NotFound } = require("http-errors");
const { Transaction } = require("../../models");

const getTransactionByMonth = async (req, res) => {
    const { month, year } = req.params;
    const { _id } = req.user;

    const data = await Transaction.find({
        owner: _id,
        'month': month,
        'year': year,
    });

    if (!data) {
        throw new NotFound(`Not authorized`);
    };        

    const result = data.filter((e) => e.month === month || e.year === year);

    res.json({
        status: "success",
        code: 200,
        result
    })
}

module.exports = getTransactionByMonth;