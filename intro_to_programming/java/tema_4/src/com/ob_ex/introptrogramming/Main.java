package com.ob_ex.introptrogramming;


public class Main {

    public static void main(String[] args) {
        int numberIf = 3;

        // IF ELSE
        if (isNeg(numberIf)) {
            System.out.printf("num %d is negative\n", numberIf);
        } else {
            System.out.printf("num %d is positive\n", numberIf);
        }

        // WHILE
        int numberWhile = 0;
        while (numberWhile < 3) {
            System.out.println("WHILE - numberWhile = " + numberWhile);
            numberWhile++;
        }

        // DO WHILE
        do {
            System.out.println("DO WHILE - numberWhile = " + numberWhile);
            numberWhile++;
        } while (numberWhile < 3);

        // FOR
        for (int numberFor = 0; numberFor <= 3; numberFor++) {
            System.out.println("numberFor: " + numberFor);
        }

        // SWITCH
        String season = "spring";
        showSeason(season);
    }

    private static void showSeason(String season) {
        switch (season) {
            case "autumn" -> System.out.println("Cool autumn");
            case "winter" -> System.out.println("Cold winter");
            case "summer" -> System.out.println("Hot summer");
            case "spring" -> System.out.println("Warm spring");
            default -> System.out.println("Invalid season");
        }
    }

    // check if is negative
    public static boolean isNeg(int numberIf) {
        return numberIf <= 0;
    }
}
