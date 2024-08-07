
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // 1. Get all the countries from Asia continent/region using filter method
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using filter method
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // 3. Print the following details name, capital, flag using forEach method
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // 4. Print the total population of countries using reduce method
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // 5. Print the country that uses US Dollars as currency
    const usdCountries = data.filter(country => {
      return country.currencies && Object.keys(country.currencies).includes('USD');
    });
    console.log('Countries using US Dollars as currency:', usdCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
