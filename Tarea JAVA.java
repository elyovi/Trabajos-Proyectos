package javaapplication6;
import java.util.Scanner;
public class JavaApplication6{
public static void main(String[] args) {
       int radio, num, base, altura, Op, promedio, suma=0;
       float Ac, At;
       Scanner scanner = new Scanner(System.in);
       while(Op!=0){
           System.out.println("ingrese que operacion desea hacer(1-area de un circulo, 2-area de un triangulo,3-promedio)");
           Op=Imput.nextInt;
           Switch(Op){
           case 1:{ System.out.println("Ingrese el radio del circulo: ");
           radio=Imput.nextInt;
           Ac=(radio^2)*3,14;
           System.Out.printl("el area del circulo es: "+Ac);
           break;
           }
           case 2:{System.Out.println("Ingrese la base del triangulo: ");
           base=Imput.nextInt;
           System.Out.println("Ingrese la altura del triangulo: ");
           altura=Imput.nextInt;
           At = (base * Altura) / 2;
           System.Out.printl("el area del triangulo es: "+At);
           break;
       }
       case 3:
       }
    }
}
}