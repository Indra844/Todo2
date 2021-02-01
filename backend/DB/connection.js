const mongoose=require('mongoose');

const URI = "mongodb+srv://dbUser:Indra@279@cluster0.7vzyc.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
    await mongoose.connect(URI,{
        useUnifiedTopology:true,useNewUrlParser:true});
        console.log("db connected");
    }
    catch(e){
        console.log("catch an error :" ,e);
    }
};

module.exports = connectDB;