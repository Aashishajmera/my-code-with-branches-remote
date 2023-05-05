import java.util.Scanner;

public class triangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number: ");
        int num2 = sc.nextInt();
        System.out.println("Enter third number: ");
        int num3 = sc.nextInt();
        if ((num1 < (num2 + num3)) && (num2 < (num1 + num3)) && (num3 < (num1 + num2))) {
            System.out.println("The sides of a traingle: ");
        }else{
            System.out.println("not a traingle: ");
        }
    }
}