import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nicname, setNicname] = useState("");

  useEffect(() => {
    console.log("렌더링 완료");
    console.log({ name, nicname });
  }, []);

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
