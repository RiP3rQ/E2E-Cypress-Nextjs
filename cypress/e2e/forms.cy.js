describe("Testing form", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("email-input").find("input").as("email-input");
    cy.get("@email-input").type("essa@bessa.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: /i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: /i).should("not.exist");

    cy.get("@email-input").type("essa@bessa.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid Email: /i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid Email: /i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
  });
});
