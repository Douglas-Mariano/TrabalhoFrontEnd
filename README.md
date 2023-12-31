# Projeto de Sistema de Autenticação e Consulta de CEP

Este é um projeto de sistema web que visa fornecer funcionalidades de autenticação de usuários e consulta de informações de CEP. Desenvolvido pelo Grupo 3, este sistema oferece três principais funcionalidades em suas páginas:

1. **Tela de Login e Cadastro:** Os usuários podem autenticar-se com um nome de usuário e senha, ou criar uma nova conta através da tela de cadastro.

2. **Consulta de Endereço:** O sistema permite aos usuários pesquisarem informações de endereço a partir de um CEP fornecido. Os dados do endereço, como logradouro, bairro, cidade e estado, são recuperados através da API ViaCep e exibidos ao usuário.

3. **Perfil dos Desenvolvedores:** Além das funcionalidades principais, o projeto inclui um perfil dos desenvolvedores que contribuíram para a sua criação, fornecendo links para seus perfis no GitHub.

Este repositório contém o código-fonte e os arquivos relacionados ao projeto, incluindo as páginas HTML, estilos CSS e funções JavaScript que tornam o sistema interativo e funcional.

## Objetivos do Projeto

Os principais objetivos deste projeto incluem:

- Implementar um sistema de autenticação simples para controlar o acesso às funcionalidades do sistema.
- Facilitar a consulta de informações de endereço por meio da integração com a API ViaCep.
- Fornecer uma experiência de usuário agradável e intuitiva com estilos CSS atraentes.
- Demonstração da capacidade de desenvolvimento web do Grupo 3.

## Como Usar

Para usar o sistema, siga as instruções de instalação e implementação fornecidas abaixo. Certifique-se de que todas as dependências estejam configuradas corretamente para garantir o funcionamento adequado.

## Instalação e Implementação

1. Clone este repositório em seu ambiente de desenvolvimento local.
2. Abra as páginas HTML em seu navegador preferido.
3. Utilize as funcionalidades do sistema, incluindo login, cadastro e consulta de CEP.

## Colaboradores

