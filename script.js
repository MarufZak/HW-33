do {
    var a = +prompt('Введите число');
} while (a == 0 || isNaN(a));

var b = +prompt('Введите степень');
if (b == 0 || isNaN(b)) {
    b = 2
}

var answer = 1;

for (let i = 0; i < b; i++) {    
    answer = answer * a;
}

alert(answer);