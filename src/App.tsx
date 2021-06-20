import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Sidebar from "./Components/Sidebar/SidebarMenu";
import Home from "./Pages/Home";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [path, setPath] = useState<string>("/");

  return (
    <>
      <Router>
        <Switch>
          <>
          <Layout>
            <Sider>
              <Sidebar setPath={setPath} />
            </Sider>
            <Content>
              <Route path="/" component={Home} exact />
              <Route path="/html_editor" component={Home} exact />
            </Content>
          </Layout>
          </>
        </Switch>
      </Router>
    </>
  );
};

export default App;
