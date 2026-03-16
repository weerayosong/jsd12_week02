// Select the database
use('sample_mflix');

// ex1-1
// db.comments.find({});

// ex1-2
// db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") })

// ex1-3
// db.comments.findOne({ email: "john_bishop@fakegmail.com" });

// ex1-4
// db.comments.findOne({ name: "John Bishop" });

// *****************************

// ex2-1
// db.movies.findOne({ type: "movie", rated: "TV-G" });

// ex2-2
// db.movies.find({ type: "movie", rated: "TV-G" }).count();

// ex3-1
// db.movies.findOne({ type: "movie", rated: "TV-G" });