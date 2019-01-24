// CODE here for your Lambda Classes

//Step 1: Declare class keyword
class Person  {
    //Step 2: Create a new constructor
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    } //Step 3: Methods
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.speciality = instructorInfo.speciality;
        this.favLanguage = instructorInfo.speciality;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }
    listsSubjects() {
        for (let i = 0; i<this.favSubjects.length;i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)

    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }
    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
    }
)

const olympia = new Student({
    name: 'Olympia',
    location: 'Wojcik',
    age: 27,
    gender: 'female',
    previousBackground: 'Finance',
    className: 'Web17',
    favSubjects:['Html', 'CSS', 'JavaScript'],
    grade: 70
})

const yanrong = new ProjectManager ({
    name: 'yangrong',
    location: 'test',
    age: 25,
    gender: 'male',
    gradClassName: 'Web17',
    favInstructor: 'Josh',
})

fred.demo('Math');
olympia.listsSubjects();
olympia.previousBackground;
console.log(olympia.previousBackground);
olympia.PRAssignment('Math');

olympia.sprintChallenge('Math');


yanrong.standup("afterhourschannel");

yanrong.standup("afterhours");

yanrong.debugsCode(olympia, 'science');

