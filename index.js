const mongoose = require('mongoose');


main().then((res)=>{
    console.log("connection successful");
})
.catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number
});

const User = mongoose.model("User", userSchema);

//insert one by one
const user1 = new User({name:"suarav",email:"saurav@gmail.com", age: 19});
const user2 = new User({name:"mayank",email:"mynk@gmail.com", age:20});

user1.save();
user2.save()
.then((res)=>{
   console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// inserting many
User.insertMany([
    {name:"tony",email:"tony@gmail.com",age:40},
    {name:"gaurav",email:"gaurav@gmail.com",age:45},
    {name:"gauri",email:"gauri@gmail.com",age:20}
]).then((data)=>{
    console.log(data);
})


// find
User.find({age:{$gte:47}}).then((data)=>{
    console.log(data);
});
User.findOne({_id:"685778f882ada62febe8e3f1"}).then((data)=>{
    console.log(data);
});
User.findById("685778f882ada62febe8e3f1").then((data)=>{
    console.log(data);
});


//update
User.updateOne({name:"gaurav"},{age:15}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
User.findOneAndUpdate({name:"gaurav"},{age:20},{new:true}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});


//delete
User.deleteOne({name:"gauri"}).then((res)=>{
    console.log(res);
});

User.deleteMany({age:20}).then((res)=>{
    console.log(res);
});

User.findOneAndDelete({name:"gaurav"}).then((data)=>{
    console.log(data);
})