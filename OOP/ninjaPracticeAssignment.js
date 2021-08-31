class Ninja{
    // create a ninja class
    // add attribute name, health, speed, strength
    constructor(name, health, speed, strength){
        this.name =name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3; 
    }
// add a method: sayName() - This should log that Ninja's name to the console
    sayName(){
        console.log(`The ninja's name is ${this.name}`);
    }
// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
    showStats(){
        console.log(`Ninja Name: ${this.name},\n Strength: ${this.strength}, \n Speed: ${this.speed}, \n Health: ${this.health}`);
    }
// add a method: drinkSake() - This should add +10 Health to the Ninja
    drinkSake(){
        this.health +=10;
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
