import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  const menuStyle = {
    backgroundColor: "#245953", // Set your desired background color
    color: "white", // Set the font color to white

  };
  return (
    <Menu mode={mode} style={menuStyle}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username"> John Doe </span>
          </>
        }
      >
        <Menu.Item key="project">
          <CodeOutlined /> Projects
        </Menu.Item>
        <Menu.Item key="about-us">
          <UserOutlined /> Profile
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
