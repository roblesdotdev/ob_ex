package com.ob_ex.introprogramming;

public class Main {
    public static void main(String[] args) {
        Client c1 = new Client(32, "John Doe", 3335330);
        c1.setCredit(25000);
        System.out.println(c1);

        Employee e1 = new Employee(28, "Mary Jane", 32333999);
        e1.setSalary(10000);
        System.out.println(e1);
    }
}
