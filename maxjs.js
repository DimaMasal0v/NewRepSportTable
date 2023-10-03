//Select/Distance
var coachSelect = document.getElementById('coach-select');
var coachList = ['Все тренеры:','Мерк', 'Герасимов', 'Иванов', 'Сема', 'Андреев'];

coachList.forEach(function(coach) {
  var option = document.createElement('option');
  option.textContent = coach;
  coachSelect.appendChild(option);
});

fetch('maxdistance.json')
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
  var coachSelect = document.getElementById('coach-select');


  coachSelect.addEventListener('change', function() {
	var selectedCoach = coachSelect.value;


	tbody.querySelectorAll('tr').forEach(row => {
	  if (selectedCoach === '' || row.cells[6].textContent === selectedCoach) {
		row.classList.remove('hidden');
	  } else {
		row.classList.add('hidden');
	  }
	});
  });
});
// Sort
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});