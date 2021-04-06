import React, { useState , useEffect } from "react";
import Home from "./Home";
import { Form, Input, Button } from "antd";
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

export default function Login(props) {
  const [componentRender, setComponentRender] = useState(props.isLogin);
  function onSubmit(values) {
    let checkUser = JSON.parse(localStorage.getItem("SignedUser"));
    var count = 0;
    checkUser.forEach((element) => {
      element.email === values.email && element.password === values.password
        ? (count = 1)
        : (count = 0);
    });
    count === 0 ? alert("Invalid Credentials") : alert("Successfully Logged In");
    props.Logged();
    setComponentRender(true); 
  }
  useEffect(() => {
    setComponentRender(props.isLogin);
  })
  return (
    <div>
    <h1>{componentRender}</h1>
      {!componentRender && (
        <Form {...layout} onFinish={onSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              type="email"
              // In the place of value
              placeholder="Enter your email address"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter Password here" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      )}
      {componentRender && <Home />}

      <br />
    </div>
  );
}
