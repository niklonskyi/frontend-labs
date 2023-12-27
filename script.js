const downloadButton = document.getElementById('download-button');
const peopleContainer = document.getElementById('container');
const fetchedStatus = document.getElementById('fetched-status');

downloadButton.addEventListener('click', async () => {
  const fetchedData = await fetch('https://randomuser.me/api/?results=5');
  const people = await fetchedData.json();
  console.log(people);
  people.results.forEach((element) => {
    addPeopleCard(element);
  });
  fetchedStatus.innerText = 'Success!';
});

function addPeopleCard(peopleInfo) {
  const peopleCard = document.createElement('div');
  peopleCard.className = 'people-card';
  peopleCard.innerHTML = `
  <img src="${peopleInfo.picture.large}" alt="People Image" class="people-card-image">
  <p class="people-card-email"> Email: ${peopleInfo.email}</p>
  <p class="people-card-name">Name: ${peopleInfo.name.title} ${peopleInfo.name.first} ${peopleInfo.name.last}</p>
  <p class="people-card-phone">Phone: ${peopleInfo.phone}</p>
  <p class="people-card-city">City: ${peopleInfo.location.city}</p>
  `;
  peopleContainer.appendChild(peopleCard);
}
