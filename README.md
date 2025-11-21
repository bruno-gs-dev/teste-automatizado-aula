# teste-automatizado-cypress

Este repositório contém exemplos e práticas de testes automatizados utilizando o Cypress.
| Aprender                    | Exemplo                  |
| --------------------------- | ------------------------ |
| Navegar                     | `cy.visit()`             |
| Interagir com elementos     | `cy.get().click()`       |
| Preencher campos            | `cy.get().type()`        |
| Fazer asserts               | `.should()`              |
| Criar comandos customizados | `Cypress.Commands.add()` |
| Executar em modo headless   | `npx cypress run`        |

## Configuração
1. Clone o repositório:
   ```bash
   git clone
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Execute os testes:
    ```bash
    npx cypress open
    ```
4. Configure suas credenciais do GitHub no arquivo `cypress.env.json`:
    ```json
    {
      "GITHUB_USER": "seu_usuario",
      "GITHUB_PASS": "sua_senha"
    }
    ```

 **Atenção:** Os testes estão no diretório `cypress/e2e/`. Existem três arquivos de teste:

- `spec.cy.js` — teste inicial que demonstra os recursos da ferramenta.
- `spec-login.cy.js` — teste de login no GitHub; mostra como um usuário acessa o sistema.
- `spec-req.cy.js` — testes relacionados a requisições; exemplifica como testar requests no Cypress.

> **Atenção:** Apague o comentario que tem no arquivo `cypress.env.json` e insira suas credenciais reais para que os testes funcionem corretamente.