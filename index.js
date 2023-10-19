//const showFavesButton = document.getElementById("showFavesBtn");
//const fetchButton = document.getElementById("h3");
//Find the 'heroes' element by its ID
const heroes = document.getElementById("heroes");

document.addEventListener("DOMContentLoaded", () => console.log("Connected!"));
// Using this to see that my 3 sheets are connected and loading correctly.

document.addEventListener("DOMContentLoaded", function () {
  const heroName = document.getElementById('heroName');
  const imgPlaceHolder = document.getElementById('heroImage');
  const togglePowersButton = document.getElementById('togglePowers');
  const heroPowers = document.getElementById('heroPowers');
});


document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:3000/heroes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
       .then(response => response.json())
       .then(hero => {
        //Creating a loop to iterate thru each item in the array and display it
        for (let i = 0; i < hero.length; i++){
        let currentHero = hero[i];
    //Creates a image placeholder to house the images after it runs thru the loop
      const heroName = document.createElement("h3")
      heroName.setAttribute("class", "hero-names")  
    //add the image key : value pairs from our fetch request
    
      const imgPlaceHolder = document.createElement("img")
      imgPlaceHolder.setAttribute("id" , [i])
      imgPlaceHolder.src = currentHero.image
      //add the hero name key : value pairs from our fetch request
    
      heroName.textContent = currentHero.name
      const heroContainer = document.createElement("div"); // it should create a container for each hero
      heroContainer.appendChild(heroName); // Appends the name to the container
      heroContainer.appendChild(imgPlaceHolder); // Appends the image to the container
      heroes.appendChild(heroContainer); // Append the container to the 'heroes' element
      //... WHat I was hoping to do was define an HTML element with the id of heroes having it display each hero's name and image of said hero. As you can see in my code i used document.getElementById to select the heroes newly created elements from the JSON to the container i made.
    
      heroes.append(heroName, imgPlaceHolder) 
    }
    })
    });   
    // this code is supposed to take the hero's powers from the heroes object and converts
    // them into a list of HTML list the items and then displays this list 
    // within the heroPowers element on the web page.
    
    // Fetch data from db.json
      fetch('http://localhost:3000/heroes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
          .then(response => response.json())
          .then(heroes => {
   // Initializes or activates the heroes information
  heroes.forEach(hero => {
      const heroName = document.getElementById('heroName');
      const imgPlaceHolder = document.getElementById('heroImage');
      const togglePowersButton = document.getElementById('togglePowers');
      const heroPowers = document.getElementById('powers');


      heroName.textContent = hero.name;
      imgPlaceHolder.src = hero.image;


      // Should set up a click event for the "Show Powers" button
      togglePowersButton.addEventListener('click', () => {
          if (heroPowers.style.display === 'none') {
              // Show powers
              heroPowers.style.display = 'block';
              togglePowersButton.textContent = 'Hide Powers';


              // Display hero's powers
              heroPowers.innerHTML = hero.powers.map(power => `<li>${power}</li>`).join('');
          } else {
              // Hide powers
              heroPowers.style.display = 'none';
              togglePowersButton.textContent = 'powers';
              // Clear the displayed powers
              heroPowers.innerHTML = '';
          }
      });
  });
})
.catch(error => {
  // Handle the fetch error and display the specific error message
  console.error('Error fetching data:', error.message);
});

// Define a function to add a hero to the JSON
function addNewHero() {
  // Get user input
  const heroName = prompt("Enter hero's name:");
  const imageLink = prompt("Enter hero's image link:");
  const powers = prompt("Enter hero's powers (comma-separated):");
  //the prompt() function is used to display a dialog box with a message to the user and an input field 
//where the user can enter data (typically text). 
//It’s commonly used for taking input from the user in a simple and interactive way.

  // Split the powers string into an array
  const powersArray = powers.split(',').map(power => power.trim());

  // Create a JSON object with hero data
  const heroData = {
      name: heroName,
      image: imageLink, // Use 'image' instead of 'imageLink'
      powers: powersArray, // Use the array of powers
  };

  // Make a POST request to the JSON endpoint
  fetch('http://localhost:3000/heroes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(heroData),
  })
  .then(response => response.json())
  .then(data => {
      // Display a success message or handle the response as needed
      console.log('Hero added successfully:', data);
  })
  .catch(error => {
      console.error('Error adding hero:', error);
  });
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', addNewHero);
 //Fetching data from the JSON, it will return an array of hero objects. In order to do this I had to loop through this array using 'forEach'. Inside this loop, I had to set up the hero information for each hero, such as the name and image. But with the "Show Powers" button I had to set up a click event for each hero. By doing this, each hero’s information and functionality are correctly initialized for all heroes in the JSON.

 //the addNewHero function will allow the user to input for the hero’s name, image link, and powers in a pop up window.
	//I also learned that I had to divide the powers input into an array so that it’s stored as an array in the heroData object.
	//The JSON/API (heroData) is supposed to now correctly includes the name, image, and an array of powers. Using a POST request I could specify the correct Content-Type header as JSON and converting heroData to JSON using JSON.stringify.
fetch('http://localhost:3000/heroes', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify()
  })
  .then(response => response.json())
  .then(data => {
      // Display a success message or handle the response as needed
      console.log('Hero added successfully:', data);
  })
  .catch(error => {
      console.error('Error adding hero:', error);
  });


// Add a click event listener to the "Add to Gallery" button
const addButton = document.getElementById("btn1");
addButton.addEventListener("click", addNewHero);

// Fetch to filter through the JSON and filter out the items with undefined and null displayed.
fetch('http://localhost:3000/heroes')
  .then(response => response.json())
  .then(data => {
    // Filter out undefined or null values
    const filteredData = filterUndefinedAndNull(data);

    // Now we can use 'filteredData' in our application
    console.log(filteredData);
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });

// Function to filter out undefined and null values
function filterUndefinedAndNull(obj) {
  const filteredObj = {};
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}

function deleteHero(deleteButton) {
  // Get the parent <li> element of the clicked button
  const listItem = deleteButton.parentElement;

  // Get the hero's name from the <span> element within the <li>
  const heroName = listItem.querySelector('.heroName').textContent;

  // Ask for confirmation before deleting
  const confirmDeletion = confirm(`Are you sure you want to delete ${heroName}?`);
//Should pop up a window confirming the deletion of the hero
  if (confirmDeletion) {
    // Remove the <li> element from the list
    listItem.remove();
    alert(`${heroName} has been deleted from the gallery.`);
  } else {
    alert(`${heroName} was not deleted.`);
  }
}

// AFter all that I need to call the function and pass the clicked button element as an argument...
const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    deleteHero(button);
  });
});