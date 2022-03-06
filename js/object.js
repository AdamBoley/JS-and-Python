let details = {
    subject: 'JavaScript',
    students: ['John', 'Paul', 'Emily', 'Lisa'],
    teacher: 'Chris',
    venue: 'online',
    contact: 'chris@gmail.com'
};
//This is a JS object - note the lack of quote marks around each property name, and their presence around the values
console.log(details.teacher);//This is dot notation - console.log(details[teacher]) would achieve the same thing
console.log(details.contact);