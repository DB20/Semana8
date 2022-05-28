describe("Test on post  4.43", () => {
  let dir = "";
  beforeEach(() => {
    cy.visit(Cypress.env("signin"));
    cy.wait(1500);
    cy.get("form").within(() => {
      cy.get("#ember7").type(Cypress.env("user1"));
      cy.get("#ember9").type(Cypress.env("pass1"));
      cy.get("#ember11").click();
    });
    cy.wait(1500);
  });
//requisito creación de post para posterior escenariio
  it("Create post", () => {
    let scenario = "/create-post-";
    let index = 0;

    cy.visit("http://localhost:3001/ghost/#/posts");
    cy.wait(1500);
    

    cy.get("li.gh-posts-list-item").then((before) => {

      cy.get(".gh-nav-new-post").click();
      cy.wait(1500);
      cy.get("textarea").type("Test para crear post {enter}");
      cy.wait(1500);
      cy.get(".ember-basic-dropdown-trigger").click();   
      cy.get(".gh-publishmenu-button").click();
      cy.get(".epm-modal-container").get(".gh-btn-black").click();
      cy.get(".gh-editor-back-button").click();

      cy.xpath('//button/span[text()="Leave"]').should('not.exist')


      // cy.get("li.gh-posts-list-item").then((after) => {
      //   expect(after.length).to.equal(before.length + 1);
      // });

      
    });
  });
//Escenario editar post
  it("Editar post", () => {
    cy.visit("http://localhost:3001/ghost/#/posts");
    cy.wait(1500);
    

    cy.get("li.gh-posts-list-item").then((before) => {

      cy.get("li.gh-posts-list-item").first().click();
      cy.wait(1500);
      cy.get("textarea").type("Test para editar un post {enter}");
      cy.wait(1500);
      cy.get(".ember-basic-dropdown-trigger").click();
      cy.get(".gh-publishmenu-button").click();
      cy.wait(1500);
      cy.get("body").type("{esc}");
      cy.get(".gh-editor-back-button").click();
      cy.get("li.gh-posts-list-item").then((after) =>
        expect(after.length).to.equal(before.length)
      );

      
    });
  });
//Escenario regresar evitando guardar un post editado
  it("Regresar evitando guardar un post editado", () => {
    cy.visit("http://localhost:3001/ghost/#/posts");
    cy.wait(1500);
    cy.get("li.gh-posts-list-item").first().click();
    cy.get("textarea").clear();
    cy.go("back"); 

    cy.wait(1500);
    cy.url().should("eq", "http://localhost:3001/ghost/#/posts");
    
  });
});
