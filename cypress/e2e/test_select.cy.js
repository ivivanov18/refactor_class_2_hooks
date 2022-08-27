/// <reference types="cypress" />

describe("Select different options", () => {
  // beforeEach(() => {
  //   cy.mirage();
  // });
  it("should have `sales` option selected by default", () => {
    cy.visit("/");
    cy.get("select").should("have.value", "sales");
  });

  it("should select Sales", () => {
    cy.intercept(
      { method: "GET", url: "**/sales" },
      {
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
      }
    ).as("getSales");

    cy.visit("/");
    cy.get("select").select("Sales").should("have.value", "sales");
    cy.wait("@getSales").then(({ response }) => {
      expect(response.statusCode).to.be.eq(200);
      expect(response.body.length).to.be.eq(2);
    });
  });

  it("should select Subscriptions", () => {
    cy.intercept(
      { method: "GET", url: "**/subscriptions" },
      {
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
      }
    ).as("getSubscriptions");

    cy.visit("/");
    cy.get("select")
      .select("Subscriptions")
      .should("have.value", "subscriptions");
    cy.wait("@getSubscriptions").then(({ response }) => {
      expect(response.statusCode).to.be.eq(200);
      expect(response.body.length).to.be.eq(3);
    });
  });

  it("should see totals in each card", () => {
    cy.intercept(
      { method: "GET", url: "**/totals" },
      {
        statusCode: 200,
        body: { salesTotal: 100, subscriptionsTotal: 200 },
      }
    ).as("getSubscriptions");
    cy.visit("/");

    cy.get(".card").children().as("cardsChildren");

    cy.get("@cardsChildren").eq(0).should("have.text", "CellFast sales");

    cy.get("@cardsChildren").eq(1).should("have.text", "$ 100");

    cy.get("@cardsChildren").eq(2).should("have.text", "CellNow subscriptions");

    cy.get("@cardsChildren").eq(3).should("have.text", "$ 200");
  });
});
