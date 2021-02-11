// import require library
const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  // search the database
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      // error if HTTP status code is not 200
      if (response && response.statusCode !== 200) {
        callback(
          Error(
            `HTTP Status Code ${response.statusCode}: Your request failed.`
          ),
          null
        );
        // error if error
      } else if (error) {
        callback(Error(error), null);
        // error if invalid search query
      } else if (!JSON.parse(body)[0]) {
        callback(Error(`Breed not found or invalid search query`), null);
      } else {
        // else print first result description
        const result = JSON.parse(body)[0].description;
        callback(null, result);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
