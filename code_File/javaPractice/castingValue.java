package code_File.javaPractice;

import java.util.Scanner;

public class castingValue {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num = sc.nextInt();
        double num1 = num;
        System.out.println(+num1);
    }
}