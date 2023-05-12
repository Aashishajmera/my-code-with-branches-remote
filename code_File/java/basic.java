
// import java.net.SocketTimeoutException;
import java.util.Scanner;

public class basic {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Maths number: ");
        Double Maths = sc.nextDouble();
        if (Maths <= 100 && Maths >= 33) {
            System.out.println("Enter Science number: ");
            Double Science = sc.nextDouble();
            if (Science <= 100 && Science >= 33) {
                System.out.println("Enter Social science number: ");
                double Social_science = sc.nextDouble();
                if (Social_science <= 100 && Social_science >= 33) {
                    System.out.println("Enter English number: ");
                    double English = sc.nextDouble();
                    if (English <= 100 && English >= 33) {
                        System.out.println("Enter Sanskrit number: ");
                        double Sanskrit = sc.nextDouble();
                        if (Sanskrit <= 100 && Sanskrit >= 33) {
                            double total = (Maths + Science + Social_science + English + Sanskrit) / 5;
                            System.out.println("your parcentage is " + total + " %");
                        } else {
                            System.out.println("invalid number of sanskrit: ");
                        }
                    } else {
                        System.out.println("invalid number of English: ");
                    }
                } else {
                    System.out.println("invalid number of Social science: ");
                }
            } else {
                System.out.println("invalid number of Science: ");
            }
        } else {
            System.out.println("invalid number of Maths: ");
        }
    }
}