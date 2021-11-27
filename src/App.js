import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from "./pages/container";
import { Provider } from "react-redux"
import configStore from './redux/confStore';

const store = configStore();

function App() {
  return (
    <>
      <Router>
        <Provider store={store} >
          <AppContainer />
        </Provider>
      </Router>
    </>
  );
}

export default App;
