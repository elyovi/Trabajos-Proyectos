// 3
// function promedio3(a, b, c) {
//     let suma = a + b + c;
//     let promedio = suma / 3;
//     return promedio;
// }

// // Ejemplo de uso:
// let valor1 = 4;
// let valor2 = 8;
// let valor3 = 6;
// let promedio = promedio3(valor1, valor2, valor3);
// console.log("El promedio es: " + promedio);

// 4
// function leerNotasYCalcularPromedio() {
//     let suma = 0;
//     let contador = 0;
//     let nota;

//     while (true) {
//         nota = parseFloat(prompt("Ingrese una nota (o -1 para terminar):"));

//         if (nota === -1) {
//             break;
//         }

//         suma += nota;
//         contador++;
//     }

//     if (contador === 0) {
//         return 0; // Evitar división por cero si no se ingresaron notas
//     } else {
//         return suma / contador;
//     }
// }

// // Ejemplo de uso:
// let promedio = leerNotasYCalcularPromedio();
// console.log("El promedio de las notas es: " + promedio);

// 5
// function doble(valor) {
//     return valor * 2;
// }

// // Ejemplo de uso:
// let numero = 7;
// let resultado = doble(numero);
// console.log("El doble de " + numero + " es: " + resultado);

// 6
// function cuadrado(valor) {
//     return valor * valor;
// }

// // Ejemplo de uso:
// let numero = 5;
// let resultado = cuadrado(numero);
// console.log("El cuadrado de " + numero + " es: " + resultado);

// 7
// // Funciones previamente definidas
// function siguiente(valor) {
//     return valor + 1;
// }

// function doble(valor) {
//     return valor * 2;
// }

// function cuadrado(valor) {
//     return valor * valor;
// }

// // Nueva función que utiliza las anteriores
// function imprimirValores(numero) {
//     let valorSiguiente = siguiente(numero);
//     let valorDoble = doble(numero);
//     let valorCuadrado = cuadrado(numero);
    
//     console.log("El siguiente de " + numero + " es: " + valorSiguiente);
//     console.log("El doble de " + numero + " es: " + valorDoble);
//     console.log("El cuadrado de " + numero + " es: " + valorCuadrado);
// }

// // Ejemplo de uso:
// let numero = 5;
// imprimirValores(numero);

// 8
// // Funciones previamente definidas
// function siguiente(valor) {
//     return valor + 1;
// }

// function doble(valor) {
//     return valor * 2;
// }

// // Nueva función que utiliza las anteriores
// function imprimirElDobleDelSiguiente(numero) {
//     let valorDoble = doble(numero);
//     let valorSiguienteAlDoble = siguiente(valorDoble);
    
//     console.log("El siguiente del doble de " + numero + " es: " + valorSiguienteAlDoble);
// }

// // Ejemplo de uso:
// let numero = 5;
// imprimirElDobleDelSiguiente(numero);

// 9
// // Funciones previamente definidas
// function siguiente(valor) {
//     return valor + 1;
// }

// function doble(valor) {
//     return valor * 2;
// }

// function cuadrado(valor) {
//     return valor * valor;
// }

// // Nueva función que utiliza las anteriores
// function imprimirElDobleDelSiguienteAlCuadrado(numero) {
//     let valorDoble = doble(numero);
//     let valorSiguienteAlDoble = siguiente(valorDoble);
//     let resultado = cuadrado(valorSiguienteAlDoble);
    
//     console.log("El cuadrado del siguiente del doble de " + numero + " es: " + resultado);
// }

// // Ejemplo de uso:
// let numero = 5;
// imprimirElDobleDelSiguienteAlCuadrado(numero);

// 10
// function calcularPerimetroCuadrado(longitudLado) {
//     return longitudLado * 4;
// }

// // Ejemplo de uso:
// let longitud = 5;
// let perimetro = calcularPerimetroCuadrado(longitud);
// console.log("El perímetro del cuadrado con lado de longitud " + longitud + " es: " + perimetro);

// 11
// function calcularSuperficieCuadrado(longitudLado) {
//     return longitudLado * longitudLado;
// }

// // Ejemplo de uso:
// let longitud = 5;
// let superficie = calcularSuperficieCuadrado(longitud);
// console.log("La superficie del cuadrado con lado de longitud " + longitud + " es: " + superficie);

// 12
// function calcularCircunferencia(radio) {
//     return 2 * Math.PI * radio;
// }

// // Ejemplo de uso:
// let radio = 3;
// let circunferencia = calcularCircunferencia(radio);
// console.log("La circunferencia del círculo con radio " + radio + " es: " + circunferencia.toFixed(2));

