import React, { FormEvent } from "react";
import { useAuth } from "../context/auth-context";
// const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = ()=> {
  //此login是请求浏览器service-worker的login方式
  const {login,user} = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(event.currentTarget.elements);
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
      // console.log(username,password);
      
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
}
