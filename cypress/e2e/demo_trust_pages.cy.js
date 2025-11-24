describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
            cy.get('[name="email"]').type('tung+demo@gosequential.com');
            cy.get('[name="password"]').type('@Starlone321!');
            cy.get('[name="remember"]').check();
            cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts');
            cy.get('main').within(() => {
  cy.contains('a', 'Trusts').should('be.visible');
  cy.contains('h1', 'Trusts').should('be.visible');
  cy.contains('a', 'Add New Trust').should('be.visible').click();
   cy.visit('https://dash-demo.sequenti.al/trusts');
  cy.get('[x-ref="container_Corporate"]').should('be.visible').click();
  cy.get('[x-ref="container_Warehouse Facility"]').should('be.visible').click();
  cy.get('[x-ref="container_Term"]').should('be.visible').click();
  cy.get('[x-ref="container_Warehouse Facility"]').click();
});
cy.get('[x-ref="content_Warehouse Facility"]').within(() =>{cy.contains('a','View Trust').click()});           
cy.get('[data-testid="trust-nav-overview"]').should('be.visible').click();
cy.get('main').within(() => {
  cy.contains('h3', 'Details').should('be.visible');
  cy.contains('h3', 'Bank Accounts').should('be.visible');
  cy.contains('h3', 'Parties').should('be.visible');
  cy.contains('h3', 'Key Dates').should('be.visible');
});
cy.get('[data-testid="trust-nav-data"]').should('be.visible').click();
cy.get('[data-testid="trust-nav-ledgers"]').should('be.visible').click();
cy.contains('[type="button"]','Edit').should('be.visible').click();
cy.get('nav[aria-label="Breadcrumb"]').within(() => {cy.get('ol[role="list"] > li:nth-child(2) a').click()});
cy.get('aside').within(() => {
  cy.contains('Movement').should('be.visible').click();
});
cy.contains('Allocations').click();
cy.contains('Subscriptions').click();
cy.contains('Redemptions').click();
cy.get('aside').within(() => {
  cy.contains('Note Management').should('be.visible').click();
});
cy.contains('Margins').click();
  cy.contains('a','Update Margin').click();
  cy.contains('button','Save').click();
  cy.get('class="bg-sequential-banner-success"').should('be.visible');
  cy.contains('a','Update Margin').click();
  cy.contains('button','Cancel').click();
cy.contains('Ratings').click();
  cy.contains('a','Get Started').click();
  cy.get('nav[aria-label="Breadcrumb"]').within(() => {cy.get('ol[role="list"] > li:nth-child(2) a').click()});
cy.get('aside').within(() => {
  cy.contains('Note Management').click();
});
  cy.contains('Subordination').click();
  cy.contains('a','Update Subordination').click();
  cy.contains('button','Save').click();
  cy.get('class="bg-sequential-banner-success"').should('be.visible');
  cy.contains('a','Update Subordination').click();
  cy.contains('button','Cancel').click();
cy.get('aside').within(() => {
  cy.contains('Reporting').should('be.visible').click();
});
cy.contains('Bank Reconciliation').click();
cy.contains('Payment Date Reporting').click();
cy.contains('Ad-hoc Reporting').click();
cy.get('aside').within(() => {
  cy.contains('Performance').should('be.visible').click();
});
cy.get('main').within(() => {
  cy.contains('h3','Portfolio Parameters').should('be.visible');
  cy.contains('p','Review parameter performance.').should('be.visible');
  cy.get('canvas[id="performanceReport"]').should('be.visible');
});
  })
})