package code_File.collegeAssignment;

import java.util.Scanner;

public class prime {

    public static void Prime() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num = sc.nextInt();
        int count = 0;
        // if (num < 0) {
        //     System.out.println("given number is negative: ");
        // }

        for (int i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2 && num > 0) {
            System.out.println("given number is prime number: ");
        } else {
            System.out.println("given number is not a prime number: ");
        }
    }

    public static void main(String[] args) {
        Prime();
    }
}