const User: String = "vlad";

const createUsers = <U> (name: U):void => {
    console.log(name)
}


createUsers(User);

const arr: number[] = [1, 2, 3, 4, 5];


console.log(arr);

interface User<T> {
    id: T;
}

const mango: User<number> = { id: 24 };

console.log(mango);

