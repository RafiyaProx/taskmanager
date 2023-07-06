const add=(a,b)=>{
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        res(a + b)
    },2000)

})
}


// const dowork=async()=>{

//    const s= await add(1,4)
//    const s2=await add(s,1)
//    const s3=await add(s2,1)
//    return s3
// }
// dowork().then((res)=>{
//     console.log(res)
// }).catch((e)=>
// {
//     console.log(e)
// })






const work=async()=>{

       const s= await add(1,4)
       console.log('hii')

       return s
       
    }
    
    work().then((res)=>{
        console.log(res)
    }).catch((e)=>
    {
        console.log(e)
    })