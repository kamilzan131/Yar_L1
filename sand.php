<?php 
$fio = $_POST['fio'];
$email = $_POST['email'];
$date = $_POST['date'];
$tel = $_POST['tel'];

//Создаем переменные

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$date =htmlspecialchars($date);
$tel =htmlspecialchars($tel);
//фильтр преобразования символов

$fio = urldecode($fio);
$email = urldecode($email);
$date = urldecode($date);
$tel = urldecode($tel);
//Декодирование Урла

$fio = trim($fio);
$email = trim($email);
$date = trim($date);
$tel = trim($tel);
//Удаление пробелов с конца и начала формы


mail("yararkzn@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Date: ".$date.". Tel:" .$tel,"From: yararkzn@yandex.ru \r\n");




if (mail("yararkzn@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". Date: ".$date.". Tel:" .$tel,"From: yararkzn@yandex.ru \r\n"))
 {
    header('location: thank-you.html');
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>