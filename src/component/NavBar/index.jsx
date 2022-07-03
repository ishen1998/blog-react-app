import React from "react";
import { NavBar, Space, Toast } from "antd-mobile";
import { SearchOutline, MoreOutline, CloseOutline } from "antd-mobile-icons";
import { useHistory } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const history = useHistory();
  const back = () => history.goBack();
  return (
    <>
      <NavBar onBack={back}>文章详情</NavBar>
    </>
  );
};
