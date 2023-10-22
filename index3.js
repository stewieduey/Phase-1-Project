document.addEventListener("DOMContentLoaded", () =>{
    displayHeroes();
});

const heroList = document.getElementById("heroesList");
const heroPowers = document.getElementById("heroPowers");
const heroForm = document.getElementById("heroForm");
const favesButton = document.getElementById("faves");

function displayHeroes() {
    heroContainer.replaceChildren = "";
    //will clear the hero container before adding a new hero so you wont see double.
    fetch('http://localhost:3000/heroes',{
    method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify()
  })
        .then(response => response.json())
        .then(heroes => {
            const heroElements = heroes.map(hero => {
                const card = document.createElement('div');
                const img = document.createElement('img');
                img.src = hero.image;
                const name = document.createElement('h4');
                name.textContent = hero.name;


                card.appendChild(img);
                card.appendChild(name);

                card.addEventListener('click', () => {
                    const powerCard = document.createElement('div');
                    const 

                });

                heroList.append(card);
                //return card;
            });


            heroesList.append(...heroElements);
        })
        .catch(error => {
            console.error('Hello from the othersiiiiiiide!!!:', error.message);
            //added this to let me know if something is wrong with my code in this area
        });

    };

    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form Submitted');

        let newHero = {
            name:e.target.heroName.value,
            image: e.target.heroImage.value,
            powers: e.target.heroPowers.value
        }

       createNewHero(newHero);
       heroForm.reset();
});

function createNewHero(hero) {
    fetch('http://localhost:3000/heroes',{
    method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(hero)
  })
        .then(response => response.json())
        .then(hero => {
            console.log(hero);
            renderHeroes();
        });
    }