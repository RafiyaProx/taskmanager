const {mul,fahrenheitToCelsius,celsiusToFahrenheit}=require('../src/math')
test('multiply',()=>{
    const t=mul(2,3)
    expect(t).toBe(6)
    // if(t!=6)
    // {
    //     throw new Error('total should be 6 but got '+t)
    // }
})

test('Should convert 32 F to 0 C', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

test('async',(done)=>{
    setTimeout(()=>{
        expect(1).toBe(1)
        done()
    },2000)
})