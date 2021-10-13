# Linx_Desafio_FrontEnd Diego Goes
Este projeto consite em 2 páginas feitas somente com html, css, javascript e jquery. 
As páginas renderizam as informações de produtos vindas de uma api, para cada produto da api é gerado um card na página que contém suas informações, sua imagem e um botão de compra .


## confira o resultado aqui:
https://serene-lumiere-727f0f.netlify.app/

## Aviso ⚠️
### O projeto foi construido com o uso da modularização de classes, com o intuito de se obter uma melhor estrutura para o código.
### Devido a isso é necessário a utilização de um servidor web para que a modularização funcione e não aconteça erros. Caso o projeto seja aberto no navegador atravez do caminho local da máquina a renderização da api não irá funcionar!

## Instruções de uso:
 Após baixar o projeto, segue-se algumas recomedações e sugestões para a sua visualização atravez de um servidor local:
- ### Live-Server_VsCode:
 Caso você utilize o VsCode, use a extensção Live-Server para visualizar o projeto, utilizando uma das seguintes formas:

1: Abra um projeto e clique em Go Livena barra de status para ligar / desligar o servidor.

![image](https://user-images.githubusercontent.com/81311443/137042046-06b106dd-28ed-4144-aeef-58839c3b652f.png)


2: Clique com o botão direito em um HTMLarquivo da janela do Explorer e clique em Open with Live Server.

![image](https://user-images.githubusercontent.com/81311443/137042272-1a88c38e-afdb-41f9-b7ea-e67fe7feae8a.png)


3: Abra um arquivo HTML e clique com o botão direito no editor e clique em Open with Live Server.

![image](https://user-images.githubusercontent.com/81311443/137042336-344fd213-f12e-46e8-8cc7-bc00df581b63.png)




- ### Python
Caso você utilize Python siga as intruções abaixo:

1° Passo: Mude o diretório para a pasta onde seu arquivo some.htmlou arquivos existem usando o comandocd /path/to/your/folder

2° Passo: Inicie um servidor da web Python usando o comando: python -m SimpleHTTPServer
- Isso iniciará um servidor web para hospedar toda a sua lista de diretórios em http://localhost:8000

##### OBS: Para Python3 Siga as mesmas etapas, mas use o seguinte comando em vez disso python3 -m http.server




- ### Node.js
caso você utilize node.js siga as intruções abaixo:

1° Passo: instale http-server digitando: npm install -g http-server

2° Passo: Vá até a pasta do projeto

3° Passo: Inicie seu servidor http emitindo: http-server -c-1 




- ### Ruby
caso você utilize Ruby siga as intruções abaixo:
ruby -run -e httpd . -p 8080





- ### Php
caso você utilize Ruby siga as intruções abaixo:
php -S localhost:8000




## Descrição das páginas
### - Index
O index é a página principal que contém 3 sessões sendo elas , uma sessão de formulário no topo , sessão principal onde é mostrado todos os produtos e a sessão de compartilhamento onde há outro formulário para indicar amigos.

a página index também conta com uma versão para mobile 


### - Email
O Email é um layout de email que será visualizado pelo usuários indicados, neste layout contém uma sessão de menssagem personalizada, outra sessão de produtos selecionados de maneira única para o usuário.



## Descrição das Classes

### - Consumer 
tem por função compor uma classe maior, onde sua função será para retornar os dados da api, apenas recebendo como entrada a url de qualquer api.


### - Conversor
tem por função compor uma classe maior, onde sua função será retornar os arrays/listas dos produtos da api , recebendo como entrada um objeto.


### - Inserter
tem por função apenas inserir os produtos no html no formato padrão de cards, recebe em sua entrada uma lista de produtos para serem renderizados.


### - Product
a classe Product é a união as classes Consumer e Conversor,recebendo a url da api e retornando no final a lista de produtos para que a classe inserte possa renderizar os produtos no html


### - CheckerEmail
tem por função validar o email do usuário utilizando expressão regular


### - CheckerCpf
tem por função validar o cpf do usuário utilizando expressão regular

## Lista de coisas que não foram implementadas

### - Desing de recorte no background no header e no footer

### - Responsividade para o modo mobile
o modo para mobile apresenta bugs de espaçamento relacionados ao width
