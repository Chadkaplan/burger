// Require the ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },
    // The variables, cols, and vals are arrays.
    insertOne: function(cols, vals, cb){
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

// Export to the controller
module.exports = burger;