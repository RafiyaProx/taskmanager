require('../src/db/mongoose')
const User=require('../src/models/user')
// //6480081b6ea664dcf8104d22
// User.findByIdAndUpdate('6480070afaeb61af27705b84',{age:23}).then((user)=>{
// console.log(user)
// return User.countDocuments({age:23})}).then((res)=>{
//     console.log(res)
//  }).catch((e)=>{
//     console.log(e)
// })

const updat=async(id,age)=>{
const user=await User.findByIdAndUpdate(id,{age})
const count=await User.countDocuments({age})
return count
}
//6480070afaeb61af27705b84
updat('6480070afaeb61af27705b84',20).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e) 
})