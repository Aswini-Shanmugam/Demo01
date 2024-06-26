class Person{
    constructor(firstName, lastName, age, qualification, country){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.Qualification = qualification;
        this.country = country;
    }
    getPersonDetails(){
        return this.firstName,  this.lastName, this.age, this.Qualification, this.country
    }
}

const persondetails = new Person("Aswini", "s", 27, "B.Tech", "India")

console.log(persondetails.getPersonDetails())
