class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        // reduce target res by power
        if(target instanceof Unit){
            target.resilience -= this.power;
        }else{
            throw new Error("Target must be a unit!")
        }
    }
}
class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        magnitude>0?
            this.text = `Increase target's ${this.stat} by 3`:
            this.text= `Reduce target's ${this.stat} by -2`
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat.toLowerCase() == "resilience"){
                target.resilience += this.magnitude;
            }else if(this.stat.toLowerCase() == "power"){
                target.power += this.magnitude;
            }else{
                console.log("nah...")
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

// Unit cards
const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt = new Unit("Black Belt",4,5,4);
// console.log(redBelt)
// console.log(blackBelt)


const e1= new Effect("Hard Algo",2,"resilience",3)
const e2= new Effect("Unhandled Promise Rejection",1,"resilience",-2)
const e3= new Effect("Pair Programming",3,"power",2)
// console.log(e1)
// console.log(e2)
// console.log(e3)
e1.play(redBelt)
e2.play(redBelt)
e3.play(redBelt)
redBelt.attack(blackBelt)
console.log(redBelt)


