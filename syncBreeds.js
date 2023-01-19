// syncBreeds.js
// ... 

// synchronous function to fetch a cat breed
const breedDetails = function(breed) {

  if (breed === 'balinese') {
    return  'Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you\’ve served them for dinner.'
  }
 
  if (breed === 'bombay')
  return 'The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver\'s shoulder.'
}

// export the function
module.exports = breedDetails;



