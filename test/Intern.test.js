const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe("Intern", () => {
    //test to create new Intern object
    describe("Initialization", () => {
        it("should create an object with a name and id and email and school if provided valid arguments", () => {
          const intern = new Intern("Sasan", 1, "sasan@yahoo.com", "sydney uni");
    
          // Verify that the new object has the correct properties
          expect(intern.name).toEqual("Sasan");
          expect(intern.id).toEqual(1);
          expect(intern.email).toEqual("sasan@yahoo.com");
          expect(intern.school).toEqual("sydney uni");
          expect(intern.getSchool()).toEqual("sydney uni");
          expect(intern.getRole()).toEqual("Intern");
        });

    });

});