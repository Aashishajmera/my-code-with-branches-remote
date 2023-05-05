import java.util.Scanner;

public class squre {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num1 = sc.nextInt();
        int sqr = num1 * num1;
        System.out.println(num1 +" sqr is: " +sqr);
        
    }
}