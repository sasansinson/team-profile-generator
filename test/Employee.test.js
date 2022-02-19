const Employee = require('../lib/Employee');

describe("Employee", () => {
    //test to create new Employee object
    describe("Initialization", () => {
        it("should create an object with a name and id and email if provided valid arguments", () => {
          const employee = new Employee("Sasan", 1, "sasan@yahoo.com");
    
          // Verify that the new object has the correct properties
          expect(employee.name).toEqual("Sasan");
          expect(employee.id).toEqual(1);
          expect(employee.email).toEqual("sasan@yahoo.com");
          expect(employee.getName()).toEqual("Sasan");
          expect(employee.getId()).toEqual(1);
          expect(employee.getEmail()).toEqual("sasan@yahoo.com");
          expect(employee.getRole()).toEqual("Employee");
        });

    });

});