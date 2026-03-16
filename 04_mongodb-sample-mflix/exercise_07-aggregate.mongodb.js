// Select the database
use('sample_mflix');

// ex7-1 Retrieve the five most-recent films directed by Christopher Nolan.
// ans: stage1 match only Field "directors" = Nolan, stage2 sort DESC, stage3 limit at 5 documents, stage4 project only title: 2014 and year: Interstellar, ...;
db.movies.aggregate([
	{$match: {directors: "Christopher Nolan"}},
	{$sort: {year: -1}},
	{$limit: 5},
	{$project: {_id: 0, title: 1, year: 1}}
]);

// ex7-2 Count how many movies were released each year between 2000 - 2010 (inclusive).
// ans:
// db.movies.aggregate([
//   { $match: { year: { $gte: 2000, $lte: 2010 } } },
//   { $group: { _id: "$year", totalMovies: { $sum: 1 } } },
//   { $sort: { _id: 1 } }
// ]);

// ex7-3 Find the 10 most common genres across the entire dataset.
// ans:
// db.movies.aggregate([
//   { $unwind: "$genres" },
//   { $sortByCount: "$genres" },   // groups + counts + sorts, all in one
//   { $limit: 10 }
// ]);

// ex7-4 For each comment, attach the movie title it belongs to.
// ans:
// db.comments.aggregate([
//   {
//     $lookup: {
//       from: "movies",          // right-hand collection
//       localField: "movie_id",  // value present in comments
//       foreignField: "_id",     // matching field in movies
//       as: "movie"              // new array field to hold matches
//     }
//   },
//   { $unwind: "$movie" },       // flatten the single match
//   {
//     $project: {                // keep it tidy
//       _id: 0,
//       text: 1,
//       movieTitle: "$movie.title"
//     }
//   },
//   { $limit: 3 }
// ]);

// ex7-5 Find all movies released after 2010 and with an IMDb rating of at least 8.0.
// ans:
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         { year: { $gt: 2010 } },
//         { "imdb.rating": { $gte: 8.0 } }
//       ]
//     }
//   },
//   { $project: { _id: 0, title: 1, year: 1, "imdb.rating": 1 } }
// ]);

// ex7-6 Find movies where the primary spoken language is English or French.
// ans:
// db.movies.aggregate([
//   {
//     $match: {
//       $or: [
//         { languages: "English" },
//         { languages: "French" }
//       ]
//     }
//   },
//   { $project: { _id: 0, title: 1, languages: 1 } }
// ]);

// ex7-7 Get up to 10 movies that
// 1. Have “Drama” in their genres or an IMDb rating ≥ 7,
// 2. and were released in the 2000s (2000–2009).
// ans:
// db.movies.aggregate([
//   {
//     $match: {
//       $and: [
//         { year: { $gte: 2000, $lte: 2009 } },   
//         {
//           $or: [                               
//             { genres: "Drama" },
//             { "imdb.rating": { $gte: 7.0 } }
//           ]
//         }
//       ]
//     }
//   },
//   { $limit: 10 },
//   { $project: { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 } }
// ]);

// *****************************