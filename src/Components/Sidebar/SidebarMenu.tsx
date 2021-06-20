import React from 'react'
import { useHistory } from 'react-router'
import { Menu } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons'
import SidebarItem from './SidebarItem'

const { SubMenu } = Menu

const Sidebar: React.FC = () => {
    const history = useHistory()

    const selectMenu = (e: any) => {
        history.push(`/${e.key}`)
    }

    return (
        <>
            <Menu
                onClick={selectMenu}
                style={{ width: 256 }}
                defaultOpenKeys={['menu']}
                mode="inline"
            >
                {SidebarItem.map((data) => (
                    <SubMenu
                        key={data.key}
                        title={data.title}
                        icon={<UnorderedListOutlined />}
                    >
                        {data.detail.map((detail) => (
                            <Menu.Item key={detail.key}>
                                {detail.title}
                            </Menu.Item>
                        ))}
                    </SubMenu>
                ))}
            </Menu>
        </>
    )
}

export default Sidebar
