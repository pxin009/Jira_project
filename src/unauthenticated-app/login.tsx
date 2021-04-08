import React from "react";
import { useAuth } from "../context/auth-context";
import {Button, Form, Input} from 'antd'
// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = ()=> {
  //此login是请求浏览器service-worker的login方式
  const {login} = useAuth()
  const handleSubmit = (values: {username:string,password: string}) => {
    // event.preventDefault();
    // console.log(event.currentTarget.elements);
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;      
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name= {'username'} rules={[{required:true, message:'请输入用户名'}]}>
        {/* <label htmlFor="username">用户名</label> */}
        <Input placeholder={'用户名'} type="text" id={"username"} />
      </Form.Item>
      <Form.Item name= {'password'} rules={[{required:true, message:'请输入密码'}]}>
        {/* <label htmlFor="password">密码</label> */}
        <Input placeholder={'密码'} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
      <Button htmlType={'submit'} type={"primary"}>登录</Button>
      </Form.Item>
    </Form>
  );
}
