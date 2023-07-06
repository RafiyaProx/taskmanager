const app=require('./app')

const port = process.env.PORT
// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//         fileFilter(req,file,cb){
//             if(!file.originalname.match(/\.(doc|docx)$/))
//             {return cb(new Error('please upload a doc'))


//             }

//             // cb(new Error('file must be pdf'))
//              cb(undefined,true)
//             // cb(undefined,false)
//     }
// })
// const errormiddleware=(req,res,next)=>{
//     throw new Error('from my middleware')
// }
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
// res.status(400).send({error: error.message})
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// const main = async () => {
//     // const task = await Task.findById('648a8f377597c8a14684bd40')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('648a8f377597c8a14684bd40')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()