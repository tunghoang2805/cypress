describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
        cy.get('[name="email"]').type('tung+demo@gosequential.com');
        cy.get('[name="password"]').type('@Starlone321!');
        cy.get('[name="remember"]').check();
        cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k6y95q5htmpyv4vr8w4ewt7a/redemption')
    // Min and max multiplier for randomization (e.g., between 1 and 10 million)
    const minMultiplier = 1;
    const maxMultiplier = 100000;
    cy.get('[class="seq-button"]').contains('New Redemption').click();
    cy.get('input[type="number"].seq-input').each(($input) => {
      const randomMultiplier = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
      const randomValue = randomMultiplier * 1000; // unit size = 1,000,000
      cy.wrap($input)
        .clear()
        .type(randomValue.toString());
    });
     cy.get('button[type="button"]').contains('Continue').click();
        cy.get('button[type="button"]').contains('CONFIRM').click();
    cy.get('select[name="selectedNoticeTemplate"]')
      .find('option')
      .then($options => {
        // Select the value of the last option (not the placeholder)
        const lastValue = $options[$options.length - 1].value;
        cy.get('select[name="selectedNoticeTemplate"]').select(lastValue);
      });
      cy.get('button[data-testid="select-template-validate-next"]').should('be.enabled').click();
      cy.get('[data-testid="status-badge"]').should('be.visible').and('contain.text', 'Template Selected');
      // cy.get('[data-testid="download-excel"]').contains('Download').click();
      // cy.verifyDownload('SubscriptionNotice', { contains: true, fileExtension: '.pdf' });
      cy.get('a').contains('Return to list').click();
      cy.get('button[class="cursor-pointer text-sequential-button hover:text-sequential-button-hover"]').click();
      cy.get('button[type="button"]').contains('OK').click();
  })
})