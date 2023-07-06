require('../src/db/mongoose')
const task=require('../src/models/tasks')
// task.findByIdAndDelete('648170792bed3c4b3c72759c').then((res)=>{
//     console.log(res)
//     return task.countDocuments({completed:false})
// }).then((c)=>{
// console.log(c)
// }).catch((e)=>{
// console.log(e)
// })
const del=async(id)=>{
    const t=await task.findByIdAndDelete(id)
    const c=await task.countDocuments({completed:true})
    return c
}
//648170c07065212a43d328e8
del('648170c07065212a43d328e8').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})