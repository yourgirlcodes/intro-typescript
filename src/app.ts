import { generateRandomPin, Component } from './utils'

@Component({ // we can set id here
    id: 'app'
})
// this whole above bit is the same as static id='app'

class App {
    // static id = "app"
    // static property just makes more sense
    // public because not explicitly stated otherwise

    onInit(el: HTMLElement | null): void {
        // this is an instance method
        //class method with el as a DEPENDENCY.
        setInterval(function () {
            if (el) {
                el.innerHTML = "Your PIN will change every 4 seconds" + "<br />" + "PIN: " + generateRandomPin({ letter: 'A', length: 4 });
            }
        }, 4000);
        el && (el.innerHTML = "your PIN is loading")

    }
}



function main(ClassComponent) { // main receives App with all methods etc

    const el = document.getElementById(ClassComponent.id);
    // we define el which can be whatever variable - like normal js

    // NEED TO SET AN INSTANCE of App
    const comp = new ClassComponent()
    // then we add onInit and inject el because it is a dependency
    comp.onInit(el)

}


main(App);


