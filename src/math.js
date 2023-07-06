const mul=(a,b)=>{
    const c=a*b
    return c
}

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

module.exports={

    mul,fahrenheitToCelsius,celsiusToFahrenheit
}
