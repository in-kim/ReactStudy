import React, { Component } from "react";
import ViewerTemplate from "./components/ViewerTemplate";
import SpaceNavigator from "./components/SpaceNavigator";
import Viewer from "./components/Viewer";

import * as api from "./lib/api";

class App extends Component {
  getAPOD = async (date) => {
    try {
      const response = await api.getAPOD(date);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.getAPOD();
  }
  render() {
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator />}
        viewer={
          // <Viewer
          //   url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
          //   mediaType="image"
          // />
          <Viewer
            url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
            mediaType="video"
          />
        }
      />
    );
  }
}

export default App;
