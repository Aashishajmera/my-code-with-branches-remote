import java.util.Scanner;

public class profitLoss {
    public static void main(String[] args) {
        System.out.println("Enter cost price: ");
        Scanner sc = new Scanner(System.in);
        int cp = sc.nextInt();
        System.out.println("Enter selling price: ");
        int sp = sc.nextInt();
        if (sp > cp) {
            System.out.println("your profit is: " + (sp - cp) +" rupee");
        } else {
            System.out.println("your loss is: " + (cp - sp) +" rupee");
        }
    }
}