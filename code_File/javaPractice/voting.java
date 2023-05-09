package code_File.javaPractice;

import java.util.Scanner;

public class voting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Enter your age: ");
        double age = sc.nextDouble();
        if (age >= 18) {
            System.out.println("you are aligible for Vote: ");
        } else {
            System.out.println("sorry your not aligible for Vote because your age is less than 18: ");
        }
    }
}