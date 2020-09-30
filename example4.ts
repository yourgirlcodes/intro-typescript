// Private, Public --> default, Protected, readonly methods

// Private - can only access within class
// Protected - can access in another class that extends the class it is defined in 
// readonly - can use wherever you want, but cannot write to it

// private readonly ie private / public go first



// DECORATORS
// in config update experimentalDecorators
// CLASS DEC
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


// METHOD DECORATORS: ----------------------------------------------------
// might want a method in a class to not be enumerable


// method decorator
function enumerable(isEnum: boolean) {
    return (
        target,
        propertyKey, //propertyKeys = printZebra, printHello
        propertyDesc: PropertyDescriptor // this is where the enumerable property lives
    ) => {
        propertyDesc.enumerable = isEnum
    }

}

// property decorator
function prop(x, name) {
    console.log(x, name)
    // logs prototype of App ==> {onInit: f, constructor: f}), "greeting"
    // logs App constructor, "statGreeting" --> because this is static property ---> CONSTRUCTOR
}

function param(x, name, index) {
    console.log(x, name, index)
}
// logs {onInit: ƒ, printFullName: ƒ, constructor: ƒ} "printFullName" 0 when NOT STATIC
// logs ƒ App() {} "printFullName" 0 when STATIC ----> PROTOTYPE OBJECT OF CLASS
class F {
    @prop //property decorator
    greeting: string // instance property

    @prop static statGreeting: string //static property

    @enumerable(false)
    printZebra() {
        console.log('Zebra')
    }

    @enumerable(true)
    printHello() {
        console.log('Hello')
    }

    // only applying param decorator to f 
    printFullName(@param f: string, s: string, l: string): void {
        console.log(f, s, l)
    }
}

for (let i in F.prototype) {
    console.log(i, 'i') // will only log printHello 
}


function main1(ClassComponent) { // main receives App with all methods etc

    // NEED TO SET AN INSTANCE of App
    const comp = new ClassComponent()
    // then we add onInit and inject el because it is a dependency
    comp.printFullName('z', 'z', 'c') //only calling this one function

}


main1(F);