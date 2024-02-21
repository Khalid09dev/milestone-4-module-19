const colors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    'golden rod': '#daa520',
};
// console.log(colors["golden rod"]);

const car = {
    make: 'Toyota',
    model: 'Corola',
    year: 2020,
};
car['passenger capacity'] = 5;
// console.log(car);

const student = {
    name: 'Ali Baba',
    id: 2323,
    physics: {
        subject: 'hsc physics',
        author: 'shahjahan topon',
        marks: 30,
    }
};
// console.log(student.physics);

let studenT = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true,
}
// console.log(Object.keys(studenT).length);

let myObject = {
    name: 'John Doe',
    age: 28,
    city: 'Texas',
    isStudent: true,
}
for(const [key, value] of Object.entries(myObject)) {
    const type = typeof value;
    console.log('key:',key,'|','type:', type);
}