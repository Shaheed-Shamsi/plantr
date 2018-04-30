const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener', {
   name: Sequelize.STRING,
   age: Sequelize.INTEGER,
})
const Plot = db.define('plot', {
 size: Sequelize.INTEGER,
 shaded: Sequelize.BOOLEAN,
})

const Vegetable = db.define('vegetable', {
<<<<<<< HEAD
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
=======
 name: Sequelize.STRING,
 color: Sequelize.STRING,
 planted_on: {
   type: Sequelize.DATE,
   defaultValue: Sequelize.NOW
 }
>>>>>>> 5564aabca177296fa3b6a1c6e109230c7ff05c16
})


Plot.belongsTo(Gardener)
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});


module.exports = {
<<<<<<< HEAD
  db,
  Plot,
  Vegetable,
  Gardener
=======
 db,
 Plot,
 Vegetable,
 Gardener
>>>>>>> 5564aabca177296fa3b6a1c6e109230c7ff05c16
};

