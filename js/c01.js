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

 

    var showNumber = prompt("What the number of dogs do you have?")
    var item;
    if (showNumber >= 10){
    item = '<img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1094874726.png?crop=0.542xw:0.814xh;0.0472xw,0.127xh&resize=640:*">'
    }
    else {
        item = '<img src ="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg">'
    }


document.write('<h2>' +item+ '</h2>');
 
 