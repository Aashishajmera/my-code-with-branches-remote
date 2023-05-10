package code_File.javaPractice;

import java.util.Scanner;

/*

 *****
 ****
 ***
 **
 *

 */
public class paramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = sc.nextInt();

        // FOR LOOP

        // for (int row = 0; row <= num; row++) {
        // for (int col = 1; col <= num - row; col++) {
        // System.out.print("*");
        // }
        // System.out.println();
        // }

        // WHILE LOOP

        // int i =1;
        // while(i<=num){
        // System.out.println(i);
        // i++;
        // }

        // DO WHILE LOOP

        int i = 1;
        do {
            System.out.println(i);
            i++;
        } while (i <= num);
    }
}
