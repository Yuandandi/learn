interface Database {// {{{
    connection: string,
    username: string,
    password: string,
}

interface Database {
    authToken: string,
}

// 'T' has type generics value, 'U' has type inherit from 'Database' type;
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

const hasilnya = anotherFunction(
    3,
    {
        connection: "starlink",
        username: "foobarhahah",
        password: "genzHoreHore",
        authToken: "sfsew342107894sglsh"
    }
)
console.log(hasilnya);// }}}
// {{{ quiz andd course
interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class SellAble<T> {
    public cart: T[] = [];

    addToChart(product: T) {
        this.cart.push(product)
    }

    showCart() {
        console.log('Cart Content', this.cart)
    };
}

const quiz1: Quiz = { name: "Quiz 1", type: "Multiple choice"};
const quiz2: Quiz = { name: "Quiz 2", type: "Essay"};
const course1: Course = { name: "Thermodynamics", author: "John Wellaz", subject: "Fluids mechanics"};

const quizCart = new SellAble<Quiz>();
quizCart.addToChart(quiz1);
quizCart.addToChart(quiz2);
quizCart.showCart();

const courseCart = new SellAble<Course>();
// quizCart.addToChart(course1);
quizCart.addToChart(quiz2);
// }}}
