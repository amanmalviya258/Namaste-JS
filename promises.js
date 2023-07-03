//Dependency Injection 
class Car {
    constructor(engine) {
      this.engine = engine;
    }
  
    start() {
      this.engine.start();
      console.log("Car started.");
    }
  }
  
  class Engine {
    start() {
      console.log("Engine started.");
    }
  }
  
  const engine = new Engine();
  const car = new Car(engine);
  car.start();

//  In the above example, the Engine object is created separately, and then it's passed to the Car class when creating an instance of Car. This way, the Car class is not tightly coupled with the creation of the Engine, and it can accept different types of engines. Dependency injection promotes loose coupling between classes, improves code maintainability, and makes it easier to test and reuse components.


