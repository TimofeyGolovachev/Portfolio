//База данных
let listData = [];

//Создание элементов
const $app = document.getElementById('app');
const $table = document.createElement('table');
const $tableHead = document.createElement('thead');
const $tableBody = document.createElement('tbody');

const $tableHeadTr = document.createElement('tr');
const $tableHeadThFullName = document.createElement('th');
const $tableHeadThBirthdate = document.createElement('th');
const $tableHeadThStartdate = document.createElement('th');
const $tableHeadThFaculty = document.createElement('th');

$tableHeadThFullName.textContent = 'ФИО';
$tableHeadThBirthdate.textContent = 'Дата рождения';
$tableHeadThStartdate.textContent = 'Год начала обучения';
$tableHeadThFaculty.textContent = 'Факультет';

$tableHeadTr.append($tableHeadThFullName, $tableHeadThBirthdate, $tableHeadThStartdate, $tableHeadThFaculty)

$tableHead.append($tableHeadTr)
$table.append($tableHead);
$table.append($tableBody);
$app.append($table);


//Создание объекта Студент
function addStudent() {
  let user = {};
  user.name = document.getElementById('app-form__name').value;
  user.surname = document.getElementById('app-form__surname').value;
  user.lastname = document.getElementById('app-form__lastname').value;
  user.birthdate = document.getElementById('app-form__birthdate').value;
  user.startdate = document.getElementById('app-form__startdate').value;
  user.faculty = document.getElementById('app-form__faculty').value;
  return user;
}


//Отрисовка
// let addBtn = document.getElementById('add-btn');
let form = document.getElementById('app-form');
// addBtn.addEventListener('click', function (e) {
form.addEventListener('submit', function (e) {
  $tableBody.innerHTML = '';
  e.preventDefault();
  addStudent();

  // console.log(new Date(document.getElementById('app-form__birthdate').value).getTime());
  // console.log(new Date('01.01.1900').getTime());



  if (((new Date(document.getElementById('app-form__birthdate').value)).getTime()) < (new Date('01.01.1900')).getTime()) {
    alert('Неверный возраст')
  } else if (document.getElementById('app-form__startdate').value < 2000) {
    alert('Неверная дата рождения');
  } else {
    listData.push(addStudent());
    for (let i = 0; i < listData.length; i++) {
      const $tableBodyTr = document.createElement('tr');
      const $tableBodyTdFullName = document.createElement('td');
      const $tableBodyTdBirthdate = document.createElement('td');
      const $tableBodyTdStartdate = document.createElement('td');
      const $tableBodyTdFaculty = document.createElement('td');


      $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
      $tableBodyTdBirthdate.textContent = listData[i].birthdate.split('-').reverse().join('.');
      $tableBodyTdStartdate.textContent = listData[i].startdate;
      $tableBodyTdFaculty.textContent = listData[i].faculty;


      $table.append($tableBody);
      $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
      $tableBody.append($tableBodyTr);
    }
  }
})









//Сортировка
$tableHeadThFullName.addEventListener('click', function () { //Сортировка по ФИО
  listData.sort((a, b) => a.surname > b.surname ? 1 : -1);
  console.log(listData);
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    const $tableBodyTr = document.createElement('tr');
    const $tableBodyTdFullName = document.createElement('td');
    const $tableBodyTdBirthdate = document.createElement('td');
    const $tableBodyTdStartdate = document.createElement('td');
    const $tableBodyTdFaculty = document.createElement('td');


    $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
    $tableBodyTdBirthdate.textContent = listData[i].birthdate;
    $tableBodyTdStartdate.textContent = listData[i].startdate;
    $tableBodyTdFaculty.textContent = listData[i].faculty;

    $table.append($tableBody);
    $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
    $tableBody.append($tableBodyTr);
  }
});

$tableHeadThBirthdate.addEventListener('click', function () { //Сортировка по Возрасту
  listData.sort((a, b) => a.birthdate < b.birthdate ? 1 : -1);
  console.log(listData);
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    const $tableBodyTr = document.createElement('tr');
    const $tableBodyTdFullName = document.createElement('td');
    const $tableBodyTdBirthdate = document.createElement('td');
    const $tableBodyTdStartdate = document.createElement('td');
    const $tableBodyTdFaculty = document.createElement('td');

    $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
    $tableBodyTdBirthdate.textContent = listData[i].birthdate;
    $tableBodyTdStartdate.textContent = listData[i].startdate;
    $tableBodyTdFaculty.textContent = listData[i].faculty;

    $table.append($tableBody);
    $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
    $tableBody.append($tableBodyTr);
  }
});

$tableHeadThStartdate.addEventListener('click', function () { //Сортировка по Году начала обучения
  listData.sort((a, b) => a.startdate > b.startdate ? 1 : -1);
  console.log(listData);
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    const $tableBodyTr = document.createElement('tr');
    const $tableBodyTdFullName = document.createElement('td');
    const $tableBodyTdBirthdate = document.createElement('td');
    const $tableBodyTdStartdate = document.createElement('td');
    const $tableBodyTdFaculty = document.createElement('td');

    $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
    $tableBodyTdBirthdate.textContent = listData[i].birthdate;
    $tableBodyTdStartdate.textContent = listData[i].startdate;
    $tableBodyTdFaculty.textContent = listData[i].faculty;

    $table.append($tableBody);
    $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
    $tableBody.append($tableBodyTr);
  }
});

