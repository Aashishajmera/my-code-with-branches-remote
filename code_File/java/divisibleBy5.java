import java.util.Scanner;

public class divisibleBy5 {
    public static void main(String[] args) {
        System.out.println("Enter a number: ");
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        if (num1 < 0 && num1 % 5 == 0) {
            System.out.println("divisible by 5 but its negative number: ");
        } else if (num1 < 0) {
            System.out.println("its negative and not divisible by 5: ");
        } else if (num1 > 0 && num1 % 5 == 0) {
            System.out.println("divisible by 5 and its positive number: ");
        } else {
            System.out.println("its positive and not divisible by 5: ");
        }
    }
}
