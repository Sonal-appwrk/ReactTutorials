import React, { useState } from "react";
import { CREATE_USER, UPDATE_USER, ALL_USER_INFO, COUNT_USER } from "./Queries";
import { Form, Input, Button } from "antd";

import { useMutation } from "@apollo/client";

function Search() {
  const [editUser, setEditUser] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);
  const [updateUser, { updateError }] = useMutation(UPDATE_USER);
  const Edit = () => {
    updateUser({
      variables: {
        name: editUser,
      },

      refetchQueries: [{ query: ALL_USER_INFO }, { query: COUNT_USER }],
    });
    if (updateError) {
      console.log(updateError);
    } else {
      alert("data updated");
    }
  };

  const AddUser = (values) => {
    createUser({
      variables: {
        name: values.newUser,
      },

      refetchQueries: [{ query: ALL_USER_INFO }, { query: COUNT_USER }],
    });
    if (error) {
      console.log(error);
    } else {
      alert("data added");
    }
  };

  return (
    <div>
      <Form layout="inline" onFinish={AddUser}>
        <Form.Item
          name="newUser"
          rules={[{ required: true, message: "Please enter Username!" }]}
        >
          <Input
            type="text"
            onChange={(e) => {
              setEditUser(e.target.value);
            }}
            placeholder="Add user"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            style={{ backgroundColor: "green", color: "white" }}
            htmlType="submit"
          >
            Create User
          </Button>
          <Button type="primary" htmlType="button" onClick={Edit}>
            Edit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Search;
