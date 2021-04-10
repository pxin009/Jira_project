import { Table } from "antd";
import { User } from "./search-panel";
import dayjs from 'dayjs'
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created:number;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return <Table rowKey={'id'} pagination={false} dataSource={list} columns={[{
    title: '项目名称',
    dataIndex: 'name',
    sorter: (a,b)=>{return a.name.localeCompare(b.name)}
  },
  {
    title: '部门',
    dataIndex: 'organization',
  },
  {
    title: '负责人',
    render(value,project){
      // console.log('project',project);
      // console.log('value', value);
      // console.log('users',users);
      return <span>
        {users.find((user) => user.id === project.personId)?.name || "未知"}
      </span>
    }
  },
  {title: '创建时间',
  render(value,project){
    return <span>
      {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
    </span>
  }
}
]}/>
  
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>项目名称</th>
  //         <th>负责人</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list.map((project) =>{ 
  //         console.log(project);
          
  //         return(
  //         <tr key={project.id}>
  //           <td>{project.name}</td>
  //           <td>
  //             {users.find((user) => user.id === project.personId)?.name ||
  //               "未知"}
  //           </td>
  //         </tr>
  //       )})}
  //     </tbody>
  //   </table>
  // );
};
