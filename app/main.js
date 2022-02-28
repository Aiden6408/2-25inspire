
import { TasksController } from "./Controllers/TasksController.js"
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ClockController } from "./Controllers/ClockController.js";



class App {

  tasksController = new TasksController();

  imageController = new ImageController();
  quoteController = new QuoteController();
  clockController = new ClockController();

}

window["app"] = new App();
