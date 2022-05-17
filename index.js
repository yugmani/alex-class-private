// Import stylesheets
import './style.css';

// *****************************************************
// **************** Private Class Fields and Accessing Private Class Fields with Methods ******************
// *****************************************************

// Create new Class
class PrivateField {
  // declare private class Fields
  #myPrivateField = 'I am private.';

  // define public methods
  privateMethod() {
    // return the value of #myPrivateField
    return this.#myPrivateField;
  }
}

// create instance of class PrivateField
const myInstance = new PrivateField();

try {
  //try to call privateMethod() on myInstance
  console.log(myInstance.privateMethod()); //I am private.

  // try to access the private field directly
  // myInstance.#myPrivateField
  //Error: Private field '#myPrivateField' must be declared in an enclosing class
} catch (error) {
  //log any error
  console.log(error);
}

// ********************************************
// Updating private class fields with methods
// *********************************************

//create a new calss
class MyPrivate {
  //declare private class field
  #myPrivateAge;

  // define public method to return the private field
  returnMyPrivateAge() {
    //return the value of #myPrivateAge
    return this.#myPrivateAge;
  }

  // define public method to update the private field
  updateMyPrivateAge(age) {
    //update the value of #myPrivateAge
    this.#myPrivateAge = age;
  }
}

//create instance of MyPrivate class
const ageInstance = new MyPrivate();

try {
  // try to call MyPrivate() on myInstance
  ageInstance.updateMyPrivateAge(33);

  // try to access the private field directly
  console.log(ageInstance.returnMyPrivateAge());
  //output: 33
} catch (error) {
  //log any error
  console.log(error);
}
