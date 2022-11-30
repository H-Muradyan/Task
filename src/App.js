import { Provider } from "react-redux";
import Home from "./component/Home";
import { store } from "./redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
