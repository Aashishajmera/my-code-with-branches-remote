package code_File.collegeAssignment;

import java.util.Scanner;

public class bloodDonate {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int age = sc.nextInt();

        if (age >= 25) {
            System.out.println("Entet your weight: ");
            double weight = sc.nextDouble();
            if (weight >= 50) {
                System.out.println("you are aligible:");
            } else {
                System.out.println("sorry your weight is less than 50");
            }
        }else{
            System.out.println("sorry your age is less than 25");
        }
    }
}
