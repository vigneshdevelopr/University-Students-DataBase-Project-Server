import mongoose from 'mongoose';

function createConnection(){
    const params = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
       mongoose.connect(process.env.mongourl, params)
       console.log("Your Database has been Connected Successfully ✅") 

    } catch (error) {
        console.log(error.message)
    }
}

export default createConnection;