const { fetchBreedDescription } = require("./breedFetcher");

// accept one cli argument
const breedName = process.argv.slice(2, 3).join("");

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    throw error;
  } else {
    console.log(desc);
  }
});
