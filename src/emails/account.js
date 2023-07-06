const sgmail=require('@sendgrid/mail')
const { text } = require('express')


sgmail.setApiKey(process.env.SENDGRID_API_KEY)
// sgmail.send({
//     to:'shaik.rafiya@proxelera.com',
//     from:'shaik.rafiya@proxelera.com',
//     subject:'traill',
//     text:'trail'

// })


const send =(email,name)=>{
    sgmail.send({
        to: email,
        from: 'shaik.rafiya@proxelera.com',
        subject: 'trail',
        text: `${name} trail`
      
    })
}
const sendcancel=(email,name)=>{
    sgmail.send({
        to:email,
        from: 'shaik.rafiya@proxelera.com',
        subject:'hiiii',
        text:`heloooo ${name} `
    })
}

module.exports={
    send,
    sendcancel
}