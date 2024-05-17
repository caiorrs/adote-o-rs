# Adote o RS

Este projeto visa ajudar na reconstrução do RS, principalmente em relação às famílias mais necessitadas e pequenos negócios.

A ideia é conectar famílias que precisam recomeçar ou de uma ajuda muito expressiva com pessoas que podem ajudar, seria algo como "adotar uma família", mas não seria uma relação um-pra-um mas sim muitos-pra-um, ou seja, muitas pessoas podem adotar a mesma família. Talvez possa pensar em algo como uma vaquinha para cada família. Um dos desafios será fazer uma divisão justa das coisas, tentar priorizar as famílias que mais necessitam.

Similar, teria a possibilidade de "adotar um pequeno negócio", aqui podemos ter coisas diferentes, como ajuda na compra de insumos, transporte de mercadorias, propaganda, gorjetas, doacões, etc.

Por último, e talvez um pouco fora do escopo, teria a possibilidade de ofertar vagas de emprego, e ao mesmo tempo usuários interessados em acompanhar as vagas, poderiam receber notificação e se candidatar por meio de bot no whatsapp.


# Tecnologias do projeto

## React + TypeScript + Vite

Vite [docs](https://vitejs.dev/guide/)

React [docs](https://react.dev/learn)

## MUI

MUI [docs](https://mui.com/material-ui/getting-started/)


## React Router Dom

React Router Dom [docs](https://reactrouter.com/en/main/start/overview)

## Firebase

### Peça acesso se necessário

- Hosting
- Analytics
- Firestore
- Storage

# Ferramentas de código

Github Actions
- Deploy no merge - DONE
- Rodar testes/build no PR - TODO

Unit Testing
- Configuração - TODO

Husky/Githooks
- Configuração - TODO

Firestore
- Pensar nos documents - TODO
- Fazer serviço - TODO

Estilização
- Necessário FIGMA - TODO
- Necessário configurar tema - TODO

ESLint + Prettier
- Lint on save - TODO
- Format on save - TODO

Auth
- Provider de autenticação - TODO
- Bloquear rotas por role/autenticação - TODO

Tarefas
- Usar "trello" do github, ou criar um trello mesmo - TODO


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