$tableHeadThFaculty.addEventListener('click', function () { //Сортировка по Факультету
  listData.sort((a, b) => a.faculty > b.faculty ? 1 : -1);
  console.log(listData);
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    const $tableBodyTr = document.createElement('tr');
    const $tableBodyTdFullName = document.createElement('td');
    const $tableBodyTdBirthdate = document.createElement('td');
    const $tableBodyTdStartdate = document.createElement('td');
    const $tableBodyTdFaculty = document.createElement('td');

    $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
    $tableBodyTdBirthdate.textContent = listData[i].birthdate;
    $tableBodyTdStartdate.textContent = listData[i].startdate;
    $tableBodyTdFaculty.textContent = listData[i].faculty;

    $table.append($tableBody);
    $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
    $tableBody.append($tableBodyTr);
  }
});

//Фильрация
const $filterName = document.getElementById('filter-name');
const $filterFaculty = document.getElementById('filter-faculty');
const $filterEducationStart = document.getElementById('filter-education__start');
const $filterEducationEnd = document.getElementById('filter-education__end');
const $searchBtn = document.getElementById('search-btn');
const $resetBtn = document.getElementById('reset-btn')

$resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    const $tableBodyTr = document.createElement('tr');
    const $tableBodyTdFullName = document.createElement('td');
    const $tableBodyTdBirthdate = document.createElement('td');
    const $tableBodyTdStartdate = document.createElement('td');
    const $tableBodyTdFaculty = document.createElement('td');


    $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
    $tableBodyTdBirthdate.textContent = listData[i].birthdate.split('-').reverse().join('.');
    $tableBodyTdStartdate.textContent = listData[i].startdate;
    $tableBodyTdFaculty.textContent = listData[i].faculty;


    $table.append($tableBody);
    $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
    $tableBody.append($tableBodyTr);
  }
})

$searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  $tableBody.innerHTML = '';
  for (let i = 0; i < listData.length; i++) {
    let fullName = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname; //Фильтр ФИО
    if (fullName === $filterName.value) {
      const $tableBodyTr = document.createElement('tr');
      const $tableBodyTdFullName = document.createElement('td');
      const $tableBodyTdBirthdate = document.createElement('td');
      const $tableBodyTdStartdate = document.createElement('td');
      const $tableBodyTdFaculty = document.createElement('td');

      $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
      $tableBodyTdBirthdate.textContent = listData[i].birthdate;
      $tableBodyTdStartdate.textContent = listData[i].startdate;
      $tableBodyTdFaculty.textContent = listData[i].faculty;

      $table.append($tableBody);
      $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
      $tableBody.append($tableBodyTr);
    }

    let faculty = listData[i].faculty; //Фильтр Факультет
    if (faculty === $filterFaculty.value) {
      const $tableBodyTr = document.createElement('tr');
      const $tableBodyTdFullName = document.createElement('td');
      const $tableBodyTdBirthdate = document.createElement('td');
      const $tableBodyTdStartdate = document.createElement('td');
      const $tableBodyTdFaculty = document.createElement('td');

      $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
      $tableBodyTdBirthdate.textContent = listData[i].birthdate;
      $tableBodyTdStartdate.textContent = listData[i].startdate;
      $tableBodyTdFaculty.textContent = listData[i].faculty;

      $table.append($tableBody);
      $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
      $tableBody.append($tableBodyTr);
    }

    let startEducation = Number(listData[i].startdate); //Фильтр Дата начала обучения
    if (startEducation === Number($filterEducationStart.value)) {
      const $tableBodyTr = document.createElement('tr');
      const $tableBodyTdFullName = document.createElement('td');
      const $tableBodyTdBirthdate = document.createElement('td');
      const $tableBodyTdStartdate = document.createElement('td');
      const $tableBodyTdFaculty = document.createElement('td');

      $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
      $tableBodyTdBirthdate.textContent = listData[i].birthdate;
      $tableBodyTdStartdate.textContent = listData[i].startdate;
      $tableBodyTdFaculty.textContent = listData[i].faculty;

      $table.append($tableBody);
      $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
      $tableBody.append($tableBodyTr);
    }

    let endEducation = Number(listData[i].startdate) + 4; //Фильтр Дата окончания обучения
    if (endEducation === Number($filterEducationEnd.value)) {
      const $tableBodyTr = document.createElement('tr');
      const $tableBodyTdFullName = document.createElement('td');
      const $tableBodyTdBirthdate = document.createElement('td');
      const $tableBodyTdStartdate = document.createElement('td');
      const $tableBodyTdFaculty = document.createElement('td');

      $tableBodyTdFullName.textContent = listData[i].surname + ' ' + listData[i].name + ' ' + listData[i].lastname;
      $tableBodyTdBirthdate.textContent = listData[i].birthdate;
      $tableBodyTdStartdate.textContent = listData[i].startdate;
      $tableBodyTdFaculty.textContent = listData[i].faculty;

      $table.append($tableBody);
      $tableBodyTr.append($tableBodyTdFullName, $tableBodyTdBirthdate, $tableBodyTdStartdate, $tableBodyTdFaculty);
      $tableBody.append($tableBodyTr);
    }
  }
})
