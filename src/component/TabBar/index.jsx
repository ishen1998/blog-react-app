import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import { AppOutline, TagOutline, UserOutline } from "antd-mobile-icons";
import { withRouter } from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter((props) => {
  const history = props.history || {};
  const tabs = [
    {
      key: "/home",
      title: "首页",
      state: { showTabBar: true, showNavBar: false },
      icon: <AppOutline />
    },
    {
      key: "/category",
      title: "分类",
      state: { showTabBar: true, showNavBar: false },
      icon: <TagOutline />
    },
    {
      key: "/about",
      title: "关于我",
      state: { showTabBar: true, showNavBar: false },
      icon: <UserOutline />
    }
  ];

  const [activeKey, setActiveKey] = useState(history.location.pathname);
  const toPage = (path) => {
    setActiveKey(path);
    history.push(path, tabs.filter((el) => el.key === path)[0].state);
  };
  return (
    <>
      <TabBar
        safeArea
        activeKey={activeKey}
        onChange={toPage}
        className={props.className}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
});
