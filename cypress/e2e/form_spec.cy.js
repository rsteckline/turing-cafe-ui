describe("form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("allows the user to enter values in all fields", () => {
    const testData = {
      name: "John Doe",
      date: "01/01",
      time: "12:00",
      number: "4",
    };

    cy.get('input[name="name"]')
      .type(testData.name)
      .should("have.value", testData.name);

    cy.get('input[name="date"]')
      .type(testData.date)
      .should("have.value", testData.date);

    cy.get('input[name="time"]')
      .type(testData.time)
      .should("have.value", testData.time);

    cy.get('input[name="number"]')
      .type(testData.number)
      .should("have.value", testData.number);
  });
});
