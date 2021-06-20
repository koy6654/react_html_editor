import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
import 'antd/dist/antd.css'
import Sidebar from './Components/Sidebar/SidebarMenu'
import SidebarItems from './Components/Sidebar/SidebarItem'

const { Header, Content, Footer, Sider } = Layout

const App: React.FC = () => {
    return (
        <>
            <Router>
                <Switch>
                    <>
                        <Layout>
                            <Content style={{ padding: '30px' }}>
                                <Layout>
                                    <Sider
                                        width={255}
                                        style={{
                                            background: '#fff',
                                            height: '90vh',
                                            marginTop: '42px',
                                        }}
                                    >
                                        <Sidebar />
                                    </Sider>
                                    <Content
                                        style={{
                                            padding: '40px 30px 0px 95px',
                                            height: '100vh',
                                        }}
                                    >
                                        <div
                                            style={{
                                                background: '#fff',
                                                padding: '50px 0px 100px 100px',
                                                height: '90vh',
                                            }}
                                        >
                                            {SidebarItems.map((item) =>
                                                item.detail.map((data) => {
                                                    return (
                                                        <Route
                                                            key={data.key}
                                                            path={data.path}
                                                            component={
                                                                data.component
                                                            }
                                                            exact
                                                        />
                                                    )
                                                })
                                            )}
                                        </div>
                                    </Content>
                                </Layout>
                            </Content>
                        </Layout>
                    </>
                </Switch>
            </Router>
        </>
    )
}

export default App
