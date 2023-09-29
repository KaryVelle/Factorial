function factorial(numero)
{
if (typeof numero !== "number") {
    console.error (`"${numero}" no es un número, no se puede hacer esto si no hay números amigo jsjs`);
    return
}

if (!Number.isInteger(numero)) {
    console.warn(`"${numero}" no es entero, se necesitan números enteros para esto.`);
    return;
}

if (numero < 0 ){
    console.error (`"${numero}" es negativo, necesito números positivos o me da ansiedad qwq`);
    return
}

if (numero === 0 ){
    console.error (`solo puedo usar valores mayores a "${numero}" perdo.`);
    return
}

let T=1;
for(i=1; i<=numero; i++){
    console.log(`${T} x ${i} `)
    T= T*i;
    console.log (`=${T}`)
}

console.log  (` El factorial de "${numero}" es "${T}"" `);
}

factorial(5);