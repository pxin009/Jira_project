// import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useMount, useDebounce } from "../../utils";
// import * as qs from "qs";
import { useHttp } from "../../utils/http";
// const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 1000);

  const client = useHttp()

  useEffect(() => {
    client('projects',{data:cleanObject(debouncedParam)}).then(list=>setList(list))
    //运用qs库可以将下面代码转换为 fetch(`${apiUrl}/projects?name=${param.name}&personId=${param.personId}`)
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debouncedParam]);
  useMount(() => {
    client('users').then(setUsers)
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  // console.log(list);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
