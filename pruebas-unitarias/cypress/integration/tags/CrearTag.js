//feature crear tag. Escenarios
describe("Feature: Crear Tag", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("signin"));
    cy.wait(1500);

    cy.get("form").within(() => {
      cy.get("#ember7").type(Cypress.env("user1"));
      cy.get("#ember9").type(Cypress.env("pass1"));
      cy.get("#ember11").click();
    });
    cy.wait(1000);
    cy.visit(Cypress.env('newTag'));
    cy.wait(1000);
  });
  //escenario: Color RGB con valores alfanuméricos
  it("Color RGB con valores alfanuméricos", () => {
    //Se da nombre para que no arroje error por el nombre
    cy.get("#tag-name").type(cy.faker.company.bs() + " {enter}");
    
    //Agrego un color de tipo
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).type(cy.faker.datatype.number({ min: 900000, max: 999999 }));

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Color RGB con codigo hexadecimal de 5 dígitos (Or Negativo)
  it("Color RGB con 5 caracteres", () => {
    //Se da nombre para que no arroje error por el nombre
    cy.get("#tag-name").type(cy.faker.company.bs() + " {enter}");

    //Agrego un color de tipo
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).type(cy.faker.datatype.number({ min: 90000, max: 99999 }));

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]').should('be.visible')
  });
  //escenario: Color RGB con codigo hexadecimal de 7 dígitos (Or positivo)
  it("Color RGB con 7 caracteres solo toma 6 primeros", () => {
    //Se da nombre para que no arroje error por el nombre
    cy.get("#tag-name").type(cy.faker.company.bs() + " {enter}");

    //Agrego un color de tipo
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).type(cy.faker.datatype.number({ min: 9000000, max: 9999999 }));

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Color caracteres especiales (Or negativo)
  it("Color caracteres especiales", () => {
    //Se da nombre para que no arroje error por el nombre
    cy.get("#tag-name").type(cy.faker.company.bs() + " {enter}");

    //Agrego un color de tipo
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).type("?" + cy.faker.datatype.string());

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[1]/span/p[2]"
    ).should("be.visible");
  });

  //escenario: Slug no debe de tener espacios pues es dominio web
  it("Slug sin espacios no debe ocurrir", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(5));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).click();

    cy.get("#tag-slug").should("not.contain", " ");
  });

  //escenario: Descripción con 500 caracteres
  it("Permite guardar con descripción de 500 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).click();
    //Llenamos la descripción
    cy.get("#tag-description").type(cy.faker.datatype.string(500), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });
  
  //escenario: Descripción con 501 caracteres
  it("No Permite guardar con descripción de 501 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[1]/div[2]/div/input"
    ).click();
    //Llenamos la descripción
    cy.get("#tag-description").type(cy.faker.datatype.string(501), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/div/section/div/div[1]/div[3]/p[1]"
    ).should("be.visible");
  });

  //escenario: Meta data del Tag, meta title 299 caracteres
  it("Permite guardar con meta title  de 299 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue meta
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#meta-title").type(cy.faker.datatype.string(299), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Meta data del Tag, meta title 301 caracteres
  it("Permite guardar con meta title de 301 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#meta-title").type(cy.faker.datatype.string(301), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/p[1]"
    ).should("be.visible");
  });

  //escenario: Meta data del Tag, meta description 500 caracteres
  it("Permite guardar con meta-descripción de 500 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));


    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#meta-description").type(cy.faker.datatype.string(500), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Meta data del Tag, meta description 501 caracteres
  it("Permite guardar con meta-descripción de 501 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#meta-description").type(cy.faker.datatype.string(501), {
      parseSpecialCharSequences: false,
    });


    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/p[1]"
    ).should("be.visible");
  });

  //escenario: Canonical URL meta must be a valid URL
  it("Permite guardar con meta-Canonical URL con URL válida", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));


    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#canonical-url").type(cy.faker.internet.url());

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Canonical URL meta con valores alfanuméricos
  it("No Permite guardar con meta-Canonical URL con valores alfanuméricos que no sn URL", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[1]/button"
    ).click();
    //Llenamos la descripción
    cy.get("#canonical-url").type(cy.faker.datatype.string(20));

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/p"
    ).should("be.visible");
  });

  //escenario: Twitter Title maximo 300 caracteres
  it("Titulo de Twitter con 300 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#twitter-title").type(cy.faker.datatype.string(300), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Twitter Title maximo 301 caracteres
  it("Titulo de Twitter con 301 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#twitter-title").type(cy.faker.datatype.string(301), {
      parseSpecialCharSequences: false,
    });
 

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath("/html/body/div[2]/aside/article/div").should("be.visible");
  });

  //escenario: Twitter Title maximo 500 caracteres
  it("Descripción de Twitter con 500 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#twitter-description").type(cy.faker.datatype.string(500), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Twitter Title maximo 501 caracteres
  it("Descripción de Twitter con 501 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button"
    ).click();

    //Llenamos la descripción
    cy.get("#twitter-description").type(cy.faker.datatype.string(501), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath("/html/body/div[2]/aside/article/div").should("be.visible");
  });

  //escenario: Facebook Title maximo 301 caracteres
  it("Titutlo de facebook con 301 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span"
    ).click();

    //Llenamos la descripción
    cy.get("#og-title").type(cy.faker.datatype.string(301), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath("/html/body/div[2]/aside/article/div").should("be.visible");
  });

  //escenario: Facebook Title maximo 300 caracteres
  it("Titutlo de facebook con 300 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span"
    ).click();

    //Llenamos la descripción
    cy.get("#og-title").type(cy.faker.datatype.string(300), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Facebook Description maximo 501 caracteres
  it("Titutlo de facebook con 501 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span"
    ).click();

    //Llenamos la descripción
    cy.get("#og-description").type(cy.faker.datatype.string(501), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.xpath("/html/body/div[2]/aside/article/div").should("be.visible");
  });

  //escenario: Facebook Description maximo 500 caracteres
  it("Titutlo de facebook con 500 caracteres", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[3]/div[1]/button/span"
    ).click();
    //Llenamos la descripción
    cy.get("#og-description").type(cy.faker.datatype.string(500), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });

  //escenario: Code Inyection valores alfanuméricos
  it("Code Inyection valores alfanuméricos", () => {
    //Se da nombre aletorio con spacios
    cy.get("#tag-name").type(cy.faker.random.words(2));

    //click para que cargue Slug
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[1]/button/span"
    ).click();

    //Llenamos la descripción
    cy.xpath(
      "/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[2]/div/div/div/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre"
    ).type(cy.faker.datatype.string(200), {
      parseSpecialCharSequences: false,
    });

    //Guardo
    cy.get(".gh-btn-icon").click();
    cy.wait(1000);
    cy.get(".gh-btn-primary").should("exist");
  });
});
