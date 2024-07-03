vet_ordenado = []
vet_sequencia = []
for (i=0;i<5;i++){
    num = parseInt(prompt("Digite um numero!"))
    vet_ordenado.push(num) 
    vet_sequencia.push(num) 

}
vet_ordenado.sort() // ordena o vetor
console.log(vet_ordenado) // vetor ordenado
console.log() // linha em branco
console.log(vet_sequencia) // vetor direto na sequencia em que foi adicionado
