const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    //test to create new Engineer object
    describe("Initialization", () => {
        it("should create an object with a name and id and email and github if provided valid arguments", () => {
          const engineer = new Engineer("Sasan", 1, "sasan@yahoo.com", "sasansinson");
    
          // Verify that the new object has the correct properties
          expect(engineer.name).toEqual("Sasan");
          expect(engineer.id).toEqual(1);
          expect(engineer.email).toEqual("sasan@yahoo.com");
          expect(engineer.github).toEqual("sasansinson");
          expect(engineer.getGithub()).toEqual("sasansinson");
          expect(engineer.getRole()).toEqual("Engineer");
        });

    });

});