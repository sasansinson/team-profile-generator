const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Manager", () => {
    //test to create new Manager object
    describe("Initialization", () => {
        it("should create an object with a name and id and email and officeNumber if provided valid arguments", () => {
          const manager = new Manager("Sasan", 1, "sasan@yahoo.com", 2);
    
          // Verify that the new object has the correct properties
          expect(manager.name).toEqual("Sasan");
          expect(manager.id).toEqual(1);
          expect(manager.email).toEqual("sasan@yahoo.com");
          expect(manager.officeNumber).toEqual(2);
          expect(manager.getRole()).toEqual("Manager");
        });

    });

});