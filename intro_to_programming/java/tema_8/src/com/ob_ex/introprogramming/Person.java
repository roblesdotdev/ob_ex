package com.ob_ex.introprogramming;

public class Person {
    private byte age;
    private String name;
    private int tel;

    public byte getAge() {
        return age;
    }

    public void setAge(byte age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    @Override
    public String toString() {
        return "Person [name=" + getName() + ", age=" + getAge() + ", tel=" + getTel() + "]";
    }
}
