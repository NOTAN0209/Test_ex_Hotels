var numb1 = 25;
var numb2 = 41;

function numberComputers(int) {

    var numComp = String(int);
    var numCompArr = [];

    for (var i = 0; i < numComp.length; i++) {
        numCompArr.push(numComp.charAt(i));
    }
    
    var firstLetter = numCompArr[numCompArr.length-1];
    var secondLetter = numCompArr[numCompArr.length-2];
    
    if ((firstLetter >=5 && firstLetter <= 9) || 
        (firstLetter === "0") ||
        (firstLetter ==1 && secondLetter == 1) ||
        (firstLetter >=2 && firstLetter <= 4 && secondLetter == 1)
    ){
       alert (int +" компьютеров");}
        
    if (firstLetter == 1 && secondLetter !=1) {
       alert (int + " компьютер")}
    
    if (firstLetter >=2 && firstLetter <= 4 && secondLetter != 1) {
       alert(int + " компьютера")
    }
  
}
numberComputers(numb1);
numberComputers(numb2);

/*
Задача 3
Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже,
соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
*/