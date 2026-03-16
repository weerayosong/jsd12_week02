// Select the database
use('sample_mflix');

// ex1-1 ans: find(All) like a SELECT * FROM comments
// db.comments.find({});

db.comments.aggregate([]);

// ex1-2 ans: find One FROM comments WHERE _id: ObjectId("5a9427648b0beebeb69579f5")
// db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });

// ex1-3 ans: find One FROM comments WHERE email: "john_bishop@fakegmail.com"
// db.comments.findOne({ email: "john_bishop@fakegmail.com" });

// ex1-4 ans: find One FROM comments WHERE name: "John Bishop"
// db.comments.findOne({ name: "John Bishop" });

// *****************************