const db = require('./models');
db.sync({force: true})
.then(()=>{
  console.log('the Database has been synced')
  db.close();
})
.catch((e) => {
  console.log('Disaster! Something went wrong!')
  console.error(e);
  db.close()
})

//returns a promise with resolves if the sync is successful and rejects with anerror if omething is wrong

