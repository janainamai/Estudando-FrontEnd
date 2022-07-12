//função de mensagem - retorno VOID

const mensagemVoid = (): void => {
    window.alert("Olá mundo!");
}

//função para somar - retorno ANY
const somaAny = (n1: number, n2: number): any => {
    window.alert(n1 + n2);
}

//função para somar - retorno number
const somaNumber = (n1: number, n2: number): number => {
    return (n1 + n2);
}