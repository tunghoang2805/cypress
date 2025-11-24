describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
            cy.get('[name="email"]').type('tung+demo@gosequential.com');
            cy.get('[name="password"]').type('@Starlone321!');
            cy.get('[name="remember"]').check();
            cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/dashboard');
            cy.get('div[class="bg-white rounded p-4 mt-4"]').contains('Overview').should('be.visible');
            cy.get('div[class="bg-white rounded p-4 mt-4"]').contains('Trusts in Breach').should('be.visible');
            cy.get('div[class="bg-white rounded p-4 mt-4"]').contains('Approvals Pending').should('be.visible');
            cy.get('div[class="bg-white rounded p-4 mt-4"]').contains('Approval Requests').should('be.visible');
    cy.visit('https://dash-demo.sequenti.al/trusts');
            cy.get('main').within(() => {
  cy.contains('a', 'Trusts').should('be.visible');
  cy.contains('h1', 'Trusts').should('be.visible');
  cy.contains('a', 'Add New Trust').should('be.visible').click();
   cy.visit('https://dash-demo.sequenti.al/trusts');
  cy.get('[x-ref="container_Corporate"]').should('be.visible').click();
  cy.get('[x-ref="container_Warehouse Facility"]').should('be.visible').click();
  cy.get('[x-ref="container_Term"]').should('be.visible').click();
});

  cy.visit('https://dash-demo.sequenti.al/entities');
            cy.get('main').within(() => {
  cy.contains('a', 'Entities').should('be.visible');
  cy.contains('h1', 'Entities').should('be.visible');

  cy.contains('p',
    'List of Entities associated with Trusts. ' +
    'Select an Entity to view associated contacts and parties.'
  ).should('be.visible');

  cy.contains('[type="button"]', 'Add new Entity')
    .should('be.visible')
    .click();

  cy.contains('[type="button"]', 'Cancel')
    .should('be.visible')
    .click();

  cy.contains('th[scope="col"]', 'Name').should('be.visible');
  cy.contains('th[scope="col"]', 'Primary Contact').should('be.visible');
  cy.contains('th[scope="col"]', 'Phone Number').should('be.visible');
  cy.contains('th[scope="col"]', 'Trusts').should('be.visible');
});
  })
})