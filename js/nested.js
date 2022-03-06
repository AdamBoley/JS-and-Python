let contacts = [
    {
      name: 'Joe',
      phoneNumber: '123456789'
    },
    {
      name: 'Mary',
      phoneNumber: '456789123'
    },
    {
      name: 'Dad',
      phoneNumber: '789132456'
    },
  ];
  
  // Print each contact using its array index
  console.log(contacts[0]);//prints joe and his number
  console.log(contacts[1]);//prints mary and her number
  console.log(contacts[2]);//prints dad and his number



  // Create an array of arrays
let controls = [
    ['up', 'down', 'left', 'right'],
    ['a', 'b', 'select', 'start']
  ];
  
  // Log the first sub-array
  console.log(controls[0]);  
  
  // Log the second sub-array
  console.log(controls[1]);
  
  // In the first sub-array (index 0) each item is a direction
  console.log(controls[0][0]);  // logs 'up'
  console.log(controls[0][1]);  // logs 'down'
  console.log(controls[0][2]);  // logs 'left'
  console.log(controls[0][3]);  // logs 'right'
  
  // In the second sub-array (index 1) each item is a button
  console.log(controls[1][0]);  // logs 'a'
  console.log(controls[1][1]);  // logs 'b'
  console.log(controls[1][2]);  // logs 'select'
  console.log(controls[1][3]);  // logs 'start'