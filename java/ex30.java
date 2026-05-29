import java.util.*;
public class ex30{
    static void checkType(Object obj){
        switch(obj){
            case Integer i->
            System.out.println("Integer object");
            case String s->
            System.out.println("String object");
            case Float f->
            System.out.println("Float object");
            case Double d->
            System.out.println("Double  object");
            
            case null->
            System.out.println("Null object");
            default->
            System.out.println("unknown object");
        }
    }

    public static void main(String[] args){
        checkType(10);
        checkType(10.5f);
        checkType(10.3);
        checkType("Hello");
        checkType(null);

        
    }
}