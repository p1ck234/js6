function check() {
    var reg1 = /8\([0-9]{3}\)([0-9]{2}-){2}[0-9]{3}/ /* Регулярное выражение для номера телефона */
    var reg2 = new RegExp("[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,3}", "i") /* Регулярное выражение для эл почты */
    str1 = f.p3.value; // получение строки из поля с номером
    str2 = f.p4.value; // получение строки из поля с адресом
    if (!reg1.test(str1)) document.getElementById("s").innerHTML = 'Введите номер телефона правильно'
    if (!reg2.test(str2)) document.getElementById("s").innerHTML = 'Введите электронный адрес правильно'
    if (reg2.test(str2) && reg1.test(str1)) document.getElementById("s").innerHTML = 'Все правильно'
}

function check2() {
    var reg = /([0-9]{2})\.([0-9]{2})\.([0-9]{4})/; /* создание регулярного выражения */
    str = f1.pole.value; /* получение введенной строки из формы */
    mas = reg.exec(str); /* создание массива чч.мм.гг */
    date1 = new Date(mas[3], mas[2], mas[1]); /* создание объекта date со значениями элемента массива */
    date = new Date(); /* создание текущей даты */
    vozrast = (date.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000 * 365) /* определение возраста*/
    document.getElementById("b").innerHTML = "Ваш возраст: " + vozrast.toFixed(0);
}

function check3() {
    var reg = /\d/g;
    str = f2.pole.value;
    str = str.replace(reg, '*')
    document.getElementById("n").innerHTML = str;
}