// 13
// function calcularAreaCirculo(radio) {
//     return Math.PI * radio * radio;
// }

// // Ejemplo de uso:
// let radio = 3;
// let area = calcularAreaCirculo(radio);
// console.log("El área del círculo con radio " + radio + " es: " + area.toFixed(2));

// 14
// function diasDelMes(mes) {
//     switch (mes) {
//         case 1: // Enero
//         case 3: // Marzo
//         case 5: // Mayo
//         case 7: // Julio
//         case 8: // Agosto
//         case 10: // Octubre
//         case 12: // Diciembre
//             return 31;
//         case 4: // Abril
//         case 6: // Junio
//         case 9: // Septiembre
//         case 11: // Noviembre
//             return 30;
//         case 2: // Febrero
//             return 28;
//         default:
//             return "Número de mes inválido";
//     }
// }

// // Ejemplo de uso:
// let mes = 2;
// let dias = diasDelMes(mes);
// console.log("El mes " + mes + " tiene " + dias + " días.");

// 15
// function esBisiesto(anio) {
//     if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Ejemplo de uso:
// let anio = 2024;
// let resultado = esBisiesto(anio);
// if (resultado) {
//     console.log("El año " + anio + " es bisiesto.");
// } else {
//     console.log("El año " + anio + " no es bisiesto.");
// }

// 16
// function esBisiesto(anio) {
//     if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function diasDelMes(dia, mes, anio) {
//     switch (mes) {
//         case 1: // Enero
//         case 3: // Marzo
//         case 5: // Mayo
//         case 7: // Julio
//         case 8: // Agosto
//         case 10: // Octubre
//         case 12: // Diciembre
//             return 31;
//         case 4: // Abril
//         case 6: // Junio
//         case 9: // Septiembre
//         case 11: // Noviembre
//             return 30;
//         case 2: // Febrero
//             return esBisiesto(anio) ? 29 : 28;
//         default:
//             return "Número de mes inválido";
//     }
// }

// // Ejemplo de uso:
// let dia = 15;
// let mes = 2;
// let anio = 2024;
// let dias = diasDelMes(dia, mes, anio);
// console.log("El mes " + mes + " del año " + anio + " tiene " + dias + " días.");

// 17
// function esBisiesto(anio) {
//     if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function diasDelMes(mes, anio) {
//     switch (mes) {
//         case 1: // Enero
//         case 3: // Marzo
//         case 5: // Mayo
//         case 7: // Julio
//         case 8: // Agosto
//         case 10: // Octubre
//         case 12: // Diciembre
//             return 31;
//         case 4: // Abril
//         case 6: // Junio
//         case 9: // Septiembre
//         case 11: // Noviembre
//             return 30;
//         case 2: // Febrero
//             return esBisiesto(anio) ? 29 : 28;
//         default:
//             return "Número de mes inválido";
//     }
// }

// function diaAnterior(dia, mes, anio) {
//     if (dia > 1) {
//         return { dia: dia - 1, mes: mes, anio: anio };
//     } else {
//         if (mes > 1) {
//             mes -= 1;
//         } else {
//             mes = 12;
//             anio -= 1;
//         }
//         dia = diasDelMes(mes, anio);
//         return { dia: dia, mes: mes, anio: anio };
//     }
// }

// // Ejemplo de uso:
// let dia = 1;
// let mes = 3;
// let anio = 2024;
// let anterior = diaAnterior(dia, mes, anio);
// console.log(`El día anterior a ${dia}/${mes}/${anio} es ${anterior.dia}/${anterior.mes}/${anterior.anio}`);

// 18
// function esBisiesto(anio) {
//     if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function diasDelMes(mes, anio) {
//     switch (mes) {
//         case 1: // Enero
//         case 3: // Marzo
//         case 5: // Mayo
//         case 7: // Julio
//         case 8: // Agosto
//         case 10: // Octubre
//         case 12: // Diciembre
//             return 31;
//         case 4: // Abril
//         case 6: // Junio
//         case 9: // Septiembre
//         case 11: // Noviembre
//             return 30;
//         case 2: // Febrero
//             return esBisiesto(anio) ? 29 : 28;
//         default:
//             return "Número de mes inválido";
//     }
// }

// function ultimoDiaDelMes(dia, mes, anio) {
//     return diasDelMes(mes, anio);
// }

// // Ejemplo de uso:
// let dia = 15;
// let mes = 2;
// let anio = 2024;
// let ultimoDia = ultimoDiaDelMes(dia, mes, anio);
// console.log(`El último día del mes ${mes} del año ${anio} es ${ultimoDia}`);
