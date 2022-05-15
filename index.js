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
  myInstance.privateMethod();

  // try to access the private field directly
  // myInstance.#myPrivateField
  //Error: Private field '#myPrivateField' must be declared in an enclosing class
} catch (error) {
  //log any error
  console.log(error);
}
