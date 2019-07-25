// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name =attributes.name,
        this.location =attributes.name,
        this.phrase = attributes.phrase,
        this.grade = attributes.grade
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
    setScore(){
        let random = (Math.floor((Math.random() * 2)+1)-1);
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        random = random * plusOrMinus;
        let currentnumber= this.grade;
        this.grade = parseInt(currentnumber) + random;

    }
}

class Students extends Person{
    constructor(noSleep){
        super(noSleep);
        this.beverage = noSleep.beverage,
        this.grade= noSleep.grade
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

const Isla = new Students({
    beverage: "coffee",
    dimensions: {
      height: 5.2,
    },
    grade: 25,
    name: 'Isla',
    location: "California",
    language: "English",
    phrase: "Oh my God! Duh!"
  });

  const Arya = new Students({
      beverage: "juice",
      dimensions: {
          height: 2.5,
      },
      grade: 50,
      name: "Arya",
      location: "California",
      language: "Babble",
      phrase: "Mmmmmmoooooommmmmmaaaaaa"
  });

  const Eric = new Students({
      beverage: "g-fuel",
      dimensions: {
          height: 5.11,
      },
      grade: 100,
      name: "Eric",
      location: "California",
      language: "Gibberish",
      phrase: "hehee what now??",
  });

  const Zelda = new Students({
      beverage: "puddles",
      dimensions: {
          weight: 65,
      },
      grade:78,
      name: "Zelda",
      location: "California",
      language: "Whine",
      phrase: "Sttttrrrrreeeeeeesssssssss",
  });

  const Eli = new Instructors({
      beverage: "tea",
      name: "Eli",
      location: "California",
      phrase: "Oh nooooooo",
  });

  const Maegan = new PM({
      beverage: "tea",
      name:"Maegan",
      location: "California",
      phrase: "Hey girlie!",
  })

  console.log(Zelda.redEyes()); 
  console.log(Eric.phrase); 
  console.log(Arya.name); 
  console.log(Isla.grade); 
  console.log(Eli.setScore(Zelda)); // The Round Table
//   console.log(mage.weapons); // Staff of Shamalama
//   console.log(archer.language); // Elvish
//   console.log(archer.greet()); // Lilith offers a greeting in Elvish.
//   console.log(mage.takeDamage()); // Bruce took damage.
//   console.log(swordsman.destroy()); 