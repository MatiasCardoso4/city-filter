const suggestions = document.querySelector(".suggestions");
const input = document.querySelector(".search");
let search = "";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

async function getCities() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

async function searchCity(e) {
  const data = await getCities();
  search = e.target.value;
suggestions.innerHTML = ''
  data.filter(({ city, state }) => {
    
    if (city.toLowerCase().includes(search.toLowerCase()) || state.toLowerCase().includes(search.toLowerCase())) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="name">${city}, ${state}</span>`;
      suggestions.appendChild(li);
    }
  });

}

input.addEventListener("input", (e) => searchCity(e));

