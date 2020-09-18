import React, { useState } from "react";
import "./TableTemplate.css";
const TableTemplate = () => {
  const [userInfoState, setUserInfoState] = useState({
    userInfo: [
      { index: 0, id: "kdi05", name: "김동인", phone: "010-4485-8792" },
      { index: 1, id: "kdi15", name: "김동삼", phone: "010-4881-8987" },
      { index: 2, id: "kdi68", name: "김동사", phone: "010-9871-0489" },
    ],
  });
  return (
    <div className="tb-style-01">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>연락처</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userInfoState.userInfo[0].index}</td>
            <td>{userInfoState.userInfo[0].id}</td>
            <td>{userInfoState.userInfo[0].name}</td>
            <td>{userInfoState.userInfo[0].phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTemplate;
