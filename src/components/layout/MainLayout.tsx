import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
    const items: MenuProps["items"] = [
        {
            key: 1,
            label: "Dashboard",
        },
        {
            key: 2,
            label: "User Management",
            children: [
                {
                    key: 21,
                    label: "Create User",
                },
                {
                    key: 22,
                    label: "Update User",
                },
            ]
        },
    ]
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Layout>
            <Header style={{ padding: 0,  }} />
            <Content style={{ margin: '24px 16px 0' }}>
            <div
                style={{
                padding: 24,
                minHeight: 360,
                }}
            >
                content
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    </Layout>
    );
};

export default MainLayout;