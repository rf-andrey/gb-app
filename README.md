# GB App

Esta é uma aplicação React feita para simular um dashboard e uma loja, consumindo a GB API.

## Comandos

### Instalação

```
yarn install
```

### Execução

```
yarn dev
```

A aplicação estará disponível em:

```
http://localhost:3000/
```

## Detalhes

Esta aplicação utiliza o app router do NextJS, fazendo uso de server components e funcionalidades voltadas para SSR.

### Páginas

- `/`: Ponto de entrada, com redirecionamento para o dashboard, para a loja, e navbar com login;

- `/login`: Tela de login e cadastro;

- `/admin/usuarios`: Dashboard com operações na tabela de usuários;

- `/admin/categorias`: Dashboard com operações na tabela de categorias;

- `/admin/produtos`: Dashboard com operações na tabela de produtos;

- `/admin/pedidos`: Dashboard com visualização da tabela de pedidos (pedidos são criados na loja);

- `/loja`: Página inicial da loja, com listagem de categorias;

- `/loja/{id}`: Página da categoria, com listagem de produtos;

- `/loja/{id}/{productId}`: Página de produto, com detalhes do produto e operação de compra;

### Stack

- React como biblioteca principal;
- NextJS como framework;
- Next-Auth para autenticação;
- Typescript;
- Tailwind CSS como framework de CSS;
- DaisyUI como biblioteca de componentes para Tailwind CSS;

### TODOS

- [ ] Admin: Listagem de endereços do usuário
- [ ] Admin: Listagem de pedidos do usuário
- [ ] Admin: Lógica de exclusão de usuário ativo
- [ ] Loja: Página de usuário
- [ ] Loja: Listagem de endereços do usuário
- [ ] Loja: Listagem de pedidos do usuário
- [ ] Loja: Confirmação/cancelamento do pedido
- [ ] Geral: Validar inputs nos forms
- [ ] Geral: Feedback visual das requisições
- [ ] Geral: Melhorias de estilos
