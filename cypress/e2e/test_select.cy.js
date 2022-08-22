/// <reference types="cypress" />

describe("Select different options", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "/api/sales/", {
      statusCode: 200,
      body: [
        {
          timestamp: "2020-06-17T06:44:02.676475",
          amount: 1902,
        },
        {
          timestamp: "2020-06-17T06:45:30.983656",
          amount: 893,
        },
      ],
    }).as("getSales");
  });

  it("should have `sales` option selected by default", () => {
    cy.get("select").should("have.value", "sales");
  });

  it("should select Sales", () => {
    cy.get("select").select("Sales").should("have.value", "sales");
  });

  it("should select Subscriptions", () => {
    cy.get("select")
      .select("Subscriptions")
      .should("have.value", "subscriptions");
  });
});
