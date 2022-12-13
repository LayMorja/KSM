// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";
import JustValidate from 'just-validate';

const inputs = document.querySelectorAll('input, textarea');
if (inputs.length) {
   inputs.forEach(input => {
      input.addEventListener('change', () => {
         if (input.value.trim()) {
            input.classList.add('filled')
         } else {
            const closeButton = input.closest('div')?.querySelector('.close-button');
            if (closeButton) {
               closeButton.classList.remove('shown');
            }
         }
      })
      input.addEventListener('input', () => {
         input.classList.remove('filled');
         const closeButton = input.closest('div')?.querySelector('.close-button');
         if (closeButton) {
            closeButton.classList.add('shown');
         }
      })
   })
}

const closeButtons = document.querySelectorAll('.close-button');
if (closeButtons.length) {
   closeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
         e.preventDefault();
         button.closest('div').querySelector('input').value = '';
         button.closest('div').querySelector('input').classList.remove('filled');
         button.classList.remove('shown');
      })
   })
}

if (document.querySelector('.scroll-top')) {
   const scrollButton = document.querySelector('.scroll-top');
   const wrapper = document.querySelector('.wrapper');
   window.addEventListener('scroll', () => {
      if ((window.scrollY + window.innerHeight) / wrapper.offsetHeight >= 0.9) {
         scrollButton.classList.add('active');
      } else {
         scrollButton.classList.remove('active');
      }
   })
   scrollButton.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   })
}

if (document.querySelector('.footer__button')) {
   const openButton = document.querySelector('.footer__button');
   openButton.addEventListener('click', () => {
      openButton.closest('.container').querySelector('nav').classList.add('open');
      openButton.closest('.container').querySelector('.language').style.visibility = 'visible';
      openButton.style.display = 'none';
   })
}

if (document.querySelector('.contact-block form')) {
   document.querySelectorAll('.contact-block form').forEach(form => {
      const validation = new JustValidate(form);
      validation
         .addField('[name="Имя"]', [
            {
               rule: 'minLength',
               value: 2,
               errorMessage: 'Введите не менее 2 символов'
            },
            {
               rule: 'maxLength',
               value: 15,
               errorMessage: 'Введите не более 15 символов'
            },
            {
               rule: 'required',
               value: true,
               errorMessage: 'Введите имя!'
            }
         ]) 
         .addField('[name="Номер телефона"]', [
            {
               rule: 'required',
               value: true,
               errorMessage: 'Телефон обязателен',
            },
            {
            rule: 'function',
            validator: function() {
               const phone = document.querySelector('.input-tel').inputmask.unmaskedvalue();
               return phone.length === 10;
            },
            errorMessage: 'Введите корректный телефон',
            },
         ])
         .onSuccess((event) => {
            console.log('Validation passes and form submitted', event);
            let formData = new FormData(event.target);
            console.log(...formData);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
               if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                     console.log('Отправлено');
                  }
               }
            }
      
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            event.target.reset();
      });
   })
}
if (document.querySelector('#map')) {
   ymaps.ready(init);
      function init(){
         var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
      });
   }
}

if (document.querySelector('.docs')) {
   const docs = document.querySelector('.docs');
   setTimeout(() => {
      docs.classList.add('active');
   }, 1300);

   docs.querySelector('.docs__close').addEventListener('click', () => {
      docs.classList.remove('active');
   })
}

const list = document.querySelectorAll('.lang');
if (list.length) {   
   list.forEach(listItem => {
      listItem.querySelectorAll('a').forEach(link => {
         link.onclick = () => false;
      })
      const target = listItem.querySelector('.lang-item.current-lang');
      document.addEventListener('click', (e) => {
         if (e.target.closest('li') == target) {
            listItem.classList.toggle('open');
         } else {
            listItem.classList.remove('open');
         }
      })

      const activeItems = listItem.querySelectorAll('.lang-item:not(.current-lang) span');
      const value = listItem.querySelector('.current-lang span');

      activeItems.forEach(item => {
         item.addEventListener('click', () => {
            value.textContent = item.textContent;
            value.dataset.value = item.dataset.value;
         })
      })
   })
}