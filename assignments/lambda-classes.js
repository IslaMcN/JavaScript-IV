// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name =attributes.name,
        this.location =attributes.name,
        this.phrase = attributes.phrase
}
speak(){
            console.log(`${this.name} says ${this.phrase}`)
}//method close
}//class close

class Instructors extends Person{
    constructor(knowledge){
        super(knowledge);
        this.specialty = knowledge.specialty
        
    }
    speak(){
        console.log(`Hi everybody! I'm ${this.name} and I'm going to teach you about ${this.specialty}.`)
    }

}

class Students extends Person{
    constructor(noSleep){
        super(noSleep);
        this.beverage = noSleep.beverage,
        this.grade = noSleep.grade
    }
    redEyes(){
        console.log(`I am so exhuasted. I need to drink ${this.beverage} to stay awake.`)
    }
    graduate(){
        if (this.grade  >= 70){
            return "Graduated!";
        }
        else {
            return "Go back and do more assignments."
        }
    }
}

class PM extends Instructors{
    constructor(helpful){
        super(helpful);
        this.resource = helpful.resource
    }
    helping(){
        console.log(`I found ${this.resource} extremely helpful if you ever get stuck.`)
    }
}

const Isla = new Student({
    beverage: coffee,
    dimensions: {
      height: 5.2,
    },
    grade: 25,
    name: 'Isla',
    location: "California",
    language: "English",
    phrase: "Oh my God! Duh!"
  });