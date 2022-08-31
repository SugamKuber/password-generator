import "./App.css";
import Password from "./Components/Password";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <img src="https://img.icons8.com/ios-glyphs/60/000000/security-shield-green.png" alt="logo" />
      <h1 style={{ marginTop: "-10px" }}>Password Generator</h1>

      <Password />

      <ToastContainer
        position="bottom-left"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
