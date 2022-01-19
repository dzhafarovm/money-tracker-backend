const { NotFound } = require("http-errors");
const { Transaction } = require("../../models");

const getTransactionByType = async (req, res) => {
    const { _id } = req.user;
    const { type } = req.params;

    const data = await Transaction.find({ owner: _id });
    
    // const { isValidId } = mongoose.Types.ObjectId.isValid(_id);
    // if (!isValidId) {
    //     throw new NotFound(`transactions of user ${email} not found`)
    // };
        
    // const data = await Transaction.find({ type });

    if (!data) {
        throw new NotFound(`Not authorized`);
    };
        
    
    // const result = data.filter(d => (d.month === month));

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