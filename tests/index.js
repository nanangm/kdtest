

const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        borrowed: 0,
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        borrowed: 200,
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        borrowed: 250,
        account: {
            balance: { amount: 200 },
        },
    },
    {
        monthNumber: 3, // three months ago
        borrowed: 400,
        account: {
            balance: { amount: 250 },
        },
    },
    {
        monthNumber: 4, // four months ago
        borrowed: 500,
        account: {
            balance: { amount: 400 },
        },
    },
    {
        monthNumber: 5, // five months ago
        borrowed: 600,
        account: {
            balance: { amount: 500 },
        },
    },
    {
        monthNumber: 6, // six months ago
        borrowed: 600,
        account: {
            balance: { amount: 600 },
        },
    },
]


const accountTypeChecker = accountBalanceHistory.forEach(function (item, index,) {
    let a = item.account.balance.amount;
    let b = item.borrowed;
    let c = b - a;
    let result = c;
    console.log('this is amount paid', c);
    if (c != 100) {
        console.log('variable :', a);
        return (result ? a : b);
    } else if (c == 100) {
        console.log('fixed amount: ', b);
    }
    console.log(item, index)

})
module.exports = accountTypeChecker
