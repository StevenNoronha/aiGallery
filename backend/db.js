const mongoose = require('mongoose');
// password of mongodb : dTi3wLZ2Bz5K9z0T

// database connection using mongodb atlas
const mongoURI = 'mongodb+srv://camraobro:dTi3wLZ2Bz5K9z0T@cluster0.sxheesi.mongodb.net/?retryWrites=true&w=majority'
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