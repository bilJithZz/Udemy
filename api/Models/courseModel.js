const mongoose=require("mongoose")
const { Schema } = mongoose;

const contentSchema=new Schema({
    order:Number,
    title:String,
    length:Number,
    shortnote:String,
})

const courseSchema=new Schema({
    id:Number,
    categories:String,
    name:String,
    description:String,
    price:Number,
    author:String,
    duration:Number,
    content:[contentSchema]
})


const course=mongoose.model("course",courseSchema)
module.exports=course;