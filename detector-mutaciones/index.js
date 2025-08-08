function hasMutation(dna) {
    if (!Array.isArray(dna) || dna.length === 0) {
        throw new Error("El ADN debe ser un array no vacío");
    }

    const N = dna.length;
    const validChars = /^[ATCG]+$/;

    for (let row of dna) {
        if (row.length !== N) throw new Error("El ADN debe ser NxN");
        if (!validChars.test(row)) throw new Error("Solo se permiten A, T, C, G");
    }

    let count = 0;
    const getChar = (i, j) => dna[i][j];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {

            // Horizontal 
            if (j <= N - 4 &&
                getChar(i, j) === getChar(i, j + 1) &&
                getChar(i, j) === getChar(i, j + 2) &&
                getChar(i, j) === getChar(i, j + 3)) {
                count++;
            }

            // Vertical 
            if (i <= N - 4 &&
                getChar(i, j) === getChar(i + 1, j) &&
                getChar(i, j) === getChar(i + 2, j) &&
                getChar(i, j) === getChar(i + 3, j)) {
                count++;
            }

            // Diagonal 
            if (i <= N - 4 && j <= N - 4 &&
                getChar(i, j) === getChar(i + 1, j + 1) &&
                getChar(i, j) === getChar(i + 2, j + 2) &&
                getChar(i, j) === getChar(i + 3, j + 3)) {
                count++;
            }

            // Diagonal invertida 
            if (i <= N - 4 && j >= 3 &&
                getChar(i, j) === getChar(i + 1, j - 1) &&
                getChar(i, j) === getChar(i + 2, j - 2) &&
                getChar(i, j) === getChar(i + 3, j - 3)) {
                count++;
            }

            if (count >= 2) return true;
        }
    }
    return false;
}

// Ejemplo con mutación
const dna1 = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
console.log("Caso 1:", hasMutation(dna1)); // true

// Ejemplo sin mutación
const dna2 = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACCG"];
console.log("Caso 2:", hasMutation(dna2)); // false
module.exports = hasMutation;
