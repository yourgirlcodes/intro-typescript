import { generateRandomPin } from './utils'
import { Component } from '../example3' // this is the component that logs every time a component is created 


class App extends Component {
    static id = "app" // static property just makes more sense

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
    const comp = new ClassComponent() // new instance of Component is created (since it is extended by App) causes to log 'component created'
    // then we all onInit and inject el because it is a dependency
    comp.onInit(el)

}

main(App);


