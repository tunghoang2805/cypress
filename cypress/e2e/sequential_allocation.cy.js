describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+demo@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k586vsh3amtt8y6td9stqmxd/allocation');
    cy.contains('New Allocation').click();
    cy.get('select[name="salesProcessDataSourceType"]').select("Use Existing Import");
    cy.contains('Select Poolcut Import:').should('be.visible');
    cy.get('select[name="importId"]').find('option')
  .then($options => {
    // Select the value of the last option (not the placeholder)
    const lastValue = $options[1].value;
    cy.get('select[name="importId"]').select(lastValue);
  });
    cy.get('button[type="submit"]').click();
    cy.get('p[class="text-sm"]',{timeout:30000}).contains('The data has been validated!').should('be.visible');
    cy.get('span').contains('Last Import').click();
    cy.get('button').contains('Next').should('be.enabled').click();
    cy.get('p[class="text-sm"]').contains('Initial loan allocation complete!',{timeout:20000}).should('be.visible');
    cy.get('button').contains('Next').should('be.enabled').click();
    cy.get('[data-testid="select-trust-validate-next"]').contains('Next').click();
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="text"]').type('Tung Cypress Automated Test Allocation');
    cy.get('button[data-testid="select-trust-validate-next"]').should('be.enabled').click();
    // cy.get('button[type="button"]').contains('Next').click();
    cy.get('[data-testid="download-pdf"]').contains('PDF').click();
    cy.verifyDownload('AllocationNotice', { contains: true, fileExtension: '.pdf' });
    cy.get('[data-testid="download-csv"]').contains('CSV').click();
    cy.verifyDownload('AllocationPaymentInstructions', { contains: true, fileExtension: '.csv' });
    // cy.get('[data-testid="download-pdf"]').click();
    // cy.verifyDownload('AllocationPaymentInstructions', { contains: true, fileExtension: '.pdf' });
    // cy.get('[data-testid="download-csv"]').click();
    // cy.verifyDownload('AllocationPaymentInstructions', { contains: true, fileExtension: '.csv' });
    cy.contains('Return to list').click();
    cy.get('[data-testid="status-badge"]').should('be.visible').and('contain.text', 'Completed');

  })
})