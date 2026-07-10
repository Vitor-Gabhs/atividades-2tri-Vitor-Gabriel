/* 1.
{
    "titulo": "Férias de meio de ano",
    "corpo": "pois é! Elas não são delírio coletivo..."
}
_________________________________________
 2.
{
    "titulo": "Trabalho de História",
    "descricao": "Pesquisa sobre a como o Ney é pútrido",
    "dataEntrega": "2026-09-09"
}
_________________________________________
 3.

Requerimento:

POST /login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
 
{
    "nome": "João Gabriel",
    "email": "joao70correr@email.com",
    "perfil": "aluno",
    "senha": "jaoreidelas"
}
    
Resposta:

HTTP/1.1 200 OK
Content-Type: application/json

{
    "mensagem": "Aluno logado com sucesso",
    "id": 1
}
_________________________________________
4.
    O código 201 é usado para criar registros pois é diferente do 200 que é um código de criação genéreico. Então ele serve para apontar, especificamente que alguma endpoint nova foi criada.
_________________________________________
5.
    O Usuário cadastra-se num formulário
     nome é: João Gabriel
     o email é: joao70correr@email.com
     e coloca seu perfil como de aluno para evitar problemas.
    
    Cliente entende como:
    {
        "nome": "João Gabriel",
        "email": "joao70correr@email.com",
        "perfil": "aluno"
    }
    
    Envia para o servidor, que cadastra e envia:
    {
        "mensagem": "Aluno cadastro com sucesso",
        "id": 1
    }
    
    O Cliente entende como:
    Aluno cadastrado com sucesso, você é o 1 aluno.
*/ 
