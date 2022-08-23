/// <reference types="cypress" />

describe("Select different options", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should have `sales` option selected by default", () => {
    cy.get("select").should("have.value", "sales");
  });

  it("should select Sales", () => {
    cy.intercept("GET", "/api/sales", {
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
    cy.get("select").select("Sales").should("have.value", "sales");
    cy.wait("@getSales", { timeout: 10000 });
  });

  it("should select Subscriptions", () => {
    cy.intercept("GET", "/api/subscriptions", {
      statusCode: 200,
      body: [
        {
          timestamp: "2020-06-17T06:44:02.676475",
          amount: 4,
        },
        {
          timestamp: "2020-06-17T06:45:30.983656",
          amount: 2,
        },
        {
          timestamp: "2020-06-18T06:45:30.983656",
          amount: 4,
        },
      ],
    }).as("getSubscriptions");
    cy.get("select")
      .select("Subscriptions")
      .should("have.value", "subscriptions");
    cy.wait("@getSubscriptions", { timeout: 15000 });
  });
});
