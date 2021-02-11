// import require library
const request = require("request");

// accept one cli argument
const breedToSearch = process.argv.slice(2, 3).join("");

// search the database
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`,
  (error, response, body) => {
    // error if HTTP status code is not 200
    if (response && response.statusCode !== 200) {
      console.log(`ERROR ${response.statusCode}\nYour request failed.`);
      process.exit(1);
    }

    // error if error
    if (error) throw error;

    // error if invalid search query
    if (!JSON.parse(body)[0]) {
      console.log(`Breed not found or invalid search query`);
      process.exit(2);
    }

    // else print first result description
    const result = JSON.parse(body);
    console.log(result[0].description);
  }
);
