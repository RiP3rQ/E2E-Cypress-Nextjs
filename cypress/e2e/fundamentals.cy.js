describe("Fundamental tests", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  // it.only will run only this test
  it("Contains correct header text", () => {
    cy.getDataTest("fundamentals-header").contains(/Testing Fundamentals/i);

    // without custom command
    // cy.get('[data-test="fundamentals-header"]').contains(
    //   /Testing Fundamentals/i
    // );

    // 1 accordion item
    cy.contains(/Your tests will exist in a describe block./i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block./i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    // 2 accordion item
    cy.contains(
      /Within your describe block, you will also have it blocks./i
    ).should("not.be.visible");
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
    cy.contains(
      /Within your describe block, you will also have it blocks./i
    ).should("be.visible");
    cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
  });
});
