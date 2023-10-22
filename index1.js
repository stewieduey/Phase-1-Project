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
       // });


        //heroesList.append(...heroElements);
    //}
//});
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


document.addEventListener("DOMContentLoaded", () => {
    const heroesList = document.getElementById('heroesList');
    const heroPowers = document.getElementById('heroPowers');

    // Fetch hero data from a JSON file 
    fetch('http://localhost:3000/heroes')
        .then(response => response.json())
        .then(heroes => {
            heroesList.innerHTML = ''; // Clear existing heroes

            heroes.forEach(hero => {
                const img = document.createElement('image');
                img.src = hero.image;

                // Add an event listener to show powers when an image is clicked
                img.addEventListener('click', () => {
                    heroPowers.textContent = `Powers of ${hero.name}: ${hero.powers}`;
                });

                //li.appendChild(img);
                //heroesList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
//at this point i got rid of all the error messages but still nothing is working correctly.