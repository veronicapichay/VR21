const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

people.shift();//remove greg
console.log(people);
people.pop();//remove james
console.log(people);

people.unshift("Matt");//add matt
console.log(people);
people.push("Sugey");//add matt
console.log(people);
people.slice(2);//copy without matt & mary
console.log(people.slice(2));
console.log(people.indexOf('Mary'));//index of Mar
console.log(people.indexOf('foo'));
people = ["Greg", "Mary", "Devon", "James"]
people.splice(2, 1, 'Elizabeth', 'Artie' );
console.log(people);