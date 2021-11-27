import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from "./pages/container";

function App() {
  return (
    <>
      <Router>
        <AppContainer />
      </Router>
    </>
  );
}

export default App;
