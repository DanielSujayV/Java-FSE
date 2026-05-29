import java.util.*;
public class ex10{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int min=1, max=100;
        
        Random rand=new Random();
        int randomNumber=rand.nextInt(max-min+1)+min;
        int a=sc.nextInt();
        
            while(a!=randomNumber){
                if(a<randomNumber){
                    System.out.println("Too low, enter another number:");
                    a=sc.nextInt();
                    
                }
                else if(a>randomNumber){
                    System.out.println("Too high, enter another number:");
                    a=sc.nextInt();
                }
                else{
                     System.out.println("Correct guess");
                     break;
                }
            }
        






    }
}