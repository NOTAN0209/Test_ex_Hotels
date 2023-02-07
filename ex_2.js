var numb1 = 77;
var numb2 = 77.8;

function roundNumb(numb) {
    var roundFive = numb % 5;
   
    if (roundFive === 0) {
        return numb;
    } else if (roundFive >= 2.5) {
        return (numb  - roundFive + 5);
    } else {
        if (roundFive < 2.5){
        return (numb - roundFive)}
    }
    }

  alert(roundNumb(numb1));
  alert(roundNumb(numb2));

  
 /* 
Задача 2
Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
*/