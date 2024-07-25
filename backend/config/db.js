const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://ipsitamoh07:fXQfrxe6SrJbGUOZ@to-do.ewl73w7.mongodb.net/?retryWrites=true&w=majority&appName=to-do').on('open', () =>{
    console.log("MongoDB Connected");
}).on('error', ()=>{
    console.log("MongoDB Connection Error!!!");
});

module.exports=connection;