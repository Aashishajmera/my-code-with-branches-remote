package code_File.javaPractice;

import java.util.Scanner;

public class date {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter week day: ");
        String day = sc.nextLine();
        switch (day) {

            case "monday","Monday":
                System.out.println("1");
                break;
            case "tuesday","Tuesday":
                System.out.println("2");
                break;
            case "wednesday","Wednesday":
                System.out.println("3");
                break;
            case "thursday","Thursday":
                System.out.println("4");
                break;
            case "friday","Friday":
                System.out.println("5");
                break;
            case "saturday","Saturday":
                System.out.println("6");
                break;
            case "sunday","Sunday":
                System.out.println("7");
                break;
            default:
                System.out.println("invalid day ");

        }
    }
}
