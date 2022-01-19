const getTransactionByMonth = async (req, res, next) => {
    const { day, month, year} = req.params;
    const { _id, email } = req.user

    // const removeZeroString = str => {
    //     return String(parseInt(str, 10));
    // };

    const data = await Transaction.find({
        owner: _id,
        'month': month,
        'year': year,
    });
    
    res.json({
        status: 'success',
        code: 200,
        data
    })
 
};

module.exports = getTransactionByMonth;