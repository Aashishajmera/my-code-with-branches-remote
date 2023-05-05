import java.util.Scanner;

public class absoluteValue {
    public static void main(String[] args) {
        System.out.println("Enter any number: ");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        if(num < 0){
            System.out.println("Absolute value is: "+(-num));
        }else{
            System.out.println("Absolute value is: " +num);
        }
    }
}
