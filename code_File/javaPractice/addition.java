package code_File.javaPractice;

import java.util.Scanner;

public class addition {
    public static void main(String[] args) {
        add();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int a = sc.nextInt();
        System.out.println("Enter second number: ");
        int b = sc.nextInt();
        System.out.println("The Subtraction is: " +(a-b));
        return ;
    }

    public static void add() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int a = sc.nextInt();
        System.out.println("Enter second number: ");
        int b = sc.nextInt();
        int c = a + b;
        System.out.println("The sum is " + c);
    }
}