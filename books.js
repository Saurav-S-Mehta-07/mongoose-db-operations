const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true   //like no null in sql
    },
    author:{
        type:String
    },
    price:{
        type:Number
    }
});

const Book = mongoose.model("Book",bookSchema);

let book2 = new Book({
    author:"RD Sharama",
    price:200
});

book2.save().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});