//complete this code
class Person {
	constructor(name,age){
		this.n = name;
		this.a = age;
	}
}
get name(){
	return this.n;
}

get age(){
	return this.a;
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
    return `${this.n} is studying.`;
  }
}

class Teacher extends Person {
	 teach() {
    return `${this.n} is teaching.`;
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
