import * as React from "react";
import { UserOutlined, ApiOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Space, Typography, Divider } from "antd";
import { Logo } from "./Logo";
import { css } from "@emotion/css";

const styles = {
  form: css({
    marginTop: 45,
  }),
  divider: css({
    marginTop: 12,
    marginBottom: 60,
  }),
};

export const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div>
      <Logo />
      <Form
        size="large"
        name="normal_login"
        initialValues={{ remember: true }}
        className={styles.form}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名称不可为空" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={'用户名: moyu.developer'}
          />
        </Form.Item>
        <Form.Item>
          <Space direction="horizontal">
            <Form.Item
              noStyle
              name="password"
              rules={[
                { required: true, message: "用户密码不能为空" },
              ]}
            >
              <Input.Password
                prefix={<ApiOutlined />}
                placeholder={'密码: hello'}
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            </Form.Item>

            <Button
              style={{ width: 100 }}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
            >
              {passwordVisible ? "隐藏密码" : "显示密码"}
            </Button>
          </Space>
        </Form.Item>
        <Form.Item noStyle>
          <Button htmlType="submit" block type="primary">
            登录账号
          </Button>
        </Form.Item>
      </Form>
      <Space wrap className={styles.divider} size={0}>
        <Radio />
        我已阅读并同意
        <Typography.Link>《用户使用协议》</Typography.Link>
      </Space>
      <Divider plain>其他登录方式</Divider>
    </div>
  );
};
