package com.ob_ex.introprogramming;

public class Employee extends Person {
    private double salary;

    public Employee(int age, String name, int tel) {
        super(age, name, tel);
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee [name=" + super.getName() + ", age=" + super.getAge() + ", tel=" + super.getTel()
                + ", salary=" + getSalary() + "]";
    }
}
