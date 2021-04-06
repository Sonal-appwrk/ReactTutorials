import React, { useState } from "react";
import { Form, Input, Button } from "antd";
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const allUser = [];

function Signupform() {
  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    contact: "",
  });
  const onSubmit = (values) => {
    debugger;
    setState(
      {
        userName: values.userName,
        email: values.email,
        password: values.password,
        contact: values.contact,
      },
      
    );
    allUser.push(values);
      localStorage.setItem("SignedUser", JSON.stringify(allUser));

      alert("Signup Successfully");
    
  };
 

  return (
    <div>
      <Form
        initialValues={{ ...state }} //for initialize the default value into the form input
        {...layout} //for styling
        onFinish={onSubmit} // it will call the function
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input type="email" placeholder="Enter your email address" />
        </Form.Item>

        <Form.Item
          label="contact"
          rules={[
            { required: true, message: "Please input your contact number!" },
          ]}
        >
          <Input type="number" placeholder="Contact No." />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter Password here" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <br />
    </div>
  );
}

export default Signupform;
