/**
 * ¡LA ADIVINADORA!
 * 
 * Crea 4 variables para almacenar los siguientes valores:
 * 
 * 1. Número de gatos
 * 2. Tu próxima pareja
 * 3. Un país donde te gustaría vivir
 * 4. Un trabajo de ensueño
 * 
 * A cada variable, asígnale un valor adecuado (piensa si tiene que ser un número o una cadena de texto)
 * 
 * Finalmente, por pantalla, la Adivinadora debe pronosticar tu futuro deseado de esta manera
 * 
 * "Tú estarás en {pais} trabajando de {trabajo} y tu pareja será {pareja} y tendréis {numeroGatos} gatos" 
 * 
 */

let numeroGatos = 10;

let futuro = "tendréis " + numeroGatos + " gatos";
console.log(futuro);

let proximaPareja = "Paula";
let paisVivir = "EE.UU.";
let trabajoEnsueño = "Web Developer";

futuro = "Tú estarás " + paisVivir + " trabajando de " + trabajoEnsueño + " y tu pareja será " + proximaPareja + " y tendréis " + numeroGatos + " gatos.";
futuro2 = `Tú estarás ${paisVivir} trabajando de ${trabajoEnsueño} y tu pareja será ${proximaPareja} y tendréis ${numeroGatos}.`;
console.log(futuro);