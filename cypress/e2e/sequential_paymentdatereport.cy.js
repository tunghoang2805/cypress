describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+demo@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k6y95q5htmpyv4vr8w4ewt7a/reporting/payment-date')
    cy.contains('New Reporting Run').click();
    cy.get('select[name="paymentDate"]')
  .find('option')
  .then($options => {
    // Select the value of the last option (not the placeholder)
    const lastValue = $options[$options.length - 1].value;
    cy.get('select[name="paymentDate"]').select(lastValue);
  });
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.contains('Next').click();
    cy.get('[data-testid="status-badge"]').should('contain.text', 'Running');
    cy.get('[data-testid="status-badge"]', { timeout: 30000 }).should('contain.text', 'Draft');
    cy.contains('Principal Waterfall').click();
    cy.contains('Time Series').click();
    cy.get('.item-center[wire\\:click="viewWaterfallTimeSeries(\'Income\')"]').click();
    cy.contains('Export').click();
    cy.verifyDownload('time-series', { contains: true, fileExtension: '.xlsx' });
    cy.get('[type="button"]').contains('Back').click();
    cy.get('.item-center[wire\\:click="viewWaterfallTimeSeries(\'Principal\')"]').click();
    cy.contains('Export').click();
    cy.verifyDownload('time-series', { contains: true, fileExtension: '.xlsx' });
    cy.contains('Parameters').click();
    cy.contains('Reports').click();
    cy.get('[type="button"]').contains('Delete').click();
    cy.get('[type="button"]').contains('OK').click();  
  })
})