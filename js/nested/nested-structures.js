//A complex arrangement of data structures, nested inside each other

let company = { //company is an object
    name: 'Apple, Inc', //a simple property / value
    founded: 1976, // another simple property / value
    financials: { // a property of company, which is itself an object
      incomeStatement: { // a property of financials, which is yet another object
        years: [2020, 2019, 2018], //a property of incomeStatement, which is an array
        revenue: [125, 120, 115],
        costs: [100, 100, 100],
        profit: [25, 20, 15]
      },
      balanceSheet: { //another property of the financials object, which is itself an object
        years: [2020, 2019, 2018],
        assets: [200, 190, 180],
        liabilties: [100, 95, 90],
        equity: [100, 95, 90]
      },
      cashFlow: {
        years: [2020, 2019, 2018],
        operating: [75, 65, 55],
        investing: [22, 20, 18],
        financing: [-94, -80, -75]    
      }
    },
    competitors: ['Microsoft', 'Amazon', 'Samsung'] // a basic array property of company
  }
  
  console.log(company.name); //prints Apple, Inc
  console.log(company.competitors); //prints all of the elements of the competitors array
  console.log(company.competitors[0]); // accesses the competitors array and prints the element with an index of 0
  console.log(company.financials.incomeStatement.years); //dives deep into the nested data structure to get the array called years inside incomeStatement
  console.log(company.financials.incomeStatement.revenue[0]);//dives deep into the nested data structure to get the array called revenue inside incomeStatement


// a simpler nested data structure:

let studentData = [ //creates a new array with two elements
    { //the first element, which is an object, note that objects within arrays cannot be given identifiers
    name: 'John Smith',
    email: 'john@gmail.com',
    subjects: ['Math', 'Psychology', 'Physics', 'Chemistry', 'Biology', ]
},
{//the second element, another object
    name: 'Mary Jones',
    email: 'mary@gmail.com',
    subjects: ['Fine Art', 'Music', 'Biology', 'Geography', 'Politics', ]
}
];

console.log(studentData);