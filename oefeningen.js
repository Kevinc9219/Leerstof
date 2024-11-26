//### **Variabelen**
//1. **Aanmaken van variabelen**  
//   Maak drie variabelen aan: een string met je naam, een nummer met je leeftijd, en een boolean die aangeeft of je 
//programmeerervaring hebt. Log ze in de console.

naam = 'kevin';
leeftijd = 32;
programmeerervaring = true;
console.log(naam, leeftijd, programmeerervaring);

//2. **Rekenkundige operaties**  
//   Maak twee variabelen aan, `a` en `b`, met willekeurige getallen. Bereken en log de som, het verschil, het product en het quotiënt.

a = 65;
b = 23;
console.log((a + b),(a - b),(a * b),(a / b));


//3. **Const en Let**  
//   Schrijf een script waarin je probeert een `const`-variabele opnieuw toe te wijzen. Observeer en log het resultaat.

const c = 5;
console.log(c);


//### **Functies**
//4. **Eenvoudige functie**  
//   Schrijf een functie genaamd `greet` die een naam als parameter accepteert en "Hallo, [naam]!" retourneert. Roep de functie aan.

function greet(naam) {
    return `Hallo, ${naam}!`;
}
console.log(greet('kevin'));



//5. **Functie met meerdere parameters**  
//   Schrijf een functie genaamd `calculateRectangleArea` die lengte en breedte accepteert en de oppervlakte van een rechthoek retourneert.

function calculateRectangleArea(lengte, breedte) {
    return lengte * breedte;
}
console.log(calculateRectangleArea(5, 6));


//6. **Anonieme functies en pijlfuncties**  (pijlfunctie is () => {})  deze functie is niet noodzakelijk om te kennen
//   Schrijf dezelfde functie uit oefening 5 als een anonieme functie en als een pijlfunctie.

(pijlfunctie = () => {
    return lengte * breedte;
})(5, 6);

console.log(pijlfunctie);

