
document.write("<h1>Таблица умножения</h1>"); 
 
for (let j = 1; j <= 9; j++){  
    document.write("<div style='float: left; width: 70px;'>"); 
for (let i = 1; i <=9; i++)  
{ 
    document.write(i + "*" + j + "=" +(i*j) + "<br>"); 
}  
document.write ("</div>"); 
} 


/*
Задача 6
Написать метод, который в консоль выводит таблицу умножения. 
На вход метод получает число, до которого выводит таблицу умножения. 
В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:
*/