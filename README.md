# Ethereal UI Design System

O **Ethereal UI Design System** é a biblioteca central de componentes e fundamentos visuais multiplataforma (Web, Android e iOS), desenvolvida em React Native e Expo. Ele garante consistência visual, acessibilidade e agilidade no desenvolvimento de nossos produtos.

---

## Links Úteis

- **Figma UI Kit:** [Ethereal - UI Design System no Figma](https://www.figma.com/design/aiv3laycCkjCpqySDCNm28/Ethereal---Design-System?node-id=8-4050&t=3SiLCP7ST2VBLdCH-1)

- **Repositório de Tokens:** [Ethereal Design Tokens](https://github.com/Ethereal-Design-System/ethereal-ui-design-tokens)

---

## Como Executar o Projeto

O projeto utiliza o Storybook para isolamento e documentação interativa dos componentes. Para rodar o ambiente do Storybook na plataforma desejada, utilize um dos comandos abaixo:

```bash
# Executar no navegador (Web)
npm run storybook:web
```

```bash
# Executar no emulador/dispositivo Android
npm run storybook:android
```

```bash
# Executar no simulador/dispositivo iOS
npm run storybook:ios
```

## Testes e Qualidade

Para garantir a estabilidade dos componentes, execute a suíte de testes unitários:

```bash
# Executar testes em modo watch
npm run test
```

## Scripts Disponíveis

Abaixo está a listagem completa dos scripts configurados no projeto e suas respectivas funções:

| Comando                      | Descrição                                                                                                                                                 |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run storybook:web`      | Configura o ponto de entrada e inicia o Storybook na Web via Expo.                                                                                        |
| `npm run storybook:android`  | Configura o ponto de entrada e inicia o Storybook no Android via Expo.                                                                                    |
| `npm run storybook:ios`      | Configura o ponto de entrada e inicia o Storybook no iOS via Expo.                                                                                        |
| `npm run test`               | Executa os testes automatizados com Jest em modo de observação contínua (`--watchAll`).                                                                   |
| `npm run lint`               | Executa a verificação estática do código usando as regras de lint do Expo.                                                                                |
| `npm run lint:fix`           | Tenta corrigir automaticamente os problemas de lint encontrados.                                                                                          |
| `npm run format`             | Formata todo o código do projeto utilizando o Prettier.                                                                                                   |
| `npm run build`              | Restaura o ponto de entrada padrão e compila os arquivos TypeScript para distribuição.                                                                    |
| `npm run set-storybook-main` | Permite alternar o dinamicamente ponto de entrada (`main`) do `package.json` para o modo Storybook.                                                       |
| `npm run prepare`            | Realiza a incialização automática do Husky para gerenciamento de Git Hooks.                                                                               |
| `npm run changeset`          | Inicia o fluxo interativo para documentar novas alterações no código e determinar o nível da próxima versão semântica (patch, minor ou major).            |
| `npm run version-packages`   | Consome os changesets pendentes, atualiza as versões no `package.json` e gera as entradas automáticas no `CHANGELOG.md`.                                  |
| `npm run version-check`      | Verifica o status atual das alterações e lista quais arquivos precisam de versionamento desde a branch `develop`. Útil para validação em pipelines de CI. |
|                              |
