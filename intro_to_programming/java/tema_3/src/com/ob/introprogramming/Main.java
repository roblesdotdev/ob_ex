package com.ob.introprogramming;

public class Main {
    public static void main(String[] args) {
        System.out.println("====================== Part 1");
        int result = sum(10, 20, 30);
        System.out.println("Sum result: " + result);
        System.out.println("====================== Part 2");
        Car myCar = new Car();
        myCar.incDoors();
        System.out.println("Car doors: " + myCar.doors);
    }

    public static int sum(int x, int y, int z) {
        return x + y + z;
    }
}
