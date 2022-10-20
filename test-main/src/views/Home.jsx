import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Form, Input } from "antd";
import React, { useRef } from "react";
function Home() {
  const { Content, Sider } = Layout;
  const myRef = useRef(null);

  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    }
  );
  const onFinish = (values) => {
    myRef.current.innerText = values.username;
  };
  const onSelect = (e) => {
    myRef.current = e.item.props.elementRef.current;
  };
  return (
    <Layout>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{
            height: "100vh",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
            onSelect={onSelect}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Form.Item name="username">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  保存
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
