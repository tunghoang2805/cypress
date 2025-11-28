describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+demo@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k6y95q5htmpyv4vr8w4ewt7a')
    cy.get('[data-testid="trust-nav-data"]').click();
    cy.contains("Poolcut").click(); 
    cy.get('a.text-white').contains("Import Poolcut").click();
    cy.get('[name="data_reference_date"]').click();
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // 01–12
  const dd = String(today.getDate()).padStart(2, '0');      // 01–31
  const formatted = `${yyyy}-${mm}-${dd}`;
    cy.get('[name="data_reference_date"]').type(formatted);
    cy.get('[name="fileUpload.Poolcut"]').selectFile('/Users/tunghoang/Desktop/test data/Poolcut Sample (dif value).csv',{force: true});
    cy.get('#mainForm button.submit').contains("Validate",{timeout:60000}).should('be.enabled');
    cy.get('#mainForm button.submit').click();
    cy.contains('Complete',{timeout:60000}).should('be.visible');
    cy.wait(3000);
    cy.get('a.text-white').contains("Return to list").click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k6y95q5htmpyv4vr8w4ewt7a/reporting/ad-hoc')
    cy.contains('New Reporting Run').click();
    cy.get('[type="checkbox"]').check();
    cy.contains('Next').click();
    cy.get('select[name="reportingDate"]')
  .find('option')
  .then($options => {
    const firstval = $options[1].value;
    cy.get('select[name="reportingDate"]').select(firstval);
  });
    cy.contains('Next').click();
    cy.get('[data-testid="status-badge"]').should('contain.text', 'Running');
    cy.get('[data-testid="status-badge"]', { timeout: 30000 }).should('contain.text', 'Draft');
    cy.contains(/^Download$/).click();
    cy.verifyDownload('v2 report test', { contains: true, fileExtension: '.xlsx' });
    cy.contains('button','Download (CSV)').click();
    cy.verifyDownload('AdhocPoolcut', { contains: true, fileExtension: '.csv' });
    // cy.contains('Edit').click();
    //     cy.wait(2000);
    // cy.contains('button','Next').click();
    //         cy.wait(2000);
    // cy.contains('button','Next').click();
    //         cy.wait(2000);
    // cy.get('[data-testid="status-badge"]').should('contain.text', 'Running');
    // cy.get('[data-testid="status-badge"]', { timeout: 30000 }).should('contain.text', 'Draft');
    cy.get('[type="button"]').contains('Delete').click();
    cy.get('[type="button"]').contains('Cancel').click();
    cy.get('[type="button"]').contains('Finalise').click();
    cy.contains('Cancel').click();
    cy.get('[type="button"]').contains('Finalise').click();
    cy.contains('OK').click();
    cy.get('[data-testid="status-badge"]').should('contain.text', 'Complete');
  })
})