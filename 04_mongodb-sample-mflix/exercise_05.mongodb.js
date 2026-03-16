// Select the database
use('sample_mflix');

// ex5-1 ans: find all movies that ORDER BY(.sort()) DESC(runtime: -1) with runtime LIMIT to 5 records.
// db.movies.find({}).sort({ runtime: -1 }).limit(5);

// ex5-2 ans: find all movies that runtime less than 60, then sort DESC, then limit to 5 records.
// db.movies.find({ runtime: { $lt: 60 } }).sort({ runtime: -1 }).limit(5);

// ex5-3 ans: find all movies that (year > 1954 AND year < 1966), then sort ASC, then limit to 3 records
// db.movies.find({ year: { $gt: 1954, $lt: 1964 } }).sort({ year: 1 }).limit(3);

// ex5-4 ans: 3934 movies, find all movies that ((released:) ISODate >= 1990 AND ISODate < 2001, then count them.
db.movies.find({ released: { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } }).count();

// *****************************