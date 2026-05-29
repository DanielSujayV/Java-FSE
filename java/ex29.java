import java.util.*;
import java.util.stream.Collectors;
record Person(String name, int age){}

public class ex29{
    public static void main(String[] args){
        List<Person> persons=Arrays.asList(
            new Person("John", 16),
            new Person("Ram", 18),
            new Person("Ravi", 20)
        );
        persons.stream()
                .filter(p->p.age()>=18)
                .forEach(System.out::println);


                }
            }
        