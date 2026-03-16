// Select the database
use('sample_mflix');

// ex4-1 ans: 557 movies, find all movies that plot have "American" words(regex) and they have options of "insensitive"(i) letter.
// db.movies.find({ plot: { $regex: "American", $options: "i" } }).count();

// ex4-2 ans 8 movies, find all movies that plot have end with "street." and they have options of "insensitive" letter.
// db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count();

// ex4-3 like this,
// {
//   _id: ObjectId('59a47286cfa9a3a73e51e73d'),
//   theaterId: NumberInt('1020'),
//   location: {
//     address: {
//       street1: '79220 Hwy 111',
//       city: 'La Quinta',
//       state: 'CA',
//       zipcode: '92253'
//     },
//     geo: {
//       type: 'Point',
//       coordinates: [
//         Double('-116.28111'),
//         Double('33.709164')
//       ]
//     }
//   }
// }
db.theaters.findOne({ "location.address.city": "La Quinta" });

// *****************************