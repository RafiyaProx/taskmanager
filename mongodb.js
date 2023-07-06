//CRUD


// const mongodb = require('mongodb-legacy')
// const MongoClient=mongodb.MongoClient//gives access to the functions
// const objid=mongodb.ObjectId

const {MongoClient,ObjectId}=require('mongodb-legacy')

const connectionURL='mongodb://127.0.0.1:27017'
const database='task-manager'

// const id=new ObjectId()
// console.log(id.toHexString())
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL,{ useUnifiedTopology: true,useNewUrlParser:true},
    (error,client)=>{
        if(error){
          return  console.log("unable to connect database")
        }
    console.log("connection established!!")
      const db = client.db(database)
//   db.collection('users').updateOne({_id:new ObjectId('647f060b275e966f6988afcc')},
//      
//       {
//    $set: {
//         name:ssss
//     }
// }                                                     //update
//       ).then((res)=>{
//         console.log(res)

//       }).catch((err)=>{
// console.log(err)
//       })

        // db.collection('tasks').updateMany(
        //     {completed:false},//finding
        //     {
        //         $set:{
        //             completed:true
        //         }
        //     }

        // ).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })

// db.collection('users').deleteMany({
//     name:'riya'
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

db.collection('tasks').deleteOne({
    description:'work3'
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


    }
    
)

    //     db.collection('users').findOne({_id:new ObjectId('647f060b275e966f6988afcc')},(error,user)=>{
    //         if(error){
    //             return console.log("unable to fetch")
    //         }                                                                                //reading
    //         console.log(user)
    //     })
    // })
//         db.collection('users').find({name:'roshi'}).toArray((error,users)=>{
// console.log(users)
//         })







    //    db.collection('users').insertOne({
            
    //         name:'abcd',
    //         age:22
     
    //    },(error,result)=>{              //insert one
    //     if(error)
    // { 
    // return console.log("unable to insert user")
    // }

    //  console.log(result) 
    //  })
        // db.collection('users').insertMany([
        //     {
        //         name:'purnima'         //insert many
        //     },
        //     {
        //       name:'dharani'  
        //     }
        // ],(error,result)=>{
        //     if(error)
        //     {
        //         return console.log('unable to insert')
        //     }
        //     console.log(result)

        // })

//         db.collection('tasks').insertMany([
//             {
//                 description:"work1",
//                 completed:true
//         },
//         {
//             description:"work2",
//             completed:false                  //insert many
//     },
//     {
//         description:"work3",
//         completed:true
// }
//     ],(error,result)=>
//     {
//         if(error){
//         return console.log('unable to insert')
//             }
//             console.log(result)
//     })
        
    







