package code_File.javaPractice;

import java.util.Scanner;

public class bloodDonate {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = sc.nextLine();
        System.out.println("Enter your age: ");
        double age = sc.nextDouble();
        if(age >= 22){
            System.out.println("Enter your weight: ");
            double weight = sc.nextDouble();
            if(weight >= 50){
                System.out.println("you are aligible for BloodDonate: ");
            }else{
                System.out.println("your weight in less than 50 so you are not aligible for BloodDonate: ");
            }
        }else{
            System.out.println("your age is less than for 25 so you are not aligible: ");
        }
        // if(age < 25 && weight < 50){
        //     System.out.println("your aligible: ");
        // }else{
        //     System.out.println("not aligible: ");
        // }
    }
}