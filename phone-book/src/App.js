import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  // 입력된 데이터 console 출력 (이 부분에서 db단으로 데이터 전송)
  handleCreate = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;
