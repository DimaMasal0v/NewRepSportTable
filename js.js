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
.then(jsonData => {
  const tbody = document.getElementById('table-body');

  jsonData.forEach((row) => {
    const tr = document.createElement('tr');
    tr.classList.add('flex', 'flex-col', 'flex-no', 'wrap', 'sm:table-row', 'sm:mb-0', 'mb-5');
    tr.innerHTML = `
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.number}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Fio}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Date}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Discharge}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Place}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Time}</td>
      <td class="border-grey-light border hover:bg-gray-100 p-3">${row.Coach}</td>
    `;
    tbody.appendChild(tr);
  });
})
.catch(error => console.error('Ошибка загрузки данных:', error));

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
// Header JSON
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/header.json')
    .then(response => response.json())
    .then(data => {
      // Populate HTML with data
      document.getElementById('table__title').textContent = data.title;
      document.getElementById('table__subtitle').textContent = data.subtitle;
      document.getElementById('date-competition').textContent = data.date;
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

// Awards JSON
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/awards.json')
    .then(response => response.json())
    .then(data => {
      // Populate HTML with data
      document.getElementById('awards-title').textContent = data.awardsSection.title;

      data.awardsSection.awards.forEach(award => {
        const container = document.getElementById(award.containerId);
        const img = document.getElementById(award.imgId);
        const text = document.getElementById(award.textId);

        if (container && img && text) {
          img.src = award.imgSrc;
          img.alt = award.imgAlt;
          text.innerHTML = award.text;
        } else {
          console.warn(`One or more elements with IDs '${award.containerId}', '${award.imgId}', '${award.textId}' not found in the HTML.`);
        }
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

// JSON About us
document.addEventListener('DOMContentLoaded', function () {
  // Загрузка данных из JSON
  fetch('./json/text__about__us.json')
    .then(response => response.json())
    .then(data => {
      // Вставка данных в HTML
      document.getElementById('about-us-title').textContent = data.aboutUs.title;
      document.getElementById('about-us-subtitle').textContent = data.aboutUs.subtitle;
      document.getElementById('about-us-text').innerHTML = data.aboutUs.description;

      // Create and replace the first image
      const imgElement1 = document.createElement('img');
      imgElement1.src = data.aboutUs.aboutus__img;
      const existingImgElement1 = document.getElementById('about-us__img');
      existingImgElement1.parentNode.replaceChild(imgElement1, existingImgElement1);

      // Create and replace the second image
      const imgElement2 = document.createElement('img');
      imgElement2.src = data.aboutUs.aboutus__img1;
      const existingImgElement2 = document.getElementById('about-us__img1');
      existingImgElement2.parentNode.replaceChild(imgElement2, existingImgElement2);
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

// Work JSON
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/text__clients.json')
    .then(response => response.json())
    .then(data => {
      // Populate HTML with data
      document.getElementById(data.statistics.clientsPercentage.id).textContent = data.statistics.clientsPercentage.text;
      document.getElementById(data.statistics.clientsText.id).textContent = data.statistics.clientsText.text;
      document.getElementById(data.statistics.employeesNumber.id).textContent = data.statistics.employeesNumber.text;
      document.getElementById(data.statistics.employeesText.id).textContent = data.statistics.employeesText.text;
      document.getElementById(data.statistics.projectsCompleted.id).textContent = data.statistics.projectsCompleted.text;
      document.getElementById(data.statistics.projectsText.id).textContent = data.statistics.projectsText.text;
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

//Block JSON
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/text__block.json')
    .then(response => response.json())
    .then(data => {
      // Populate HTML with data
      const servicesContainer = document.querySelector('.container-grid');

      data.services.forEach(serviceData => {
        // Create service container
        const serviceContainer = document.getElementById(serviceData.id);

        // Set service image source
        const serviceImage = serviceContainer.querySelector('img');
        serviceImage.src = serviceData.imageSrc;
        serviceImage.alt = serviceData.title; // Set alt attribute for accessibility

        // Set service title
        const serviceTitle = serviceContainer.querySelector('h2');
        serviceTitle.textContent = serviceData.title;

        // Set service description
        const serviceDescription = serviceContainer.querySelector('p');
        serviceDescription.textContent = serviceData.description;
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

// Recent JSON
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/text__recent.json')
    .then(response => response.json())
    .then(data => {
      // Update left section
      const leftSection = document.getElementById('recent-works-left');
      leftSection.querySelector('#recent-works-title').textContent = data.recentWorks.left.title;
      leftSection.querySelector('#recent-works-subtitle').textContent = data.recentWorks.left.subtitle;

      // Update image in left section
      const leftImage = leftSection.querySelector('#recent-img');
      leftImage.src = data.recentWorks.left.images[0].src;
      leftImage.alt = data.recentWorks.left.images[0].alt;

      // Update projects in left section
      leftSection.querySelector('#villa-title').textContent = data.recentWorks.left.projects[0].title;
      leftSection.querySelector('#villa-description').innerHTML = data.recentWorks.left.projects[0].description;

      // Update button in left section
      const leftButton = leftSection.querySelector('#recent__btn');
      leftButton.textContent = data.recentWorks.left.button.text;
      leftButton.href = data.recentWorks.left.button.link;

      // Update right section
      const rightSection = document.getElementById('recent-works-right');

      // Update images in right section
      data.recentWorks.right.images.forEach((imageData, index) => {
        const imageElement = rightSection.querySelector(`#recent-img${index + 1}`);
        imageElement.src = imageData.src;
        imageElement.alt = imageData.alt;
      });

      // Update projects in right section
      rightSection.querySelector('#hotel-title').textContent = data.recentWorks.right.projects[0].title;
      rightSection.querySelector('#hotel-description').innerHTML = data.recentWorks.right.projects[0].description;

      rightSection.querySelector('#pool-title').textContent = data.recentWorks.right.projects[1].title;
      rightSection.querySelector('#pool-description').innerHTML = data.recentWorks.right.projects[1].description;

      // Update button in right section
      const rightButton = rightSection.querySelector('#recent__btn');
      rightButton.textContent = data.recentWorks.right.button.text;
      rightButton.href = data.recentWorks.right.button.link;
    })
    .catch(error => console.error('Error fetching JSON:', error));
});

// Footer
document.addEventListener('DOMContentLoaded', function () {
  // Load data from JSON file
  fetch('./json/footer.json')
    .then(response => response.json())
    .then(data => {
      const footer = data.footer;

      // Update footer title and send hi link
      document.getElementById('footer-title').textContent = footer.title;
      document.getElementById('footer-send-hi').textContent = footer.sendHi;

      // Update location
      document.getElementById('footer-location').textContent = footer.location;

      // Update email details
      document.getElementById('footer-email-label').textContent = footer.emailLabel;
      document.getElementById('footer-email').innerHTML = footer.email;

      // Update phone details
      document.getElementById('footer-phone-label').textContent = footer.phoneLabel;
      document.getElementById('footer-phone').textContent = footer.phone;

      // Update copyright text
      document.getElementById('footer-copyright').textContent = footer.copyright;

      // Update connect label and social icons
      document.getElementById('footer-connect').textContent = footer.connectLabel;
      const socialIcons = footer.socialIcons;
      for (let i = 0; i < socialIcons.length; i++) {
        const socialIconElement = document.getElementById(`footer-social-icon-${i + 1}`);
        socialIconElement.src = socialIcons[i];
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
});



