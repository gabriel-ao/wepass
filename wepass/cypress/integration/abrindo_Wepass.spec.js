import testIds from "../../src/constants/test-ids";

describe("Deve abrir a tela de apresentação do wepass", () => {
  const site = "http://localhost:3000/";

  it("Abrir tela!", () => {
    cy.visit(site);
  });

  it("Abrir tela de login", () => {
    // cy.visit(site);
    cy.get(`[data-testid="${testIds.BTN_LOGAR}"]`).click();
  });
});
