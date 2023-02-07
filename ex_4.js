var numb1 = 2;
var numb2 = 5;

function intNumbs(numb) {

    var count = 0;

    for (var i=2; i <= numb-1; i++){
        
        var a = numb % i;

        if (a === 0) {
            count = count +1;
        }}     
        if  (count === 0)
            {alert(numb + - " - Простое число")
        } else {
            alert(numb + - " - Не является простым числом")
        }
    
}

intNumbs(numb1);
intNumbs(numb2);

/*
Задача 4
Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то,
является ли число простым (не имеет делителей кроме 1 и самого себя).
*/