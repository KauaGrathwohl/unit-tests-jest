# Testes Unitários com JEST

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)

## Iniciando

Para executar este projeto, siga os passos abaixo:

1. Instale o [Node JS](https://nodejs.org/) (versão >= 20.x)
2. Execute `npm install` para instalar todas as dependências do projeto
3. Execute `npm run test` para rodar toda a suíte de testes
4. Execute `npm run coverage` para rodar toda a suíte de testes com cobertura

Todos os artefatos de execução podem ser encontrados em `./coverage`. Se desejar remover esses arquivos, execute `npm run clean`.

## Estrutura do Projeto

- **src**: Contém o código fonte do projeto.
- **test**: Contém os arquivos de teste unitário.

## Visão Geral da Suíte de Testes

Este projeto inclui uma suíte abrangente de testes unitários para a classe `GerenciadorDeTarefas`. Os testes visam garantir o funcionamento correto de vários métodos e casos extremos no gerenciamento de tarefas. Abaixo está uma visão geral dos cenários de teste cobertos:

### Cenários de Teste para `GerenciadorDeTarefas`

1. **Adicionar Tarefa**
    - Testa a adição de uma tarefa válida.
    - Verifica se a tarefa não é adicionada quando a descrição é inválida (menor ou igual a 3 caracteres).
    - Garante que tarefas com descrição vazia não são adicionadas.


2. **Remover Tarefa**
    - Testa a remoção de uma tarefa existente.
    - Verifica o comportamento ao tentar remover uma tarefa que não existe.


3. **Buscar Tarefa**
    - Testa a busca de uma tarefa pelo ID.
    - Verifica a busca de tarefas por descrição.


4. **Atualizar Tarefa**
    - Testa a atualização de uma tarefa existente.
    - Verifica que não é possível atualizar uma tarefa inexistente.


5. **Listar Tarefas**
    - Testa a listagem de tarefas pendentes e concluídas.
    - Verifica a listagem de tarefas por prioridade e data.


6. **Marcar e Reabrir Tarefas**
    - Testa a marcação de uma tarefa como concluída.
    - Verifica a reabertura de uma tarefa previamente concluída.


7. **Remover Tarefas Concluídas**
    - Testa a remoção de todas as tarefas concluídas.


8. **Tags e Prioridade**
    - Testa a adição e remoção de tags de tarefas.
    - Verifica a atualização e listagem de tarefas por prioridade.


9. **Ordenação**
    - Testa a ordenação das tarefas por data e prioridade.

Cada teste utiliza `expect` para garantir que o comportamento do `GerenciadorDeTarefas` esteja conforme o esperado. Os testes são executados em um ambiente isolado e limpo, garantindo precisão e confiabilidade nos resultados.
