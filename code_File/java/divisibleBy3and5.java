import java.util.Scanner;

public class divisibleBy3and5 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num1 = sc.nextInt();
        if(num1 % 3 == 0 || num1 % 5 == 0){
            if(num1 % 15 != 0){
                System.out.println("divisible by 3 OR 5 but cant divisible by 15");
            }else{
                System.out.println("divisible by 3 OR 5 and 15");
            }
        }else{
            System.out.println("not divisible by 3 and 5");
        }
    }
}