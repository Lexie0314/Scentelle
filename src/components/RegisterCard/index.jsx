import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button,notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useRegisterWithEmailPassword } from "../../react-query";
import styles from "./registercard.module.css"

const RegisterCard = ({ redirect }) => {

  const { mutate, error, isLoading, isError, isSuccess} = useRegisterWithEmailPassword();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  const openNotification = () => {
    notification.open({
      message: '註冊成功',
      placement: 'bottomRight',
      icon:(<img src="/shortcut icon.png" alt="logo" />)
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
      openNotification();
    }
  }, [isSuccess, redirect]); 

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      className={styles.registerForm}
      scrollToFirstError
    >
      <h2 className={styles.titletext}>註冊會員</h2>
      <Form.Item
        name="name"
        label="姓名&ensp;"
        tooltip="提供真實姓名"
        rules={[
          {
            required: true,
            message: "請輸入姓名",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="信箱&ensp;"
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
      >
        <Input />
      </Form.Item>

      <Form.Item
  name="password"
  label="密碼&ensp;"
  rules={[
    {
      required: true,
      message: "請輸入密碼",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || value.length >= 6) {
          
          return Promise.resolve();
        }

        return Promise.reject(new Error("密碼長度至少為6位數"));
      },
    }),
  ]}
  hasFeedback
>
  <Input.Password />
</Form.Item>

      <Form.Item
        name="rePassword"
        label="再次輸入密碼&ensp;"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "請再次輸入密碼",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("兩個密碼不同")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("請閱讀相關條款")),
          },
        ]}
      >
        <Checkbox className={styles.check_text}>
          我已閱讀 <Link className={styles.login_text}to={"/"}>相關條款</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
            loading
          >
            確認註冊
          </Button>
        ) : (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
          >
            確認註冊
          </Button>
        )}
        <div className={styles.text}>
        已經是會員了？&ensp;
        <Link className={styles.login_text} to={`/auth/login?redirect=${redirect}`}>點此登入</Link>
        </div>
        {!isError ? (
          <></>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined  />
              {"  "}發生錯誤
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.message}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;