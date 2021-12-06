const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(tutorials){
//     const titleCase = tutorials.map(function(string){
//     string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1))
//   })
//     return titleCase;
// }

function titleCased(){
  return tutorials.map((string) =>{
    const words = string.split(" ")
    const goes = words.map((word) =>{ return word[0].toUpperCase() + word.slice(1)})
    const together = goes.join(" ")
    return together;
  }) 
    // const all = together.join(" ")
    // const everything = together.map((string) => string.join(" "))
  // return all;
}
