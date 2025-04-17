
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row,notification } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useSignInWithEmailPassword } from "../../react-query";
import styles from './logincard.module.css';

const LoginCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };
  const openNotification = () => {
    notification.open({
      message: '已登入',
      placement: 'bottomRight',
      icon:(<img src="/home.jpg" alt="logo" />)
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
      openNotification();
    }
  }, [isSuccess, redirect]);

  return (
    <Row align="middle" style={{ width: "100%", margin: "auto", marginTop: "6.5rem" }}>

      <img
        className={styles.logImg}
        src="/images/news.png"
        alt="log-img" />
        <div className={styles.layout}>
        <img
        className={styles.logo}
        src="/images/news.png"
        alt="log-img" />
      <Form
        name="normal_login"
        className={styles.loginForm}
        form={form}
        initialValues={{
          isRemember: true,
        }}
        onFinish={onFinish}
      >
        <h2 className={styles.layout}>登入</h2>
        <Form.Item
          className={styles.email}
          name="email"
          rules={[
            {
              type: "email",
              message: "E-mail格式錯誤",
            },
            {
              required: true,
              message: "請輸入E-mail",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="E-Mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "請輸入密碼",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Link className={styles.loginForm__forgot} to={"/"}>
            忘記密碼
          </Link>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
              remember
            </Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          {isLoading ? (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
              loading
            >
              登入
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginForm__button}
            >
              登入
            </Button>
          )}
          <div className={styles.textlayout}>
            還不是會員嗎？&ensp;<Link className={styles.text} to={`/auth/register?redirect=${redirect}`}>點此加入</Link>
          </div>
          {!isError ? (
            <div></div>
          ) : (
            <div className={styles.loginForm__errorWrap}>
              <h3 className={styles.loginForm__errorTitle}>
                <WarningOutlined />
                {"  "}error
              </h3>
              <p className={styles.loginForm__errorMessage}>{error.message}</p>
            </div>
          )}
        </Form.Item>
      </Form>
      </div>
    </Row>
  );
};

export default LoginCard;