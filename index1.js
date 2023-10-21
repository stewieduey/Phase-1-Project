document.addEventListener("DOMContentLoaded", () => console.log("We're All In This Together!"));
//used to make sur everything is connected correctly

document.addEventListener('DOMContentLoaded', function() {
    const heroesList = document.getElementById('heroesList');

    // Fetch hero name and image from the JSON 
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
                const li = document.createElement('li');
                const img = document.createElement('img');
                img.src = hero.image;
                const nameParagraph = document.createElement('p');
                nameParagraph.textContent = hero.name;


                li.appendChild(img);
                li.appendChild(nameParagraph);


                return li;
            });


            heroesList.append(...heroElements);
        })
        .catch(error => {
            console.error('Hello from the othersiiiiiiide!!!', error.message);
            //added this to let me know if something is wrong with my code in this area
        });
});


//this should display the powers of the clicked hero image in the powers div
document.addEventListener('DOMContentLoaded', function() {
    const heroesList = document.getElementById('heroesList');
    const heroPowers = document.getElementById('heroPowers');
    // Fetch power data from the JSON file
    fetch('http://localhost:3000/heroes',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })  
    .then(response => response.json())
        .then(heroes => {
            heroes.forEach(heroes => {
                const img = document.getElementById('image');
                img.src = hero.image;
                img.addEventListener('click', () => {
                    // Clear existing powers
                    heroPowers.textContent = '';
                    if (Array.isArray(heroes.powers)) {
                        // Display the powers of the clicked hero
                        heroPowers.textContent = `Powers: ${hero.powers.join(' ')}`;
                   //back ticks to interlope the powers of the click hero
                    } else {
                        // Handle the case if powers are not in an array
                        heroPowers.textContent = "Powers not available for this hero.";
                    }
                });
                heroesList.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Houston, we have a problem:', error.message);
        });
});
//when the 'DuMark's Faves' button is clicked it will filter out all the heroes that is "fave: false"
//only displaying those with true.
//document.addEventListener('DOMContentLoaded', function() {
  //  const fave = document.getElementById('fave');


    //let heroesData = []; // Store the heroes data here


    // 
 //   fetch('http://localhost:3000/heroes',{
   //     method: 'GET',
     //   headers: {'Content-Type': 'application/json'
      //  },
        //body: JSON.stringify()
    //})
       // .then(response => response.json())
        //.then(heroes => {
          //  heroesData = heroes; // Store the heroes data


            // Initial display of heroes
            //displayHeroes(heroes);


            // Add a click event listener to the "DuMark’s Faves" button
            //fave.addEventListener('click', () => {
                // Filter heroes with a property of 'true'
              //  const favoriteHeroes = heroesData.filter(hero => hero.favorite === true);


                // Display the filtered heroes
                //displayHeroes(favoriteHeroes);
            //});
        //})
        //.catch(error => {
          //  console.error('I hate it here!:', error.message);
        //});


    // Function to display heroes in the list
    //function displayHeroes(heroes) {
      //  heroesList.innerHTML = ''; 
        // Clear existing heroes


        //const heroElements = heroes.map(hero => {
          //  const li = document.createElement('li');
          //  const img = document.createElement('img');
           // img.src = hero.image;
            //const nameParagraph = document.createElement('p');
            //nameParagraph.textContent = hero.name;


            //li.appendChild(img);
            //li.appendChild(nameParagraph);


            //return li;
        });


        heroesList.append(...heroElements);
    }
});
// //giving the user the option to delete a hero of choice.
// //document.addEventListener('DOMContentLoaded', function() {
//   //  const heroesList = document.getElementById('heroesList');

//     // Fetch the hero data from the JSON file 
//     //fetch('http://localhost:3000/heroes')
//       //  .then(response => response.json())
//         .then(heroes => {
//             const heroElements = heroes.map(hero => {
//                 const li = document.createElement('li');
//                 const img = document.createElement('img');
//                 img.src = hero.image;
//                 const nameParagraph = document.createElement('p');
//                 nameParagraph.textContent = hero.name;


//                 const deleteButton = document.createElement('button');
//                 deleteButton.textContent = 'Delete';
//                 deleteButton.addEventListener('click', () => {
//                     // Call a function to delete the hero
//                     deleteHero(hero);
//                     // Update the displayed list
//                     li.remove();
//                 });


//                 li.appendChild(img);
//                 li.appendChild(nameParagraph);
//                 li.appendChild(deleteButton);


//                 return li;
//             });


//             heroesList.append(...heroElements);
//         })
//         .catch(error => {
//             console.error('Something is wrong again!!!:', error.message);
//         });


//     // Function to delete a hero
//     function deleteHero(hero) {
       
//     }
// });

