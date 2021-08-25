fetch('https://reqres.in/api/users') // get info from website
.then(res => res.json()) // print response object, the data is contained in the body portion, needs a method to convert it to json, returns another promise
.then(data => console.log(data))
.catch(error => console.log('ERROR'))


fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(characters => console.log(characters));



   fetch('https://rickandmortyapi.com/api/character/')
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = characters => {
  const charactersDiv = document.querySelector('#rick-and-morty-characters');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = `Character Name: ${character.name}`;
    charactersDiv.append(characterElement);
  });
}






fetch('https://api.weather.gov/gridpoints/MTR/97,82/forecast')
   .then(response => response.json())
   .then(characters => showCharacters(characters.properties.periods));

showCharacters = characters => {
  const charactersDiv = document.querySelector('#rick-and-morty-characters');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = `Period Name: ${character.name}`;
    charactersDiv.append(characterElement);
  });
}




fetch('https://api.weather.gov/gridpoints/MTR/97,82/forecast')
   .then(response => response.json())
   .then(characters => showCharacters(characters.properties.periods));
<!--   .then(temps => showTodaysTemp(temps.properties.periods));-->


showCharacters = characters => {
  const charactersDiv = document.querySelector('#rick-and-morty-characters');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = `Period Name: ${character.name}`;
    charactersDiv.append(characterElement);
  });
  const tempDiv = document.querySelector('#todays-temp');
    characters.forEach(i =>i.name == "This Afternoon" ? {
        const tempElement = document.createElement('p');
        tempElement.innerText = `Todays Temp: ${i.temperature}`;
        tempDiv.append(tempElement);
     });
}