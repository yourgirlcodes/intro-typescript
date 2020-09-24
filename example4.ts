// Private, Public --> default, Protected, readonly methods

// Private - can only access within class
// Protected - can access in another class that extends the class it is defined in 
// readonly - can use wherever you want, but cannot write to it

// private readonly ie private / public go first



// DECORATORS
// in config update experimentalDecorators

function Component(target){
    console.log(target) // logs Plant(){}
}

@Component
class Plant {
// does whatever 
}


function Component1(x){
    console.log(x, 'x') // console.logs hello x
    return (target) => console.log(target) // logs Plant1(){}
}

@Component1('hello')
class Plant1 { // this is the target of the decorator
    // does whatever 
    }