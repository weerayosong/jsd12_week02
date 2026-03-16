// Select the database
use('sample_mflix');

// ex6-1 ans: 789 movies, find all, "year:" {>=1950 AND <=1970}, (inclusive) anything in field "country:" that have "USA"
// db.movies.find({
//   countries: {$in: ["USA"]},
//   year: {$gte: 1950, $lte: 1970}
// });

// ex6-2 ans: 
// db.movies.find({ 
//   genres: { $all: ["Drama", "History"] },
//   released: { $gt: ISODate("1970-01-01T00:00:00Z") }
// }).count();

// ex6-3 ans: 
// db.movies.find({ cast: "Roy L. McCardell" }).count();

// ex6-4 ans: 
// db.movies.find({ directors: "Hal Roach" }).count();

// ex6-5 ans: 
// db.movies.find({ directors: { $in: ["Hal Roach"] } });

// ex6-6 ans: 
// db.movies.find(
//     { directors: { $in: ["Hal Roach"] } }, 
//     {title: 1, "awards.wins": 1, _id: 0 }
// );

// ex6-6 alt 1
// db.movies.countDocuments({
//     directors: "Hal Roach",
//     "awards.wins": { $gt: 0 },
//  });

// ex6-6 alt2
// db.movies.aggregate([
//     { $match: { directors: { $in: ["Hal Roach"] } } },
//     {
//         $project: {
//             _id: 0,
//             title: "$title",
//             totalWins: { $sum: "$awards.wins" },
//         },
//     },
// ]);

// ex6-6 alt2 (See more mongoDB syntax)
db.movies.aggregate([ { $match: { directors: { $in: ["Hal Roach"] } } }, { $project: { _id: 0,title: "$title",totalWins: { $sum: "$awards.wins" }, }, } ]);

// ex6-7 ans: 
// db.movies.find(
//   {
//     year: 1995,              // condition #1
//     genres: "Action"         // condition #2  → implicit AND
//   },
//   { _id: 0, title: 1, year: 1, genres: 1 }   // projection
// );

// ex6-8 ans: 
// db.movies.find(
//   {
//     $or: [
//       { languages: "French" },
//       { languages: "Spanish" }
//     ]
//   },
//   { _id: 0, title: 1, languages: 1 }
// );

// ex6-9 ans: 
// db.movies.find(
//   {
//     year: { $gt: 2010 },                         
//     $or: [
//       { genres: "Drama" },                       
//       { "imdb.rating": { $gte: 8 } }             
//     ]
//   },
//   { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 }
// ).limit(10);

// *****************************