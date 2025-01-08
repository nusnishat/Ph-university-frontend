import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.route';

const { Header, Footer, Sider } = Layout;

const MainLayout = () => {
   
    return (
    <Layout style={{height: "100vh"}}>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
            console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            }}
        >
            <div className="demo-logo-vertical" >
                <h1 
                style={{color: "white", padding: "8px", fontSize:"1.5rem", display: "flex", justifyContent:"center", alignItems: "center"}}
                >Ph Uni
                </h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
        </Sider>
        <Layout>
            <Header style={{ padding: 0,  }} />
            <Outlet/>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    </Layout>
    );
};

export default MainLayout;