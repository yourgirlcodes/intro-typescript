type ValidNum = 1 | 3 | 7
// type ALIAS
// this is not valid js and therefore you wont see it in app.js output


var symbol: '#' = '#'  // --> string literal #
// saying that value has to be type string but also needs to be a certain value ie #, 
// this is useful because you may want to only accept certain values 
// you can use const symbol = 'x' instead --> cleaner, but this is ES6 which means that when this 
// file is compiled to js, it will be changed to var
// can keep it as const by changing to "target": "es2015" in the config 

const substrStart: number = 3
//declaring that the type of substrStart always needs to be a number, 
//else an error will be thrown
// but we also declaring the value
// we haven't changed the config target :: it is compiled to var 
// any other number wont pass the type testing 

// var len: 1 | 3 | 5 | 7 = 7 
// or using type ALIAS: 

// var len: ValidNum = 7 
// declaring that value of len must be one of the values of ValidNum
// however here we don't declare what the type has to be 


// function generateRandomId(substrStart, len){
//     return symbol + Math.random().toString(36).substr(substrStart, len)
// }


function generateRandomId(substrStart, len?: ValidNum): string {
    // declaring the return type ALSO len is an optional param
    // or you can provide a default value len: validNum = 8
    // if we don't specify type here, it is type: any
    // now we dont need to use the global variables
    return symbol + Math.random().toString(36).substr(substrStart, len)
}


function userAlert() { //function userAlert (): void
    alert('Alert!')
    // type: void --> because there is no return value 
}

function errorThrow(): never { //function userAlert (): never
    throw new Error('Error!')
    // type: never --> the function NEVER RETURNS because it is unable to 
}
// infinite loops are also type: never

// function main() {

//     var appComponent = document.getElementById('app')
//     // note that this can actually be null 
//     // (null is a type in newer angular versions)
//     // opt-in strictNullChecks = true in config if you want to have the check for null
//     // if you do opt-in then include a check for if(app) INSIDE of the setInterval
//     // BEST PRACTICE: OPT-IN --> powerful 
//     setInterval(function () {
//         appComponent && 
//         (appComponent.innerHTML = generateRandomId(substrStart, 7))
//     }, 1000)
// }


// ---------------------------------------------------
// INTERFACES:

type ValidSymbol = '$' | '§' 

function generateRandomAmount(options: GenerateConfig): string {
    return options.currency + Math.random().toString(36).substr(2, options.length)
}

interface GenerateConfig {
    currency: ValidSymbol,
    length: number
}
// you don't see this in the js because its not js
//interface is used for typechecking only 
// - its just compiled away and used for checking


// --------------------------------------
// FUNCTION OVERLOADS:
// define TWO DIFFERENT FUNCTION SIGNATURES for the SAME function
// why? same function can take either one parameter or multiple parameters 
// - then behaves differently
//  specify the input types and return type of a function, 

// using overloads allows you to see what types exist in the function
// makes functions more type-safe

//first case: (first overload)
function generateRandomCost(currency: ValidSymbol, length: number): string // two params
// second case: (second overload)
function generateRandomCost(options: GenerateConfig): string // single object
// function:
function generateRandomCost(optionsOrCurrency: GenerateConfig | ValidSymbol): string {
    // check first param and decide on behavior
    // if first param is the symbol then it must be the second case
    if (typeof optionsOrCurrency === 'string') {
        return optionsOrCurrency + Math.random().toString(36).substr(2, length) // we haven't yet defined length

    }
    return optionsOrCurrency.currency + Math.random().toString(36).substr(2, optionsOrCurrency.length)
}

// how we can call generateRandomCost:
generateRandomCost('$', 5)
generateRandomCost({ currency: '§', length: 10 })

// ------------------------------------------
// GENERICS & TYPE PARAMS
// perfect example to pass in a type parameter --> return must be same type as what is passed in 
function indentity<T>(arg: T): T {
    return arg
}