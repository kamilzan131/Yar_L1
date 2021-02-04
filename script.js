

window.addEventListener('DOMContentLoaded', () => {
  
 



  // timer

  const date = new Date();
  const days = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let day = days[date.getMonth()];
  const dateLine = document.querySelector('.promo-date');
  console.log(day);
  console.log(dateLine);


  dateLine.innerHTML = `Только сегодня ${date.getDate()} ${day}`;

  // function remainingTime(endtime) {
  //   const t = Date.parse(endtime) - Date.parse(new Date()),
  //     days = Math.floor(t / (1000 * 60 * 60 * 24)),
  //     hours = Math.floor((t / (1000 * 60 * 60)) % 24),
  //     minutes = Math.floor((t / (1000 * 60)) % 60),
  //     seconds = Math.floor(t / 1000 % 60);
    
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds
  //   };

  // }

  // function addZero(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;

  //   } else {
  //     return num;
  //   }
  // }
  // function setClock(selector,endtime) {
  //   const timer = document.querySelector('timer'),
  //     days = document.querySelector('#days'),
  //     hours = document.querySelector('#hours'),
  //     minutes = document.querySelector('#minutes'),
  //     seconds = document.querySelector('#seconds'),
  //     timeInterval = setInterval(updateTimer, 1000);
      
      
  //   updateTimer();
  //   function updateTimer() {
  //     const t = remainingTime(endtime);
  //     days.innerHTML = addZero(t.days);
  //     hours.innerHTML = addZero(t.hours);
  //     minutes.innerHTML = addZero(t.minutes);
  //     seconds.innerHTML = addZero(t.seconds);


  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }


  // setClock('timer', deadLine);


// /*modal*/
  
  
//   const modalWindow = document.querySelector('.modal'),
//     modalClose = modalWindow.querySelector('[data-close]'),
//     modalOpen = document.querySelectorAll('[data-open]');
  
  
//   function closeModalWindow() {
//     modalWindow.classList.remove('show');
//     modalWindow.classList.add('hide');
//     document.body.style.overflow = '';
//   }
//   function openModalWindow() {
//     modalWindow.classList.add('show');
//     modalWindow.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//     clearInterval(modalWindowTimeID);
//   }

  
//   modalOpen.forEach( btn => {
//     btn.addEventListener('click', () => {
      
//       openModalWindow();

//     });
//   });

//   modalClose.addEventListener('click', closeModalWindow);

//   modalWindow.addEventListener('click', (e) => {
//     if (e.target === modalWindow) {
//       closeModalWindow();
//     }
//   });
  

//   document.addEventListener('keydown', (e) => {
//     if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
//       closeModalWindow();
//     }
//   });


//   function showModalByScroll() {
//     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//       openModalWindow();
//       window.removeEventListener('scroll', showModalByScroll);
//       clearInterval(modalWindowTimeID);
//     }
    
//   }
  
//   const modalWindowTimeID = setTimeout(openModalWindow, 6000);
  
//   window.addEventListener('scroll', showModalByScroll);



  
 
  
});
