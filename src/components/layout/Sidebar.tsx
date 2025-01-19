import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.route";
import { studentPaths } from "../../routes/student.route";
import { facultyPaths } from "../../routes/faculty.route";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const userRole ={
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
};
const Sidebar = () => {
   const user = useAppSelector(useCurrentUser);
  
   let sidebarItems;

   switch(user?.user?.role){
    case userRole.ADMIN:
        sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
        break;
    case userRole.FACULTY:
        sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
        break;
    case userRole.STUDENT:
        sidebarItems = sidebarItemsGenerator(studentPaths, "student");
        break;
   }

    return (
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{position:'sticky', top: '0', left: '0', height:'100vh'}}
        // onBreakpoint={(broken) => {
        // console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        // console.log(collapsed, type);
        // }}
    >
        <div className="demo-logo-vertical" >
            <h1 
            style={{color: "white", padding: "8px", fontSize:"1.5rem", display: "flex", justifyContent:"center", alignItems: "center"}}
            >Ph Uni
            </h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
    </Sider>
    );
};

export default Sidebar;