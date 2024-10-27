// Task 1

console.log("Task 1")

const user = {
    name:"John",
    hobby:'football',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for(let key of keys){
    console.log(`${key}: ${user[key]}`);
}

// Task 2

const countProps = obj => Object.keys(obj).length;

console.log("Task 2");
console.log(countProps({
    name:"Ivan",
    age:17,
    grade:11,
}));

// Task 3

const findBestEmployee = employees => {
    const keys = Object.keys(employees);
    const values = Object.values(employees);

    return keys[values.indexOf(Math.max(...values))];
}

console.log("Task 3");

console.log(findBestEmployee({
    "John":24,
    "Misha":38,
    "David":35,
    "Bob":13,
}));

// Task 4

console.log("Task 4");

const countTotalSalary = employees => Object.values(employees)
    .reduce((acc,el) => acc+el,0);

console.log(countTotalSalary({
    "John":55700,
    "Misha":35609,
    "David":45783,
    "Bob":19054,
}));

// Task 5

const getAllPropValues = (arr, prop) => arr.map((el) => el[prop]);

const workers = [
    {
        name:'John',
        age:23,
        experience:'3 years',
    },
    {
        name:'Misha',
        age:22,
        experience:'4 years',
    },
    {
        name:'David',
        age:19,
        experience:'1 year',
    },
    {
        name:'Bob',
        age:59,
        experience:'35 years',
    },
];

console.log("Task 5");

console.log(getAllPropValues(workers,"age"));

// Task 6

console.log('Task 6');

const calculateTotalPrice = (allProducts, productName) => {
    const priceOfProduct = allProducts.find((el) => el.name === productName).price;
    const quantityOfProduct = allProducts.find((el) => el.name === productName).quantity;

    return priceOfProduct * quantityOfProduct;
};

const products = [
    {
        name:'apple',
        price:15,
        quantity:27,
    },
    {
        name:'cheese',
        price:98,
        quantity:13,
    },
    {
        name:'soda',
        price:23,
        quantity:56,
    },
    {
        name:'pork',
        price:125,
        quantity:11,
    },
];

console.log(calculateTotalPrice(products,'soda'));
console.log(calculateTotalPrice(products,'pork'));
console.log(calculateTotalPrice(products,'apple'));
console.log(calculateTotalPrice(products,'cheese'));

// Task 7

console.log("Task 7");

const account = {
    money:4590,
    transactions:[],

    deposit(amount){
        this.money += amount;
        console.log(`На рахунок зачислено - $${amount}, теперішня сума - $${this.money}`);
        this.transactions.push(`deposit - ${amount}`);
    },

    withdraw(amount){
        this.money -= amount;
        console.log(`З рахунку вирахувано - $${amount}, теперішня сума - $${this.money}`);
        this.transactions.push(`withdraw - ${amount}`);
    },

    transactionsStory(){
        console.log("Історія транзакцій")
        console.log(this.transactions);
    }
};

account.withdraw(200);
account.withdraw(300);
account.withdraw(90);
account.withdraw(20);
account.withdraw(150);

account.deposit(300);
account.deposit(1000);
account.deposit(350);
account.deposit(30);
account.deposit(130);
account.deposit(900);

account.transactionsStory();
