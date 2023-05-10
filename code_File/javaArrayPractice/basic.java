package code_File.javaArrayPractice;

import java.util.Arrays;
import java.util.Scanner;

public class basic {
    public static void main(String[] args) {

        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter a number: ");
        // int num = sc.nextInt();

        // for (int i = 1; i <= num; i++) {
        // if (i % 2 != 0) {
        // if (i == 3 || i == 5) {
        // continue;
        // }
        // System.out.println(i);
        // }
        // }

        int arr[] = { 3, 45, 6 };
        // System.out.println(Arrays.sort(arr));
        Arrays.sort(arr);
        // System.out.println(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}
