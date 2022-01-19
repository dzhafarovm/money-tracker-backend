const { NotFound } = require("http-errors");
const { Transaction } = require("../../models");

const getTransactionByType = async (req, res) => {
    const { type } = req.params;
    const { _id } = req.user;

    const data = await Transaction.find({ owner: _id });

    if (!data) {
        throw new NotFound(`Not authorized`);
    };        

    const result = data.filter((e) => e.type === type);

    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getTransactionByType;