const {Board} = require("./Board");
const {Cheese} = require("./Cheese")
const {User} = require("./User")


// User has many Boards, Board belongs to a one User
// One to Many Relationship
User.hasMany(Board);
Board.belongsTo(User);

//Boards has many Cheeses through board_cheese
//Cheese has many boards, through board_cheese
// many to many relationship

Board.belongsToMany(Cheese, {through: "board_cheese"});
Cheese.belongsToMany(Board, {through: "board_cheese"});



module.exports = {Board, Cheese, User}