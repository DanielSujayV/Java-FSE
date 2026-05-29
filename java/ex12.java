import java.util.Scanner;

class A {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Ex12 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        A obj = new A();

        System.out.print("Enter two integers: ");
        int x = sc.nextInt();
        int y = sc.nextInt();
        System.out.println("Sum = " + obj.add(x, y));

        System.out.print("Enter two doubles: ");
        double d1 = sc.nextDouble();
        double d2 = sc.nextDouble();
        System.out.println("Sum = " + obj.add(d1, d2));

        System.out.print("Enter three integers: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        System.out.println("Sum = " + obj.add(a, b, c));

        sc.close();
    }
}