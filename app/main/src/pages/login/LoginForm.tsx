import * as React from "react";
import { useNavigate } from "umi";
import { UserOutlined, ApiOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Radio,
  Space,
  Typography,
  Divider,
  notification,
} from "antd";
import { Logo } from "./Logo";
import { css } from "@emotion/css";
import { request, systemErrorNotification } from "@/utils";

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
  const [reviewaAreement, setReviewaAreement] = React.useState(false)
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleUserLogin = async (formData: {
    username: string;
    password: string;
  }) => {
    try {
      if (!reviewaAreement) {
        systemErrorNotification(`如果您已经阅读了用户隐私协议，请点击左侧勾选按钮来告诉我们。`)
        return void 0
      }
      const data: { token: string } = await request({
        url: "/auth/login",
        method: "POST",
        data: formData,
      });
      if (data.token) {
        notification.success({
          message: "登录成功",
          description:
            "欢迎使用本系统，即将为您跳转到控制台首页，接下来开始您的DIY之旅吧",
        });
        localStorage.setItem(`token`, data.token)
        navigate("/", { replace: true });
      }
    } catch (error) {
      notification.success({
        message: "系统错误",
        description: "系统正在面临维修，清稍后重试",
      });
      throw error;
    }
  };

  return (
    <div>
      <Logo />
      <Form
        form={form}
        size="large"
        name="normal_login"
        initialValues={{ review: false }}
        className={styles.form}
        onFinish={handleUserLogin}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名称不可为空" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder={"用户名: moyu.developer"}
          />
        </Form.Item>
        <Form.Item>
          <Space direction="horizontal">
            <Form.Item
              noStyle
              name="password"
              rules={[{ required: true, message: "用户密码不能为空" }]}
            >
              <Input.Password
                prefix={<ApiOutlined />}
                placeholder={"密码: hello"}
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
        <Radio value={reviewaAreement} onChange={(v) => setReviewaAreement(v.target.checked)} />
        我已阅读并同意
        <Typography.Link>《用户使用协议》</Typography.Link>
      </Space>
      <Divider plain>其他登录方式</Divider>
    </div>
  );
};
