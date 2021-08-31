class Ninja{
    constructor(name, health, speed, strength){
        this.name =name;
        this.health = health;
        this.speed = 3;
        this.strength = 3; 
    }
    sayName(){
        console.log(`The ninja's name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja Name: ${this.name},\n Strength: ${this.strength}, \n Speed: ${this.speed}, \n Health: ${this.health}`);
    }

    drinkSake(){
        this.health +=10;
    }
}

class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name);
        this.health = 200;
        this.speed =10;
        this.strength=10;
        this.wisdom = 10;

    }
    speakWisdom(){
        super.drinkSake();
        console.log(`this is a wise message from ${this.name}`)
        return this
    
    }
}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"