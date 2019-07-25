// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location,
            this.phrase = attributes.phrase,
            this.grade = attributes.grade
    }
    speak() {
        console.log(`Hello my name is ${this.name} and I am from ${this.location}. I also just want to say, ${this.phrase}.`)
    }//method close
}//class close

class Instructors extends Person {
    constructor(knowledge) {
        super(knowledge);
        this.specialty = knowledge.specialty,
            this.favLanguage = knowledge.favLanguage



    }
    demo() {
        console.log(`Hi everybody! I'm ${this.name} and I'm going to teach you about ${this.specialty}.`)
    }
    setScore() {
        let random = (Math.floor((Math.random() * 2) + 1) - 1);
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        random = random * plusOrMinus;
        let currentnumber = this.grade;
        this.grade = parseInt(currentnumber) + random;

    }
    grade(subject) {
        
        console.log(`${student.name} receives a perfect score in ${subject}!`)

    }
}

class Students extends Person {
    constructor(noSleep) {
        super(noSleep);
        this.beverage = noSleep.beverage,
            this.grade = noSleep.grade,
            this.previousBackground = noSleep.previousBackground,
            this.className = noSleep.className,
            this.favSubjects = noSleep.favSubjects

    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
    redEyes() {
        console.log(`I am so exhuasted. I need to drink ${this.beverage} to stay awake.`)
    }
    graduate() {
        if (this.grade >= 70) {
            return "Graduated!";
        }
        else {
            return "Go back and do more assignments."
        }
    }
}

class PM extends Instructors {
    constructor(helpful) {
        super(helpful);
        this.resource = helpful.resource,
            this.gradClassName = helpful.gradClassName,
            this.favInstructor = helpful.favInstructor
    }
    standUP(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`)
    }
    debugsCode(name, subject) {
        console.log(`${this.name} debugs ${name}'s code on {subject}.`)
    }
    helping() {
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
    phrase: "Oh my God! Duh!",
    previousBackground: "Amazon",
    className: "LS_1922",
    favSubjects: ["JavaScript", "HTML", "CSS"
    ]
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
    phrase: "Mmmmmmoooooommmmmmaaaaaa",
    previousBackground: "Basically a nurse",
    className: "LS1920",
    favSubjects: ["HTML"]
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
    previousBackground: "Cooking",
    className: "LS_1910",
    favSubjects: ["JQuery", "C+"]
});

const Zelda = new Students({
    beverage: "puddles",
    dimensions: {
        weight: 65,
    },
    grade: 78,
    name: "Zelda",
    location: "California",
    language: "Whine",
    phrase: "Sttttrrrrreeeeeeesssssssss",
    previousBackground: "Slept",
    className: "LS_1905",
    favSubjects: ["HTML", "React", "Python"]
});

const Eli = new Instructors({
    beverage: "tea",
    name: "Eli",
    location: "California",
    phrase: "Oh nooooooo",
    specialty: "HTML",
    favLanguage: "JavaScript",
});

const Celine = new Instructors({
    beverage: "coffee",
    name: "Celine",
    location: "California",
    phrase: "Good morning!",
    specialty: "CSS",
    favLanguage: "Python",
});

const Moji = new PM({
    beverage: "water",
    name: "Moji",
    location: "California",
    phrase: "Good job!",
    gradClassName: "LS_1902",
    favInstructor: "Eli",
})

const Maegan = new PM({
    beverage: "tea",
    name: "Maegan",
    location: "California",
    phrase: "Hey girlie!",
    gradClassName: "LS_1901",
    favInstructor: "Celine",

})

console.log(Zelda.redEyes());
console.log(Eric.phrase);
console.log(Arya.name);
console.log(Isla.grade);
console.log(Eli.setScore(Zelda));
console.log(Maegan.speak()); 
console.log(Moji.standUP("group")); 
console.log(Celine.demo()); 
console.log(Zelda.listsSubjects()); 
console.log(Eric.PRAssignment("JavaScript")); 
console.log(Arya.sprintChallenge("CSS"));
console.log(Isla.graduate());
console.log(Eli.grade("HTML"));
console.log(Maegan.helping());

