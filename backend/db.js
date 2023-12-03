const mongoose = require('mongoose');


// database connection using mongodb atlas
const mongoURI = 'ADD YOUR URL HERE'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected successfully");
    }
    catch (error){
        console.log("Error in connection", error);
    }
}

module.exports = mongoDB;