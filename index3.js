document.addEventListener("DOMContentLoaded", () => {
    renderHeros();
  });
  
  const heroContainer = document.getElementById("heroesContainer");
  const heroPowersContainer = document.getElementById("heroPowersContainer");
  const heroForm = document.getElementById("heroForm");
  const favesButton = document.getElementById("faves");
  
  heroForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  
    let newHero = {
      name: e.target.heroName.value,
      image: e.target.heroImage.value,
      powers: e.target.heroPowers.value,
    };
  
    createNewHero(newHero);
    heroForm.reset();
});

function createNewHero(hero) {
  fetch("http://localhost:3000/heroes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hero),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(hero);
      renderHeros();
    });
}

function showPowers(hero) {
  heroPowersContainer.replaceChildren();
console.log("Card clicked!");
  let powersDescription = document.createElement("p");
  powersDescription.textContent = hero.powers;
  console.log("Power desc:", powersDescription);
  console.log(heroPowersContainer);
  heroPowersContainer.appendChild(powersDescription);
}

function renderHeros() {
  heroPowersContainer.replaceChildren();

  fetch("http://localhost:3000/heroes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((heroes) => {
      const heroElements = heroes.map((hero) => {
        const card = document.createElement("div");
        const img = document.createElement("img");
        img.src = hero.image;
        const name = document.createElement("p");
        name.textContent = hero.name;

        card.appendChild(img);
        card.appendChild(name);
card.addEventListener("click", () => {
          showPowers(hero);
          console.log(hero);
        });

        heroContainer.append(card);
        // return card;
      });

      //   heroContainer.append(...heroElements);
    })
    .catch((error) => {
      console.error("Hello from the othersiiiiiiide!!!", error.message);
      //added this to let me know if something is wrong with my code in this area
    });
}