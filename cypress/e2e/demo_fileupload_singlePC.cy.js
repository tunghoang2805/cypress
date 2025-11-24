describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+plenti@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k84n63qm7r2gk0d5jrk1cvb9')
    cy.get('[data-testid="trust-nav-data"]').click();
    cy.contains("Poolcut").click(); 
    cy.get('a.text-white').contains("Import Poolcut").click();
    cy.get('[name="data_reference_date"]').click();
    cy.get('[name="data_reference_date"]').type('2025-10-31');
    cy.get('[name="fileUpload.Poolcut"]').selectFile('/Users/tunghoang/Desktop/test data/plenti/pft3_pc_nov.csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:60000}).should('be.visible');
    cy.wait(3000);
    cy.get('a.text-white').contains("Return to list").click();
    cy.contains("Servicer Report").click();
    cy.contains('Import Servicer Report').click();
    cy.get('#mainForm [name="collections_period_end"]').select('2025-10-31');
    cy.get('[name="fileUpload.Servicer"]').selectFile('/Users/tunghoang/Desktop/test data/plenti/pft3_mar_SR.csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:300000}).should('be.visible');
    cy.wait(3000);
    cy.contains('Return to list').click();
    cy.visit("https://dash-demo.sequenti.al/trusts/01k84n63qm7r2gk0d5jrk1cvb9/reporting/bank-reconciliation")
    cy.contains('Plenti Funding Trust no3 ADA').click();
    cy.get('[name="collections_period_end"]').select('2025-11-30');
    cy.wait(2000);
    cy.get('[type="button"]').contains('Import Transactions').click();
    cy.get('[name="fileUpload.t"]').selectFile('/Users/tunghoang/Desktop/test data/bank_subs.csv',{force: true});
    cy.get('[type="submit"]').click();
    cy.get('[x-text = "message"]').should('be.visible');
  })
})