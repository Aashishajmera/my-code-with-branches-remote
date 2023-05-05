import java.util.Scanner;

public class ASCII {
    public static void main(String[] args) {
        System.out.println("Enter a letter: ");
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        int a = ch;
        System.out.println(a);
        
    }
}