- [Bernardo Bonifácio](https://github.com/bernardobonifacio)
- [Dayane Mafort](https://github.com/DayaneThuller)
- [Douglas do Amaral](https://github.com/Douglas-Mariano)
- [Elaine Dutra](https://github.com/Elaine-Dutra)
- [Leonardo Lucas](https://github.com/LeonardoLucas13)
- [Natally Silva](https://github.com/NatallyMonteiro)
- [Taynara Aguiar](https://github.com/tayaguiar)

Este projeto foi desenvolvido pelo Grupo 3 e é uma demonstração de suas habilidades no desenvolvimento web. Sinta-se à vontade para explorar o código-fonte e experimentar as funcionalidades oferecidas pelo sistema.

## Tela de Login (login.html)

A primeira página é a tela de login, que permite aos usuários inserirem suas credenciais para acessar o sistema. Ela contém os seguintes elementos:

- Um formulário de login com campos para "nome" e "senha".
- Um botão "login" que chama a função `login()` quando clicado.
- Um link para a página de cadastro.

## Tela de Cadastro (cadastro.html)

A segunda página é a tela de cadastro, onde os usuários podem criar uma nova conta. Ela contém os seguintes elementos:

- Um formulário de cadastro com campos para "nome", "senha" e "confirmar senha".
- Um botão "salvar" que chama a função `cadastrar()` quando clicado.
- Um link para a página de login.

## Consulta de Endereço (buscaEndereco.html)

A terceira página é a consulta de endereço, que permite aos usuários pesquisarem informações de CEP. Ela contém os seguintes elementos:

- Um campo de entrada para digitar o CEP.
- Um botão "Verificar" que chama a função `pesquisacep()` quando clicado.
- Campos de exibição para o "Código IBGE", "Logradouro", "Bairro", "Cidade" e "Estado" que são preenchidos com os dados do CEP consultado.
- Um link para consultar o CEP no site dos Correios.

## Recursos Utilizados

As páginas também fazem uso de recursos externos, incluindo:

- Folhas de estilo CSS para estilização das páginas.
- A biblioteca SweetAlert2 para exibição de alertas personalizados.
- A biblioteca Bootstrap para estilização adicional.
- Ícones da font-awesome para links de perfil dos desenvolvedores.

## Desenvolvedores

Este projeto foi desenvolvido por um grupo de colaboradores e seus perfis de GitHub estão listados no rodapé da página de consulta de endereço.

## Estilos Gerais

- A fonte "Roboto" é importada do Google Fonts e é usada como fonte principal para todo o conteúdo das páginas.
- A classe `.login-page` é estilizada para centralizar o formulário de login ou cadastro na página usando `position: absolute` e `transform: translate(-50%, -50%)`.

## Estilos do Formulário

- A classe `.form` define o estilo do formulário de login e cadastro, incluindo o fundo cinza escuro, bordas arredondadas e sombra.
- Os campos de entrada (`input`) têm fundo cinza claro (`#e0d9d9`) e são estilizados para ocupar 100% da largura.
- Os botões têm um fundo amarelo claro (`#ffde59`), borda preta, e mudam de cor para preto quando hover, active ou focados.
- O texto do botão é maiúsculo e a fonte é "Roboto".

## Estilos da Mensagem e Links

- A classe `.message` estiliza as mensagens exibidas abaixo do formulário, com cor de texto cinza e um link destacado em amarelo.
- Os links dentro das mensagens (`a`) têm a cor do texto definida como amarelo para se destacarem.

## Estilos do Fundo

- O fundo do corpo da página (`body`) é definido como uma imagem de fundo que se repete horizontalmente. A fonte de fundo também inclui um degradê de cor de fundo (#323232fa) para melhorar a legibilidade do texto.

## Outros Estilos

- A classe `.container` é usada para envolver o conteúdo principal da página, alinhando-o ao centro.
- O cabeçalho da página (`.logo`) tem uma largura de 50% para um tamanho adequado.
- Os estilos para botões com classe `.btn-outline-warning` e `.btn-warning` são definidos, controlando as cores de texto e fundo, além de como eles se comportam ao passar o mouse ou serem visitados.
- Labels (etiquetas) em formulários têm a cor do texto definida como cinza claro.

## Estilos Responsivos

- Os estilos responsivos são aplicados quando a largura da tela é de até 540px. Isso afeta principalmente o tamanho do padding na navbar e o posicionamento do rodapé.

## Função `login()`

Esta função é responsável por autenticar o usuário. Ela realiza as seguintes etapas:

1. Obtém os valores dos campos "nome" e "senha" do formulário de login.
2. Recupera os usuários armazenados no Local Storage.
3. Itera sobre a lista de usuários para verificar se as credenciais coincidem.
4. Se um usuário correspondente for encontrado, redireciona para a página de consulta de endereço.
5. Se nenhum usuário correspondente for encontrado, exibe um alerta de erro.

## Validação de Campos de Cadastro

As seguintes funções são responsáveis por validar os campos de cadastro em tempo real à medida que o usuário digita:

- `validNome`: Valida o campo "nome" para garantir que tenha pelo menos 3 caracteres.
- `validSenha`: Valida o campo "senha" para garantir que tenha pelo menos 4 caracteres.
- `validConfSenha`: Valida o campo "confirmar senha" para garantir que seja igual à senha.

Essas funções aplicam estilos de borda vermelha ou verde aos campos para indicar se eles estão válidos ou inválidos.

## Função `cadastrar()`

Esta função é chamada quando o usuário tenta se cadastrar. Ela realiza as seguintes etapas:

1. Verifica se os campos de "nome", "senha" e "confirmar senha" são válidos.
2. Recupera os usuários armazenados no Local Storage.
3. Verifica se o nome de usuário já está cadastrado.
4. Se não estiver cadastrado, adiciona o novo usuário à lista de usuários e redireciona para a página de login.
5. Se o nome de usuário já estiver cadastrado, exibe um alerta de erro.

## Funções para Consulta de CEP

- `limpa_formulário_cep`: Limpa os campos de endereço quando um CEP não é encontrado.
- `meu_callback(conteudo)`: Atualiza os campos de endereço com os valores retornados pela consulta ao CEP na API ViaCep.
- `pesquisacep()`: Realiza a consulta de CEP e atualiza os campos de endereço. Também valida o formato do CEP.
- `formatarCEP(cep)`: Formata o CEP para o padrão "XXXXX-XXX".
- `atualizarCEP(event)`: Valida o campo de entrada do CEP em tempo real e formata-o enquanto o usuário digita.
- `pagLogin()`: Redireciona o usuário de volta para a página de login.

Essas funções são usadas para buscar informações de endereço com base no CEP fornecido pelo usuário.
