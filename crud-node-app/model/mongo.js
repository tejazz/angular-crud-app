var mongoose    =   require("mongoose");
mongoose.connect('webtechdevops.centralindia.cloudapp.azure.com:51003/test-t');

//Create instance of Schema
var mongoSchema =   mongoose.Schema;

//Create schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};

//Create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);