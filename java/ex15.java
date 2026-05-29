import java.util.*;
public class ex15{

    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String str=sc.nextLine();
        String newStr="";
        for(int i=str.length()-1;i>=0;i--){
            newStr=newStr+str.charAt(i);
        }
        System.out.println(newStr);





    }
}