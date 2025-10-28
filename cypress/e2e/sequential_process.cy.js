describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
  })
});

it('sign in', function() {
  cy.visit('https://dash-demo.sequenti.al/login')
  cy.get('[name="email"]').type('tung+demo@gosequential.com');
  cy.get('[name="password"]').type('@Starlone321!');
  cy.get('[name="remember"]').check();
  cy.get('button.border').click();
  cy.get('button.items-center').click();
  cy.get('form a.block').click();
});