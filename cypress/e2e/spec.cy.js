describe("main page tests", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "./reservation",
    }).visit("http://localhost:3000/");
  });

  it("should have a title", () => {
    cy.get(".app-title").contains("h1", "Turing Cafe Reservations");
  });

  it("should display the first reservation card", () => {
    cy.get(".reservation-container")
      .children()
      .first()
      .should("contain", "Christie")
      .and("contain", "12/29")
      .and("contain", "7:00 pm")
      .and("contain", "Number of Guests: 12");
  });
});

describe("reservation flow tests", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "reservation",
    }).as("getReservations");
    cy.visit("http://localhost:3000/");
    cy.wait("@getReservations");
  });

  it("allows the user to add a new reservation", () => {
    const newReservation = {
      name: "Bobby S",
      date: "05/21",
      time: "8:00",
      number: "3",
    };

    cy.get('input[name="name"]').type(newReservation.name);
    cy.get('input[name="date"]').type(newReservation.date);
    cy.get('input[name="time"]').type(newReservation.time);
    cy.get('input[name="number"]').type(newReservation.number);

    cy.get("button").contains("Make A Reservation").click();

    cy.get(".reservation-container")
      .should("contain", newReservation.name)
      .and("contain", newReservation.date)
      .and("contain", newReservation.time + " pm")
      .and("contain", `Number of Guests: ${newReservation.number}`);
  });
});
