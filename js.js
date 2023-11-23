//Select/Index
var coachSelect = document.getElementById('coach-select');
var coachList = ['Все тренера:', 'Мерк', 'Герасимов', 'Иванов', 'Сема', 'Андреев'];

coachList.forEach(function(coach) {
  var option = document.createElement('option');
  option.value = coach;
  option.textContent = coach;
  coachSelect.appendChild(option);
});

fetch('distance.json')
.then(response => response.json())
.then(data => {
  var table = document.getElementById('table-sort');
  var tbody = table.querySelector('tbody');
  data.forEach(row => {
    var tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.number}</td>
      <td>${row.Fio}</td>
      <td>${row.Date}</td>
      <td>${row.Discharge}</td>
      <td>${row.Place}</td>
      <td>${row.Time}</td>
      <td>${row.Coach}</td>
    `;
    if (row.Place === 1) {
      tr.classList.add('gold');
    }
    tbody.appendChild(tr);
    });
  });

//Close Burger Menu
document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".menu__mobile-btn");
  const menuOverlay = document.querySelector(".menu__overlay");
  const closeBtn = document.querySelector(".menu__close-btn");

  burgerBtn.addEventListener("click", function () {
    menuOverlay.classList.toggle("menu__overlay--open");
  });

  closeBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("menu__overlay--open");
  });
});


//   coachSelect.addEventListener('change', function() {
//     var selectedCoach = coachSelect.value;

//     tbody.querySelectorAll('tr').forEach(row => {
//       if (selectedCoach === '' || selectedCoach === 'Все тренера:' || row.cells[6].textContent === selectedCoach) {
//         row.classList.remove('hidden');
//       } else {
//         row.classList.add('hidden');
//       }
//     });
//   });
//   tbody.querySelectorAll('tr').forEach(row => {
//     row.classList.remove('hidden');
//   });
// });







// Sort
// document.addEventListener('DOMContentLoaded', () => {

//     const getSort = ({ target }) => {
//         const order = (target.dataset.order = -(target.dataset.order || -1));
//         const index = [...target.parentNode.cells].indexOf(target);
//         const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
//         const comparator = (index, order) => (a, b) => order * collator.compare(
//             a.children[index].innerHTML,
//             b.children[index].innerHTML
//         );

//         for(const tBody of target.closest('table').tBodies)
//             tBody.append(...[...tBody.rows].sort(comparator(index, order)));

//         for(const cell of target.parentNode.cells)
//             cell.classList.toggle('sorted', cell === target);
//     };

//     document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

// });

// №2 Sort ---
// var coachSelect = document.getElementById('coach-select');
//         var tableBody = document.getElementById('table-body');
//         var filterButton = document.getElementById('filter-button');

//         function updateTable(selectedCoach) {
//             tableBody.innerHTML = ''; 

//             participants.forEach(function(participant) {
//                 if (selectedCoach === 'all' || participant.coach === selectedCoach) {
//                     var row = document.createElement('tr');
//                     row.innerHTML = `
//                         <td>${participant.id}</td>
//                         <td>${participant.name}</td>
//                         <td>${participant.date}</td>
//                         <td>${participant.grade}</td>
//                         <td>${participant.place}</td>
//                         <td>${participant.time}</td>
//                         <td>${participant.coach}</td>
//                     `;
//                     tableBody.appendChild(row);
//                 }
//             });
//         }

//         filterButton.addEventListener('click', function() {
//             var selectedCoach = coachSelect.value;
//             updateTable(selectedCoach);
//         });
//         updateTable('all');

// Slider
