package code_File.collegeAssignment;

import java.util.Scanner;

public class prime {

    public static void Prime() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num = sc.nextInt();
        if (num < 0) {
            System.out.println("given number is negative: ");
        }

        for (int i = 2; i <= num; i++) {
            if (num % i == 0) {
                System.out.println("given number is not a prime number because its devisible by :"+ i);
            }else{
                System.out.println("given number is prime number: ");

            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Prime();
    }
}