package code_File.collegeAssignment;

import java.util.Scanner;

public class factorial {
    public static void facto() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        int sum = 0;

        for (int i = 1; i <= num; i++) {
            sum += i;
            System.out.println(sum);
        }
        System.out.println(num + " Factorial is " + sum);

    }

    public static void main(String[] args) {
        facto();
    }
}
