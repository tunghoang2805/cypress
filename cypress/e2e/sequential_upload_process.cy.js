describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+demo@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k82kqy8njcm8p2v3prm24y0p')
    cy.get('[data-testid="trust-nav-data"]').click();
    cy.get('a.text-white').click();
    cy.get('[name="data_reference_date"]').click();
    cy.get('[name="data_reference_date"]').type('2025-09-30');
    cy.get('[name="fileUpload.Poolcut"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_pcl.csv',{force: true});
    cy.wait(2000);
    cy.get('#mainForm button.submit').should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.wait(35000);
    cy.contains('Complete').should('be.visible');
    cy.get('a.text-white').click();
    cy.get('div.hidden.border-b button:nth-child(2)').click();
    cy.get('a.text-white').click();
    cy.get('[name="data_reference_date"]').click();
    cy.get('[name="data_reference_date"]').type('2025-09-30');
    cy.get('[name="fileUpload.PoolcutSecurity"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_pcs.csv',{force: true});
    cy.wait(2000);
    cy.get('#mainForm button.submit').should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.wait(15000);
    cy.contains('Complete').should('be.visible');
    cy.get('a.text-white').click();
    cy.get('div.hidden.border-b button:nth-child(3)').click();
    cy.contains('Import Servicer Report').click();
    cy.get('#mainForm [name="collections_period_end"]').select('2025-09-30');
    cy.get('[name="fileUpload.Servicer"]').selectFile('/Users/tunghoang/Desktop/test data/metro/june_lmr.csv',{force: true});
    cy.wait(2000);
    cy.get('#mainForm button.submit').should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.wait(5000);
    cy.get('label.block').click();
    cy.get('input.rounded').check();
    cy.contains('Retry Import').click();
    cy.wait(35000);
    cy.contains('Complete').should('be.visible');
    cy.contains('Return to list').click();
    cy.visit("https://dash-demo.sequenti.al/trusts/01k82kqy8njcm8p2v3prm24y0p/reporting/bank-reconciliation")
    cy.contains('coll pay').click();
    cy.get('[name="collections_period_end"]').select('2025-09-30');
    cy.contains('Import Transactions').click();
    cy.get('[name="fileUpload.t"]').selectFile('/Users/tunghoang/Desktop/test data/bank_coll.csv',{force: true});
    cy.get('[type="submit"]').click();
    cy.get('[x-text = "message"]').should('be.visible');
  })
})