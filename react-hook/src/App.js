import React from "react";
import InfoParents from "./components/infoParents";
import Info2 from "./components/Info2";
import Count from "./components/Count";
import Count2 from "./components/Count2";
import ContextSample from "./components/ContextSample";
import Average from "./components/Average";
function App() {
  return (
    <div>
      <h2>Info</h2>
      <section>
        <InfoParents />
      </section>
      <h2>Count ( useState)</h2>
      <section>
        <Count />
      </section>
      <h2>Context sample</h2>
      <section>
        <ContextSample />
      </section>
      <h2>Count ( useReducer )</h2>
      <section>
        <Count2 />
      </section>
      <h2>Info ( useReducer )</h2>
      <section>
        <Info2 />
      </section>

      <h2>Average</h2>
      <section>
        <Average />
      </section>
    </div>
  );
}

export default App;
