import React from "react";
import InfoParents from "./components/infoParents";
import Count from "./components/Count";
function App() {
  return (
    <div>
      <h2>Info</h2>
      <section>
        <InfoParents />
      </section>
      <h2>Count</h2>
      <section>
        <Count />
      </section>
    </div>
  );
}

export default App;
