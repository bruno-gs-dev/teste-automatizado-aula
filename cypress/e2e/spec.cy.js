// teste de como funciona o cypress
describe('Teste abrir o google', () => { // descrição do teste
  it('Acessa o Google e verifica o título', () => { // caso de teste
    cy.visit('https://www.google.com'); // acessa o google
    cy.title().should('include', 'Google'); // verifica o título
  });
});
// fim do teste - se passar, o cypress mostrará em verde.
