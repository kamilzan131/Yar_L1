

window.addEventListener('DOMContentLoaded', () => {
  
 



  // timer

  const date = new Date();
  const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let day = days[date.getMonth()];
  const dateLine = document.querySelector('.promo-date');
  console.log(day);
  console.log(dateLine);


  dateLine.innerHTML = `Только сегодня ${date.getDate()} ${day}`;



  
 
  
});






