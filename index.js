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

  //let's try to update directly to the class field
  // ageInstance.#myPrivateAge = 22;
  // Error: Private field '#myPrivateAge' must be declared in an enclosing class

  // try to access the private field directly
  console.log(ageInstance.returnMyPrivateAge());
  //output: 33      (logs updated data)
} catch (error) {
  //log any error
  console.log(error);
}

// *************************************************
//Setters and getters and private class fields
// *************************************************

//create new class
class GlassClass {
  //declare private class field
  #myGlassField;

  //define setter method for the private field
  set myPrivateFieldSetter(value) {
    //set the value of myGlassField
    this.#myGlassField = value;
  }

  //define getter method for the private field
  get myPrivateFieldGetter() {
    //return the value of #myGlassField
    return this.#myGlassField;
  }
}

//create instance of GlassClass
const myGlass = new GlassClass();

try {
  //try to change the value of
  // myGlass.#myGlassField = 'Hi';
  // Error: Private field '#myGlassField' must be declared in an enclosing class

  //try to access the private field directly
  // myGlass.#myGlassField;
  // Error: Private field '#myGlassField' must be declared in an enclosing class

  //use setter to update the class field
  myGlass.myPrivateFieldSetter = 'hi';
  //use getter to access the class field
  console.log(myGlass.myPrivateFieldGetter); //hi
} catch (error) {
  console.log(error);
}

// ************************************************
// Private static class fields
// ************************************************

class PrivateStatic {
  //declare private class field as static
  static #myPrivateStaticField;

  //define public method
  static myPublicMethod() {
    //return the value of #myPrivateStaticField
    return this.#myPrivateStaticField;
  }

  static updatePublicMethod() {
    //update the static private class field
    this.#myPrivateStaticField = 'I am Private Static.';
  }
}

try {
  //try to update myPrivateStaticField on PrivateStatic class
  PrivateStatic.updatePublicMethod();

  //try to access the private field directly;
  // PrivateStatic.#myPrivateStaticField;
  // Error: Private field '#myPrivateStaticField' must be declared in an enclosing class

  console.log(PrivateStatic.myPublicMethod());
  // I am Private Static.
} catch (error) {
  console.log(error);
}

// *************************************************
// Private Class Fields and Subclasses
// *************************************************

class ParentClass {
  //declare private class field as static
  static #parentPrivateField;

  //define static method that returns the private field
  static parentMethod() {
    //return the value of #parentPrivateField
    return this.#parentPrivateField;
  }

  static updateParentPrivateField(val) {
    this.#parentPrivateField = 'I am private and parent.';
  }
}

//create new subclass of ParentClass
class ChildClass extends ParentClass {}

try {
  ParentClass.updateParentPrivateField();

  console.log(ParentClass.parentMethod());
  //I am private and parent.

  //try to call ParentClass() on childClass
  console.log(ChildClass.parentMethod());
  //TypeError {}

  //Try to access the private field directly on childClass
  //This doesn't work
  // ChildClass.#parentPrivateField;
  // boot:6
  // Error: Private field '#parentPrivateField' must be declared in an enclosing class
} catch (error) {
  console.log(error);
}

try {
  //call parentMethod on ParentClass
  console.log(ParentClass.parentMethod());
  //I am private and parent.

  //Try to access the private field directly on ParentClass
  //This never work
  // ParentClass.#parentPrivateField;
  // boot:6
  // Error: Private field '#parentPrivateField' must be declared in an enclosing class
} catch (error) {
  console.log(error);
}

// ************************************************
// *************** Private Methods ****************
// ************************************************

class PrivateMethodClass {
  //declare private class field
  #newPrivateField = 'I am new private.';

  //define private method that returns the private field
  #newPrivateMethod() {
    //return the value of #newPrivateField
    return this.#newPrivateField;
  }

  //define public method that returns the private method
  newPublicMethod() {
    return this.#newPrivateMethod();
  }
}

// create new instance of PrivateMethod
const newInstance = new PrivateMethodClass();

try {
  //call newPublicMethod of PrivateMethodClass
  console.log(newInstance.newPublicMethod());
  // I am new private.

  //try to access the private field directly on newInstance
  PrivateMethodClass.#newPrivateMethod();
  // Error: Private field '#newPrivateMethod' must be declared in an enclosing class
} catch (error) {
  console.log(error);
}
