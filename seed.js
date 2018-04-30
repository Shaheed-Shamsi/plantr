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
  db.close();
})
.then(() => {
    return Vegetable.create({
        name: 'Carrot',
        color: 'Orange',
    })
    .then()
})
.catch((e) => {
  console.log('Disaster! Something went wrong!')
  console.error(e);
  db.close()
})

//returns a promise with resolves if the sync is successful and rejects with anerror if omething is wrong

