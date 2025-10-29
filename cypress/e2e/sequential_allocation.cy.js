describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dash-demo.sequenti.al/login')
    cy.get('[name="email"]').type('tung+demo@gosequential.com');
    cy.get('[name="password"]').type('@Starlone321!');
    cy.get('[name="remember"]').check();
    cy.get('button.border').click();
    cy.visit('https://dash-demo.sequenti.al/trusts/01k82kqy8njcm8p2v3prm24y0p/allocation');
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
  })
})