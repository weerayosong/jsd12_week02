// Select the database
use('sample_mflix');

// ex3-1 ans: 19 theaters in Alabama, find all theaters WHERE "location.address.state": "AL" then count them.
// db.theaters.find({ "location.address.state": "AL" }).count();

// ex3-2 ans: 1 theater in city La Quintaa, find all theaters WHERE "location.address.city": "La Quinta" then count them.
db.theaters.find({ "location.address.city": "La Quinta" }).count();

// ex3-3 ans: like this,

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