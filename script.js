//complete this code
class Person {
	constructor(name,age){
		this.name = John;
		this.age = 25;
	}
}
get name(){
	return this.name;
}

get age(){
	return this.age;
}

set newName(){
	return this.newName = newName;
}

set age(newAge){
	if(newAge > 0){
	this.age=newAge;
	}
	else{
		console.error("Age must be positive number");
	}
}

class Student extends Person {
	study() {
    return `${this.name} is studying.`;
  }
}

class Teacher extends Person {
	 teach() {
    return `${this.name} is teaching.`;
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
