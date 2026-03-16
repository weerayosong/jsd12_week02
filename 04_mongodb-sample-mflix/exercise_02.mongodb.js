// Select the database
use('sample_mflix');

// ex2-1 ans: 'The Great Train Robbery', find One FROM movies WHERE name: type: "movie", rated: "TV-G"
// db.movies.findOne({ type: "movie", rated: "TV-G" });

db.movies.aggregate([ { $match: { type: "movie", rated: "TV-G" } }, { $limit: 1 } ]);

// ex2-2 ans: 58 movies, find all FROM movies WHERE name: type: "movie", rated: "TV-G" then count them.
// db.movies.find({ type: "movie", rated: "TV-G" }).count();

// *****************************