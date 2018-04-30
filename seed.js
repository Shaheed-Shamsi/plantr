const { db } = require('./models');
const { Gardener } = require('./models');
const { Plot } = require('./models');
const { Vegetable } = require('./models');

let SeedFunction = function() {
   return
}


db.sync({force: true})
.then(()=>{
 console.log('the Database has been synced')
})
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
.catch((e) => {
 console.log('Disaster! Something went wrong!')
 console.error(e);
})
.finally(() => {
  db.close();
})



//returns a promise with resolves if the sync is successful and rejects with anerror if omething is wron
