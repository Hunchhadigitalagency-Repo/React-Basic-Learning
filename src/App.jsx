import React from "react"
import Heading from "./components/heading";
import Layout from "./pages/layout/layout";

function App() {
  //constant for whole application
  const [title, setTitle] = React.useState("React 5th day of trainning");
  const [secondtitle, setSecondTitle] = React.useState("Second Title");

  return (
    <div>
      <Layout/>
    </div>
  );
}

export default App



