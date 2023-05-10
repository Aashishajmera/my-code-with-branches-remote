package code_File.javaArrayPractice;

import java.util.Arrays;
import java.util.Scanner;

public class arrr {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();
        System.out.println("Enter " +num +" number");

        // for (int i = 1; i <= num; i++) {
        // if (i % 2 != 0) {
        // if (i == 3 || i == 5) {
        // continue;
        // }
        // System.out.println(i);
        // }
        // }

        // int arr[] = { 3, 45, 6 };
        // // System.out.println(Arrays.sort(arr));
        // Arrays.sort(arr);
        // // System.out.println(arr);
        // for (int i = 0; i < arr.length; i++) {
        //     System.out.println(arr[i]);
        // }

        int arr[] = new int[num];
        // for(int i=0; i < num; i++){
        //    int a = sc.nextInt();
        // }

        // arr[0] = 3;
        // arr[1] = 1;

        // Arrays.sort(arr);
        // for(int i=0; i<2; i++){
        //     System.out.println(arr[i]);
        // }

        // int arr[] = new int[num];
        
        // for(int i =0; i<num; i++){
        //     System.out.println(arr[arr[i]]);
        // }

        // System.out.println(arr[0]);
        // System.out.println(arr[1]);
        // System.out.println(arr);
        // System.out.println(arr[2]);

      
        // System.out.println(arrr[0]);
        // System.out.println(arrr[1]);
        

        for(int i=0; i<num; i++){
           arr[i]= sc.nextInt();
        }

        Arrays.sort(arr);

System.out.println("pritn the value: ");
        for(int j=0; j<num; j++){
            System.out.println(arr[j]);
        }
        

    }
}
