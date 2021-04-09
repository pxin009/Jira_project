import { Table } from "antd";
import { User } from "./search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
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
  },{
    title: '负责人',
    render(value,project){
      // console.log('project',project);
      // console.log('value', value);
      // console.log('users',users);
      return <span>
        {users.find((user) => user.id === project.personId)?.name || "未知"}
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
