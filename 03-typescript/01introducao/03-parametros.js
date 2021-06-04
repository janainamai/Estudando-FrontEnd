//tipos de variáveis
//string: caracteres gerais
//number: núemeros
//boolean: true or false
//função de cadastramento
//o ponto de interrogação ao lado do 'email' significa que ele é opcional
//ou seja, eu posso usar esse método sem passar um email
//atenção: parâmetros opcionais devem vir sempre depois dos obrigatórios
var cadPessoa = function (nome, idade, email) {
    window.alert("Nome: " + nome);
    window.alert("Idade: " + idade);
    if (email != undefined) {
        window.alert("Email: " + email);
    }
};
