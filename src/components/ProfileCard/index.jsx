import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button,Row,notification } from "antd";
import styles from "./profilecard.module.css"
import { useUpdateProfile, useLogout, useUserInfo } from "../../react-query";

const ProfileCard = ({ redirect }) => {
  const { data: userInfo } = useUserInfo() || {};
  const update = useUpdateProfile();
  const logout = useLogout();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onUpdate = async (values) => {
    console.log("Received update info: ", values);
    update.mutate({ ...values, uid: userInfo.uid });
  };

  const openNotification = () => {
    notification.open({
      message: '已登出',
      placement: 'bottomRight',
      icon:(<img src="/shortcut icon.png" alt="logo" />)
    });
  };

  const onLogout = () => {
    logout.mutate();
    openNotification();
    navigate("/");
  }

  useEffect(() => {
    form.setFieldsValue(userInfo)
  }, [userInfo])

  return (
    <Form
      onFinish={onUpdate}
      name="normal_login"
      className={styles.profileForm}
      form={form}
      initialValues={userInfo}
    >
      <h2 className={styles.title}>姓名{userInfo.name}</h2>
      <Form.Item
        label="姓名: "
        name="name"
        rules={[
          {
            type: "string",
            message: "並非有效的姓名!",
          },
          {
            message: "請輸入你的姓名!",
          },
        ]}
      >
        <Input placeholder={userInfo.name} />
      </Form.Item>
      <Form.Item
        label="地址: "
        name="adrs"
        rules={[
          {
            type: "string",
            message: "並非有效的電話號碼!",
          },
          {
            message: "請輸入你的電話號碼!",
          },
        ]}
      >
        <Input placeholder={userInfo?.adrs || ""} />
      </Form.Item>
      <Form.Item
        label="電話: "
        name="tel"
        rules={[
          {
            type: "string",
            message: "並非有效的電話號碼!",
          },
          {
            message: "請輸入你的電話號碼!",
          },
        ]}
      >
        <Input placeholder={userInfo?.tel || 'xxxx-xxxxxx'} />
      </Form.Item>

      <Form.Item>
        <Row style={{ width: "100%"}}justify="space-between">
        <Button
          type="primary"
          htmlType="submit"
          className={styles.profileForm__button}
        >
          編輯
        </Button>

        <Button
          type="primary"
          danger
          // style={{ marginTop: "1rem" }}
          className={styles.profileForm__button}
          onClick={onLogout}
        >
          登出
        </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};
export default ProfileCard;