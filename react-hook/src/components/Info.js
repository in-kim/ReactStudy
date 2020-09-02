import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nicname, setNicname] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  const OnChangeName = (e) => {
    setName(e.target.value);
  };

  const OnChangeNicname = (e) => {
    setNicname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={OnChangeName} />
        <input value={nicname} onChange={OnChangeNicname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nicname}
        </div>
      </div>
    </div>
  );
};

export default Info;
