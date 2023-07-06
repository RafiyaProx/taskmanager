const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    //useFindAndModify:true
}).then(()=>{
    console.log("connected to database")
}).catch(()=>{
    console.log('unable to connect')
})

// const user=mongoose.model('User',{
//     name:{
//         type:String,  
//         trim:true,                      //defining model
//         required:true

//     },
//     email:{
//         type:String,
//         required:true,
//         lowercase:true,
//         // validate(value){
//         //     if(!validator.isEmail(value)){
//         //         throw new Error('email is invalid')
//         //     }
//         // }
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:6,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('pswd cannot contain "password"')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0)
//                 throw new Error("age must be +ve")
//         }
//     }
// },'collec12')

// const me=new user({
//     name:'riya',
//     email:'abc@gmail.com',
//     age:22,
//      password:'1234567'                               //creating instance
// })

// me.save().then(
//     ()=>{
//         console.log(me)
//     }                                           //saving instance
// ).catch((err)=>{
// console.log('error',err)
// })

// const task=mongoose.model('task',{
//     desc:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })

// const Task=new task({
//     desc:"thia is some text",
//     completed:true
// })

// Task.save().then(
//         ()=>{
//             console.log(Task)
//         }                                           //saving instance
//     ).catch((err)=>{
//     console.log('error',err)
//     })