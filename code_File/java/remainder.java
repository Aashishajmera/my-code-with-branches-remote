import java.util.Scanner;

public class remainder {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number: ");
        int num2 = sc.nextInt();

        if (num1 > num2) {
            int num3 = num1 % num2;
            System.out.println("the remainder is: " + num3);
        } else {
            System.out.println(num1 + "is less than " + num2);
        }
    }
}
