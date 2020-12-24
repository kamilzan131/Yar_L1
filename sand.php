<?php 
$fio = $_POST['fio'];
$email = $_POST['email'];
$date = $_POST['date'];
//Создаем переменные

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$date =htmlspecialchars($date);
//фильтр преобразования символов

$fio = urldecode($fio);
$email = urldecode($email);
$date = urldecode($date);
//Декодирование Урла

$fio = trim($fio);
$email = trim($email);
$date = trim($date);
//Удаление пробелов с конца и начала формы


mail("yararkzn@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Date: ".$date ,"From: a.kamilzan@gmail.com \r\n");

if (mail("yararkzn@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Date: ".$date ,"From: a.kamilzan@gmail.com \r\n"))
 {
    header('location: thank-you.html');
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>