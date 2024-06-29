import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { UserServices } from '../user-services/UserServices'; // Adjust the import path as needed
import UserList from '../user-list/UserList';
 
const { Header, Content, Footer, Sider } = Layout;
 
const items = [
  { key: '1', icon: UserOutlined, label: 'User' },
  { key: '2', icon: VideoCameraOutlined, label: 'Services' },
  { key: '3', icon: UploadOutlined, label: 'Collection' },
];
 
const services = [
  { title: 'Service 1', description: 'Description of Service 1' },
  { title: 'Service 2', description: 'Description of Service 2' },
  { title: 'Service 3', description: 'Description of Service 3' },
];
 
const NavBar: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1');
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
 
  const handleMenuClick = (e: { key: string }) => {
    setSelectedKey(e.key);
  };
 
  return (
    <Layout>
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={React.createElement(item.icon)}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedKey === '1' && <UserList />}
            {selectedKey === '2' && <UserServices services={services} />}
            {/* Add conditional rendering for other components if needed */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
 
export default NavBar;