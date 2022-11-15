import { Route, Routes } from "react-router";
import MasterBiller from "./Components/MasterBiller";
import RegisterBiller from "./Components/RegisterBiller";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MasterBiller/>}></Route>
        <Route path="/register" element={<RegisterBiller/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
