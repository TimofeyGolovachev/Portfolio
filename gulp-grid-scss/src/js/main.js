let validation = new JustValidate('.about__form')
let validationSecond = new JustValidate('.contacts__form')
let MapInfo = document.querySelector('.map-info')
let ContactsMap = document.querySelector('.contacts-map')
let HeaderForm = document.querySelector('.header-search__form')
let HeaderBtn = document.querySelector('.header__btn')
let CloseBtn = document.querySelector('#close-btn')
let burger = document.querySelector('.burger')
let HeaderMenu = document.querySelector('.header-menu')
let CloseMenu = document.querySelector('.menu-close')

CloseMenu.addEventListener('click',
  function() {
    HeaderMenu.classList.remove('header-menu--active')
  }
)
burger.addEventListener('click',
  function() {
    HeaderMenu.classList.add('header-menu--active')
  }
)
HeaderBtn.addEventListener('click',
  function () {
    HeaderForm.classList.add('active')
  }
)
CloseBtn.addEventListener('click',
  function () {
    HeaderForm.classList.remove('active')
  }
)

HeaderBtn.addEventListener('click',
  function () {
    HeaderForm.classList.add('active')
  }
)

ContactsMap.addEventListener('click',
  function () {
    MapInfo.classList.toggle('left__info--active')
  }
)


validation
  .addField("#mail", [
    {
      rule: 'required',
      errorMessage: 'Введите почту'
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат'
    }
  ])

  validationSecond
  .addField("#mail", [
    {
      rule: 'required',
      errorMessage: 'Введите почту'
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат'
    }
  ])


function init() {
  let map = new ymaps.Map('map', {
    center: [55.76871501228782, 37.637325302759805],
    zoom: 17
  })

  var myPlacemark = new ymaps.Placemark([55.769484174431504, 37.63897342416481], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/marker.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [0, 0]
  })

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  //  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(myPlacemark);
}

ymaps.ready(init);

