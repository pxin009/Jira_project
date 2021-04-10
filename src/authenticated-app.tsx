import styled from "@emotion/styled"
import { Row } from "./components/lib"
import { useAuth } from "./context/auth-context"
import { ProjectListScreen } from "./screens/project-list"
import {ReactComponent as SoftwareLogo} from './assets/software-logo.svg'
import { Dropdown, Menu } from "antd"
import userEvent from "@testing-library/user-event"
export const AuthenticatedApp = () => {
  const {logout,user} = useAuth()
  return <Container>
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width={'18rem'} color={'rgba(38,13,255)'}/>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft >
      <HeaderRight>
        <Dropdown overlay={<Menu>
          <Menu.Item key = {'logout'}>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={logout}>登出</a>
          </Menu.Item>
        </Menu>}>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={e => e.preventDefault()}>Hi,{user?.name}</a>

        </Dropdown>
      </HeaderRight>
    </Header>
    <Main>
      <ProjectListScreen/>
    </Main>
  </Container>
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;  
  height:100vh;
`;
const Header = styled(Row)`
  padding:3.2rem;
  box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index:1;
  /* background-color:gray; */
  /* height:6rem; */
  /* grid-area: header; */
  /* display:flex;
  flex-direction:row;
  align-items:center; */
  /* justify-content:space-between; */
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main`
  /* height:calc(100vh - 6rem); */
  /* grid-area: main */
`
