document.addEventListener("DOMContentLoaded", () =>{
    displayHeroes();
});

const heroList = document.getElementById("heroesList");
const heroPowers = document.getElementById("heroPowers");

function displayHeroes() {
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

                heroList.append(card);
                //return card;
            });


            heroesList.append(...heroElements);
        })
        .catch(error => {
            console.error('Hello from the othersiiiiiiide!!!:', error.message);
            //added this to let me know if something is wrong with my code in this area
        });

    }
