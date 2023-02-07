let m1 = [7, 17, 1, 9, 1, 17, 56, 56, 23,1,];
let m2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];


function find(mm1, mm2){

  let res = [];
  let cm = mm1.slice(0); 

  for(let i = 0; i < cm.length; i++){

    if(res.includes(cm[i])) continue; 
        delete cm[i] 
    if (cm.includes(mm1[i]) && mm2.includes(mm1[i])) { 
        let cm2 = mm2.slice(0); 
        delete cm2[cm2.indexOf(mm1[i])] 
        if(cm2.includes(mm1[i])) res.push(mm1[i]) 
    }
  }
  return res
}

alert(find(m1, m2))

function _find (m1, m2, n = 0) {

  let o = m1.reduce((a,b)=>{ a[b] ? a[b]++ : a[b] = 1; return a },{});
  let o2 =m2.reduce((a,b)=>{ a[b] ? a[b]++ : a[b] = 1; return a },{});

  for(let k in o) if(o[k] < n || o2[k] < n || !o2[k]) delete o[k];
  return Object.keys(o).map(Number)
}

alert( _find(m1, m2, 1), _find(m1, m2, 2), _find(m1, m2, 3))

function __find (m1, m2, n = 0) {

  let obj = [...m1,...m2].reduce((o,k)=>{ o[k] ? o[k]++ : o[k] = 1; return o },{});
  return Object.keys(obj).filter( k => obj[k] / 2 >= n ).map(Number)
}
alert( __find(m1, m2, 2))

/*
Задача 5
Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов 
(= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
*/