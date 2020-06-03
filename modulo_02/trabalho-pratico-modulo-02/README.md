<h2 align="center">

  <img alt="IGTI" src="https://res.cloudinary.com/dr05turuf/image/upload/v1591157766/bootcamp_fullstack_msogre.png" width="200px" />
  <br/>
  🚀 Bootcamp Online - Desenvolvedor Full Stack - IGTI
  <p>Challenges - Módulo 02</p>
</h2>

## :mailbox_with_mail: Get in touch!

<p align="center">

  <a href="https://github.com/felsantiago" target="_blank" >
    <img alt="Github - Felipe Santiago" src="https://img.shields.io/badge/Github--%23F8952D?style=social&logo=github">
  </a>
  <a href="https://www.linkedin.com/in/felipe-santiago-a7706418a/" target="_blank" >
    <img alt="Linkedin - Felipe Santiago" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
  </a>
  <a href="mailto:fepuss@gmail.com" target="_blank" >
    <img alt="Email - Felipe Santiago" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
  </a>
  <a href="https://api.whatsapp.com/send?phone=5588997143829"
        target="_blank" >
    <img alt="Fale comigo no whatsapp - Felipe Santiago" src="https://img.shields.io/badge/Whatsapp--%23F8952D?style=social&logo=whatsapp">
  </a>
</p>

## **Instruções do Desafio**

### **Informações sobre o Trabalho Prático**

### **Objetivos**

Exercitar os seguintes conceitos trabalhados no Módulo:

Criação de um projeto Node.js.
Manipulação de arquivos.
Manipulação de objetos JSON.

### **Enunciado**

O aluno deverá criar um projeto Node.js para realizar a criação de alguns métodos e processamento de arquivos JSON.

### **Atividades**

O aluno deverá baixar os arquivos Cidades.json e Estados.json do link a seguir (https://github.com/felipefdl/cidades-estados-brasil-json (Links para um site externo.)) e colocá-los dentro do seu projeto. O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json.

O aluno deverá desempenhar as seguintes atividades:

Implementar um método que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

1. Criar um método que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

2. Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: **[“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]**

3. Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Utilize o método criado no tópico anterior. Exemplo de impressão: **[“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]**

4. Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Por exemplo: **[“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]**.

5. Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retorne o primeiro. Por exemplo: **[“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]**.

6. Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: **“Nome da Cidade - UF"**.

7. Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Em caso de empate, considerar a ordem alfabética para ordená-los e então retornar o primeiro. Exemplo: **“Nome da Cidade - UF"**.

8. O projeto ao ser executado, deve realizar os cinco métodos em sequência, imprimindo os resultados em console e depois finalizando a execução.

### **Observação**

Realizei o projeto de forma diferente, fazendo uma api RestFull criando os endpoints para cada tópico do desafio.

### **Testes**

Vou disponibilizar o arquivo json com as requisições.

##### **Arquivo Json Insomnia:**

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=trabalho-pratico-modulo-2&uri=https%3A%2F%2Fres.cloudinary.com%2Fdr05turuf%2Fraw%2Fupload%2Fv1591159465%2Finsomnia%2Figti%2FInsomnia_igiti_trabalho-pratico-modulo-02_wejekz.json)

Felipe Santiago
