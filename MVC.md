### Model-View-Controller
Architecture

### Model:

- Represents the data and logic of the application.
- In the pizza example, the chef in the kitchen is the model.
- Manages and fetches data (ingredients) and performs operations (cooking) on it.
- The model is unaware of the user interface.

### View:
- Represents the user interface or what the user interacts with.
- In the pizza example, the customer is the view.
- Displays information (menu options) to the user and captures user input (order).
- Passes user input to the controller.

### Controller:
- Acts as an intermediary between the model and the view.
- In the pizza example, the waiter is the controller.
- Receives and processes user requests (orders) from the view.
- Interacts with the model (chef) to fetch data (ingredients) and perform actions (cooking).
- Sends updates back to the view to display the result (serving the pizza).