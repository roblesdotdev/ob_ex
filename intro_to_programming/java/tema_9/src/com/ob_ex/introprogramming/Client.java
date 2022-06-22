package com.ob_ex.introprogramming;

public class Client extends Person {
    private double credit;

    public Client(int age, String name, int tel) {
        super(age, name, tel);
    }

    public double getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "Client [name=" + super.getName() + ", age=" + super.getAge() + ", tel=" + super.getTel()
                + ", credit=" + getCredit() + "]";
    }
}
