const orm = require("../config/orm.js");

const burger = {
    //display all function
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    //create function
    create: function (nameText, cb) {
        orm.create("burgers", "name", nameText, function (res) {
            cb(res);
        });
    },
    //update burgers to devoured
    update: function (val, condition, cb) {
        orm.update("burgers", "devoured", val, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;

