 var dogs = prompt("How many dogs yo have?");
 var greeting;

 if (dogs > 10 && dogs < 11 ) {
   greeting = 'Welcom to my page!';
 } else if (dogs < 10) {
   greeting = 'go out please!';
 } else {
   greeting = 'Welcome!';
 }

 document.write('<h2>' +greeting+ '</h2>');
 
 