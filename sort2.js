var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort by name
students.sort(function(a, b) {
  var nameA = a.name;
  var nameB = b.name;
  // added these age variables to sort by age if the names are the same
  var ageA = a.age;
  var ageB = b.age;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

// sort by age IF the names are the same
return b.age - a.age;
  });

console.log(students)

