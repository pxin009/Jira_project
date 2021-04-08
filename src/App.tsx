import React from "react";
// import logo from './logo.svg';
import {useAuth} from './context/auth-context'
import "./App.css";
// import {LoginScreen} from "./screens/login";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";
// import { ProjectListScreen } from "./screens/project-list";
// import { TsReactTest } from "./try-use-array";

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <TsReactTest /> */}
      {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
