import React from "react";
import { useHistory } from "react-router";
import { Menu } from "antd";
import { MailOutlined } from "@ant-design/icons";
import SidebarItem from "./SidebarItem";

const { SubMenu } = Menu;

interface IProps {
  setPath: (value: string) => void;
}

const Sidebar: React.FC<IProps> = ({
  setPath,
}) => {
  const history = useHistory();

  const selectMenu = (e: any) => {
    history.push(`/${e.key}`);
  };

  return (
    <>
      <Menu
        onClick={selectMenu}
        style={{ width: 256 }}
        defaultOpenKeys={["menu"]}
        defaultSelectedKeys={["html_editor"]}
        mode="inline"
      >
        {SidebarItem.map((data) => (
          <SubMenu key={data.key} title={data.title} icon={<MailOutlined />}>
            {data.detail.map((detail) => (
                <Menu.Item key={detail.key}>{detail.title}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </>
  );
};

export default Sidebar;
