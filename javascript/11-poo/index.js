class Student {
  name = "John"
  langs = ["javascript", "HTML", "CSS"]

  getData() {
    return {
      name: this.name,
      langs: this.langs
    }
  }
}

const student = new Student()

console.log(student.getData())
