// // // // // **********************************************
// // // // // ******************* PART 1 *******************
// // // // // **********************************************
// // // // // Write a function called "twoFer" that accepts a person's name
// // // // // It should return a string in the format "one for <name>, one for me"
// // // // // If no name is provided, it should default to "you"
// // // // function twoFer(name: string = "you"): string {
// // // //   return `one for ${name}, one for me`;
// // // // }
// // // // // twoFer() => "One for you, one for me"
// // // // // twoFer("Elton") => "One for Elton, one for me"
// // // // console.log(twoFer());

// // // // // **********************************************
// // // // // ******************* PART 2 *******************
// // // // // **********************************************
// // // // // Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// // // // // isLeapYear(2012) => true
// // // // // isLeapYear(2013) => false

// // // // const isLeapYear = (year: number): boolean => {
// // // //   if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
// // // //     return true;
// // // //   } else {
// // // //     return false;
// // // //   }
// // // // };

// // // // // To determine whether a year is a leapyear, use this "formula":
// // // // A YEAR IS A LEAPYEAR IF
// // // // - year is a multiple of 4 AND not a multiple of 100
// // // // OR...
// // // // - year is a multiple of 400
// // // // hint - use modulo

// // // // type TestType = {
// // // //   x: number;
// // // //   y: number;
// // // //   z?: number;
// // // // };

// // // // const test: TestType = {
// // // //   x: 1,
// // // //   y: 2,
// // // // };

// // // // console.log(test.z);

// // // // Write the Movie type alias to make the following two variables properly typed
// // // // Make sure that "originalTitle" is optional and "title" is readonly
// // // type Movie = {
// // //   readonly title: string;
// // //   originalTitle?: string;
// // //   director: string;
// // //   releaseYear: number;
// // //   boxOffice: {
// // //     budget: number;
// // //     grossUS: number;
// // //     grossWorldwide: number;
// // //   };
// // // };

// // // const dune: Movie = {
// // //   title: "Dune",
// // //   originalTitle: "Dune Part One",
// // //   director: "Denis Villeneuve",
// // //   releaseYear: 2021,
// // //   boxOffice: {
// // //     budget: 165000000,
// // //     grossUS: 108327830,
// // //     grossWorldwide: 400671789,
// // //   },
// // // };

// // // const cats: Movie = {
// // //   title: "Cats",
// // //   director: "Tom Hooper",
// // //   releaseYear: 2019,
// // //   boxOffice: {
// // //     budget: 95000000,
// // //     grossUS: 27166770,
// // //     grossWorldwide: 73833348,
// // //   },
// // // };

// // // // Write a function called getProfit that accepts a single Movie object
// // // // It should return the movie's worldwide gross minus its budget

// // // function getProfit(movie: Movie) {
// // //   return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// // // }

// // // // For example...
// // // // getProfit(cats) => -21166652
// // // console.log(getProfit(cats));
// // // **********************************************
// // // ******************* PART 1 *******************
// // // **********************************************
// // // Create an empty array of numbers called "ages":
// // let ages: number[] = [];
// // // **********************************************
// // // ******************* PART 2 *******************
// // // **********************************************
// // // Create an array variable called gameBoard that starts as an empty array.
// // // It should be typed to hold a 2 dimensional array of strings
// // let gameBoard: string[][] = [];
// // // **********************************************
// // // ******************* PART 3 *******************
// // // **********************************************
// // // Create a Product type that contains a name and a price.
// // // An example product could be:
// // // {name: "coffee mug", price: 11.50}
// // type Product = {
// //   name: string;
// //   price: number;
// // };

// // // **********************************************
// // // ******************* PART 4 *******************
// // // **********************************************
// // // Write a function called getTotal that accepts an array of Product types
// // // It should return the sum of all the products' prices
// // const getTotal = (products: Product[]) => {
// //   return products.reduce((prev, next) => {
// //     return prev + next.price;
// //   }, 0);
// // };

// // console.log(
// //   getTotal([
// //     { name: "coffee mug", price: 11.5 },
// //     { name: "coffee mug", price: 11.5 },
// //     { name: "coffee mug", price: 11.5 },
// //   ])
// // );

// // **********************************************
// // ******************* PART 1 *******************
// // **********************************************
// // Create a variable called highScore that can be a number OR a boolean
// let highScore: number | boolean;
// // **********************************************
// // ******************* PART 2 *******************
// // **********************************************
// // create an array called stuff
// // it can be an array of numbers OR an array of strings
// // it cannot be an array of numbers and strings (mixed together)
// let stuff1: (number | string)[];
// let stuff2: number[] | string[];

// stuff1 = [1, "2"];
// stuff2 = [1, "2"];

// // **********************************************
// // ******************* PART 3 *******************
// // **********************************************
// // Create a literal type called SkillLevel
// // There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
// type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
// // **********************************************
// // ******************* PART 4 *******************
// // **********************************************
// // Create a type called SkiSchoolStudent
// // name must be a string
// // age must be a number
// // sport must be "ski" or "snowboard"
// // level must be a value from the SkillLevel type (from above)
// type SkiSchoolStudent = {
//   name: string;
//   age: number;
//   sport: "ski" | "snowboard";
//   level: SkillLevel;
// };

// // **********************************************
// // ******************* PART 5 *******************
// // **********************************************
// // Define a type to represent an RGB color
// // r should be a number
// // g should be a number
// // b should be a number
// type RGB = {
//   r: number;
//   g: number;
//   b: number;
// };

// // Define a type to represent an HSL color
// // h should be a number
// // s should be a number
// // l should be a number
// type HSL = {
//   h: number;
//   s: number;
//   l: number;
// };

// // Create an array called colors that can hold a mixture of RGB and HSL color types
// let colors: (RGB | HSL)[] = [];
// colors[0] = { r: 1, g: 1, b: 1 };
// colors[1] = { h: 1, s: 1, l: 1 };
// // **********************************************
// // ******************* PART 6 *******************
// // **********************************************
// // Write a function called greet that accepts a single string OR an array of strings
// // It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
// const greet = (name: string | string[]): void => {
//   if (typeof name === "string") {
//     console.log(`Hello, ${name}`);
//   } else {
//     name.forEach((n: string): void => {
//       console.log(`Hello, ${n}`);
//     });
//   }
// };
