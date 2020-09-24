// Private, Public --> default, Protected, readonly methods

// Private - can only access within class
// Protected - can access in another class that extends the class it is defined in 
// readonly - can use wherever you want, but cannot write to it

// private readonly ie private / public go first



// DECORATORS
// in config update experimentalDecorators

function Component(target) {
    console.log(target) // logs Plant(){}
}

@Component
class Plant {
    // does whatever 
}


function Component1(x) {
    console.log(x, 'x') // console.logs hello x
    return (target) => console.log(target) // logs Plant1(){}
}

@Component1('hello')
class Plant1 { // this is the target of the decorator
    // does whatever 
}


    // // we will use a CLASS decorator factory to set the static id on App

    // function Component(options: {id: string}){
    //     console.log(options, 'target') // logs {id: 'app'}
    //     return (target) => console.log(target.id = options.id) // logs app and we setting App.id
    // }

    // @Component({ // we can set id here
    //     id: 'app'
    // })
    // // this whole above bit is the same as static id='app'
    // class App {
    //     // static id = "app"


    // METHOD DECORATORS:
    // might want a method in a class to not be enumerable
    // ie for

    class E {
        printHippo() {
            console.log('hippo')
        }
    }
    
    console.log(E, 'E') // prints E(){}
    for (let i in E.prototype) {
        console.log(i, 'prototype') //prints printHippo ---> E.prototype makes printHippo ENUMERABLE
    
    }
    
    // if we dont want printHippo to be enumerable,
    // we can use a method decorator
    

    function enumerable(isEnum: boolean) {
        return (
            target,
            propertyKey, //propertyKeys = printZebra, printHello
            propertyDesc: PropertyDescriptor // this is where the enumerable property sits
        ) => {
            propertyDesc.enumerable = isEnum
        }
    
    }
    class F {
        @enumerable(false)
        printZebra() {
            console.log('Zebra')
        }
        
        @enumerable(true)
        printHello() {
            console.log('Hello')
        }
    }
    
    for (let i in F.prototype) {
        console.log(i, 'i') // will only log printHello 
    }
    