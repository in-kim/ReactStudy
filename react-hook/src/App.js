import React from "react";
import InfoParents from "./components/infoParents";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";
import Count from "./components/Count";
import Count2 from "./components/Count2";
import ContextSample from "./components/ContextSample";
import Average from "./components/Average";
import RefSample from "./components/RefSample";
import UsePromise from "./components/UsePromiseSample";
function App() {
  return (
    <div>
      <h2>Info</h2>
      <section>
        <InfoParents />
      </section>

      <hr />

      <h2>Info ( useReducer )</h2>
      <section>
        <Info2 />
      </section>

      <hr />

      <h2>Info (커스텀 Hook)</h2>
      <section>
        <Info3 />
      </section>

      <hr />

      <h2>Count ( useState)</h2>
      <section>
        <Count />
      </section>

      <hr />

      <h2>Context sample</h2>
      <section>
        <ContextSample />
      </section>

      <hr />

      <h2>Count ( useReducer )</h2>
      <section>
        <Count2 />
      </section>

      <hr />

      <h2>Average</h2>
      <section>
        <Average />
      </section>

      <hr />

      <h2>RefSample</h2>
      <section>
        <RefSample />
      </section>

      <hr />

      <h2>Promise hook</h2>
      <section>
        <UsePromise />
      </section>
    </div>
  );
}

export default App;
