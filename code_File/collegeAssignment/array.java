package code_File.collegeAssignment;

import java.util.Scanner;

public class array {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num = sc.nextInt();
        System.out.println("Enter " + num + " number: ");

        int arr[] = new int[num];
        for (int j = 0; j < arr.length; j++) {
            arr[j] = sc.nextInt();
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

    }

}
