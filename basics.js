// // // **********************************************
// // // ******************* PART 1 *******************
// // // **********************************************
// // // Write a function called "twoFer" that accepts a person's name
// // // It should return a string in the format "one for <name>, one for me"
// // // If no name is provided, it should default to "you"
// // function twoFer(name: string = "you"): string {
// //   return `one for ${name}, one for me`;
// // }
// // // twoFer() => "One for you, one for me"
// // // twoFer("Elton") => "One for Elton, one for me"
// // console.log(twoFer());
// // // **********************************************
// // // ******************* PART 2 *******************
// // // **********************************************
// // // Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// // // isLeapYear(2012) => true
// // // isLeapYear(2013) => false
// // const isLeapYear = (year: number): boolean => {
// //   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };
// // // To determine whether a year is a leapyear, use this "formula":
// // A YEAR IS A LEAPYEAR IF
// // - year is a multiple of 4 AND not a multiple of 100
// // OR...
// // - year is a multiple of 400
// // hint - use modulo
// // type TestType = {
// //   x: number;
// //   y: number;
// //   z?: number;
// // };
// // const test: TestType = {
// //   x: 1,
// //   y: 2,
// // };
// // console.log(test.z);
// // Write the Movie type alias to make the following two variables properly typed
// // Make sure that "originalTitle" is optional and "title" is readonly
// type Movie = {
//   readonly title: string;
//   originalTitle?: string;
//   director: string;
//   releaseYear: number;
//   boxOffice: {
//     budget: number;
//     grossUS: number;
//     grossWorldwide: number;
//   };
// };
// const dune: Movie = {
//   title: "Dune",
//   originalTitle: "Dune Part One",
//   director: "Denis Villeneuve",
//   releaseYear: 2021,
//   boxOffice: {
//     budget: 165000000,
//     grossUS: 108327830,
//     grossWorldwide: 400671789,
//   },
// };
// const cats: Movie = {
//   title: "Cats",
//   director: "Tom Hooper",
//   releaseYear: 2019,
//   boxOffice: {
//     budget: 95000000,
//     grossUS: 27166770,
//     grossWorldwide: 73833348,
//   },
// };
// // Write a function called getProfit that accepts a single Movie object
// // It should return the movie's worldwide gross minus its budget
// function getProfit(movie: Movie) {
//   return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }
// // For example...
// // getProfit(cats) => -21166652
// console.log(getProfit(cats));
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (prev, next) {
        return prev + next.price;
    }, 0);
};
console.log(getTotal([
    { name: "coffee mug", price: 11.5 },
    { name: "coffee mug", price: 11.5 },
    { name: "coffee mug", price: 11.5 },
]));
