package code_File.javaPractice;

import java.util.Scanner;

public class calendarWith {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your year:");
        int year = sc.nextInt();                                                                    
        int y = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 0 : 1;
        switch (y) {
            case 0:
            System.out.println("leap year: ");
            break;
            case 1:
            System.out.println("not leap year: ");
            break;
            default:
            System.out.println("not leap");
        }
    }
}