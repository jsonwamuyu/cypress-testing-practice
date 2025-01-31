/// <reference types="Cypress"/>

describe("Movie shop", () => {
  beforeEach(() => {
    cy.visit("index.html");
    cy.intercept("Get a movie", "/api/movies", {
      statusCode: 200,
      body: [
        { id: 1, title: "The Lion King." },
        { id: 2, title: "The Flash." },
      ],
    }).as("getMovies");

    cy.intercept("Post a movie");
  });

  it("Get a movie", () => {
    cy.get("@getMovie"); // wait for stubbed movie
    cy.contains("The Lion King");
  });

  it("Should check a header with text content Add Movie", () => {
    cy.get('[data-cy="add-movie-title"]').should("have.text", "Add a movie");
    cy.get('[data-cy="add-movie-paragraph"]').should(
      "have-text",
      "Add your favorite movie."
    );
  });

  it("Should post a movie", () => {
    cy.intercept("http:localhost:3000/users", {
      statusCode: 201,
      body: { id: 3, title: "The Avengers" },
    }).as("addMovie");

    cy.get('[data-cy="movie-name-input"]').type("The Avengers");
    cy.get('[data-cy="add-movie-btn"]').click();

    cy.wait("@addMovie");
    cy.contains("The Avengers");
  });
});
