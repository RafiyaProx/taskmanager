const request=require('supertest')
const {userid,userOne}=require('./fixtures/db')
const app=require('../src/app')
const User=require('../src/models/user')
const { ObjectId } = require('mongodb')

//6480070afaeb61af27705b84
// beforeEach(async()=>{
//     await User.deleteOne({"_id":"6480070afaeb61af27705b84"})
//     await new User(userOne).save()
// })

test('signup user',async()=>{
    const response=await request(app).post('/users').send({
        name: userOne.name,
        email: userOne.email,
        password: userOne.password

    }).expect(201)
    const user= await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    expect(response.body).toMatchObject({
        user:{
            name: 'jia',
            email:'jia@gmail.com'
        },
        token:user.tokens[0].token
    })
    expect(user.password).not.toBe('aaaaaaaaaa')
})


test('loging in',async()=>{
   const response= await request(app).post('/users/login').send({
     
        email:  userOne.email,
        password: userOne.password
    }).expect(200)
    const user= await User.findById(userid)
    expect(user.name).toEqual('jiaaaa')
    // const user= await User.findById(userid)
    // expect(response.body.token).toBe(user.tokens[1].token)
})



test('login failure',async()=>{
        await request(app).post('/user/login').send({
            email:'jia@gmail.com',
            password:'123456789'
        }).expect(404)
})
// test('profile',asynconst user= await User.findById(userid)
    expect(user.name).toEqual('jiaaaa')c()=>{
//     await request(app)
//     .get('/users/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200)
// })

test("can't get profile unauthicated user",async()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

// test('delete account',async()=>{
//     await request(app)
//     .delete('/user/me')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200)

// })

test('dont delete if unauthenticated',async()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401)
})

// test('logout',async()=>{
//     await request(app)
//     .post('/users/logout')
//     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
//     .send()
//     .expect(200)
// })

test('should upload an image',async()=>{
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .attach('upload','tests/fixtures/profile-pic.jpg')
    .expect(200)
    const user= await User.findById(userid)
     expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user fields',async()=>{
    await request(app)
    .patch('/users/me')   
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        name:'jiaaaa'
    })
    .expect(200)
    const user= await User.findById(userid)
    expect(user.name).toEqual('jiaaaa')
})



test('should not update invalid user fields',async()=>{
    await request(app)
    .patch('/users/me')   
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        ph: 12345
    })

    .expect(400)
    
})
