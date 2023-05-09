package code_File.javaPractice;

import java.util.Scanner;

public class calendar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter year: ");
        int year = sc.nextInt();
        if (year >= 1000) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                System.out.print("January- ");
                for (int January = 1; January <= 31; January++) {
                    System.out.print(January + " ");
                }
                System.out.println();
                System.out.print("Februar- ");

                for (int February = 1; February <= 29; February++) {
                    System.out.print(February + " ");
                }
                System.out.println();
                System.out.print("March- ");

                for (int March = 1; March <= 31; March++) {
                    System.out.print(March + " ");
                }
                System.out.println();
                System.out.print("April- ");
                for (int April = 1; April <= 30; April++) {
                    System.out.print(April + " ");
                }
                System.out.println();
                System.out.print("May- ");

                for (int May = 1; May <= 31; May++) {
                    System.out.print(May + " ");
                }
                System.out.println();
                System.out.print("June- ");

                for (int June = 1; June <= 30; June++) {
                    System.out.print(June + " ");
                }
                System.out.println();
                System.out.print("July- ");

                for (int July = 1; July <= 31; July++) {
                    System.out.print(July + " ");
                }
                System.out.println();
                System.out.print("August- ");
                for (int August = 1; August <= 31; August++) {
                    System.out.print(August + " ");
                }
                System.out.println();
                System.out.print("September- ");
                for (int September = 1; September <= 30; September++) {
                    System.out.print(September + " ");
                }
                System.out.println();
                System.out.print("Octomber- ");
                for (int Octomber = 1; Octomber <= 31; Octomber++) {
                    System.out.print(Octomber + " ");
                }
                System.out.println();
                System.out.print("November- ");
                for (int November = 1; November <= 30; November++) {
                    System.out.print(November + " ");
                }
                System.out.println();
                System.out.print("December- ");
                for (int December = 1; December <= 31; December++) {
                    System.out.print(December + " ");
                }
            } else {
                System.out.print("January- ");
                for (int January = 1; January <= 31; January++) {
                    System.out.print(January + " ");
                }
                System.out.println();
                System.out.print("Februar- ");

                for (int February = 1; February <= 28; February++) {
                    System.out.print(February + " ");
                }
                System.out.println();
                System.out.print("March- ");

                for (int March = 1; March <= 31; March++) {
                    System.out.print(March + " ");
                }
                System.out.println();
                System.out.print("April- ");
                for (int April = 1; April <= 30; April++) {
                    System.out.print(April + " ");
                }
                System.out.println();
                System.out.print("May- ");

                for (int May = 1; May <= 31; May++) {
                    System.out.print(May + " ");
                }
                System.out.println();
                System.out.print("June- ");

                for (int June = 1; June <= 30; June++) {
                    System.out.print(June + " ");
                }
                System.out.println();
                System.out.print("July- ");

                for (int July = 1; July <= 31; July++) {
                    System.out.print(July + " ");
                }
                System.out.println();
                System.out.print("August- ");
                for (int August = 1; August <= 31; August++) {
                    System.out.print(August + " ");
                }
                System.out.println();
                System.out.print("September- ");
                for (int September = 1; September <= 30; September++) {
                    System.out.print(September + " ");
                }
                System.out.println();
                System.out.print("Octomber- ");
                for (int Octomber = 1; Octomber <= 31; Octomber++) {
                    System.out.print(Octomber + " ");
                }
                System.out.println();
                System.out.print("November- ");
                for (int November = 1; November <= 30; November++) {
                    System.out.print(November + " ");
                }
                System.out.println();
                System.out.print("December- ");
                for (int December = 1; December <= 31; December++) {
                    System.out.print(December + " ");
                }
            }
        } else {
            System.out.println(year + "is not a year: ");
        }
    }
}
