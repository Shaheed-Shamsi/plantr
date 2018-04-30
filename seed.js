const { db } = require('./models');
const { Gardener } = require('./models');
const { Plot } = require('./models');
const { Vegetable } = require('./models');

let SeedFunction = function() {
<<<<<<< HEAD
    return 
=======
   return
>>>>>>> 5564aabca177296fa3b6a1c6e109230c7ff05c16
}


db.sync({force: true})
.then(()=>{
 console.log('the Database has been synced')
})
<<<<<<< HEAD
.then(() => {
    return Vegetable.create({
        name: 'Carrot',
        color: 'Orange',
    })
    .then()
})
=======
.then(() => Vegetable.create({
  name: 'Carrot',
  color: 'Orange',
}))
.then(carrot =>
 Gardener.create({
  name: "Herbert",
  age: 50,
  favoriteVegetableId: carrot.id,
 })
)
.then(gardener =>
  Plot.create({
    size: 2,
    shaded: false,
    gardenerId: gardener.id,
  })
)
>>>>>>> 5564aabca177296fa3b6a1c6e109230c7ff05c16
.catch((e) => {
 console.log('Disaster! Something went wrong!')
 console.error(e);
})
.finally(() => {
  db.close();
})



//returns a promise with resolves if the sync is successful and rejects with anerror if omething is wron
