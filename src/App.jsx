// import { Title } from "./components/Title/Title";
import { Header } from "./components/Header/Header";

import { PrimaryBorder } from "./components/PrimaryBorder/PrimaryBorder";
import "./app.css";

function App() {
  return (
    <div>
      {/* {Header({ title: "ეს არის პირველი ჰედერის სათაური" })} */}
      <Header
        title="ეს არის ჩემი პირველი ჰედერის სათაური"
        subtitle="ეს არის საბთაითლი"
        color="red"
      />

      {/* <Title color="red">dsada;sdk;askdl;as</Title> */}

      <PrimaryBorder>
        <div className="box-1"></div>
      </PrimaryBorder>

      <PrimaryBorder>
        <div className="box-2"></div>
      </PrimaryBorder>
    </div>
  );
}

export default App;
