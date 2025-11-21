describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.gosequential.com/login')
    cy.get('[name="email"]').type('tung+prod@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://app.gosequential.com/trusts/01k9dvx0saaxdtsdbjp18bfdwg')
    cy.get('[data-testid="trust-nav-data"]').click();
    cy.contains("Poolcut: Loan").click(); 
    cy.get('a.text-white').contains("Import Poolcut").click();
    cy.get('[name="data_reference_date"]').click();
    cy.get('[name="data_reference_date"]').type('2025-10-31');
    cy.get('[name="fileUpload.Poolcut"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_pcl.csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:60000}).should('be.visible');
    cy.wait(5000);
    cy.get('a.text-white').contains("Return to list").click();
    cy.contains("Poolcut: Security").click();
    cy.get('a.text-white').click();
    cy.get('[name="data_reference_date"]').click();
    cy.get('[name="data_reference_date"]').type('2025-10-31');
    cy.get('[name="fileUpload.PoolcutSecurity"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_pcs.csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:60000}).should('be.visible');
    cy.wait(5000);    
    cy.get('a.text-white').contains("Return to list").click();
    cy.contains("Servicer Report").click();
    cy.contains('Import Servicer Report').click();
    cy.get('#mainForm [name="collections_period_end"]').select('2025-10-31');
    cy.get('[name="fileUpload.Servicer"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_lmr.csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:300000}).should('be.visible');
    cy.wait(5000);
    cy.contains('Return to list').click();
    cy.visit("https://app.gosequential.com/trusts/01k9dvx0saaxdtsdbjp18bfdwg/reporting/bank-reconciliation")
    cy.contains('coll pay').click();
    cy.get('[name="collections_period_end"]').select('2025-10-31');
    cy.contains('Upload a file').click();
    cy.get('[name="fileUpload.t"]').selectFile('/Users/tunghoang/Desktop/test data/bank_coll.csv',{force: true});
    cy.get('[type="submit"]').click();
    cy.get('[x-text = "message"]').should('be.visible');
  })
})