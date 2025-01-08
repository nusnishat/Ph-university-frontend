import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";

export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>
    },
    {
        name: "User Management",
        children: [
           {
            name: "Create Admin",
            path: "create-admin",
            element: <CreateAdmin/>
           },
           {
            name: "Create Student",
            path: "create-student",
            element: <CreateStudent/>
           },
           {
            name: "Create Faculty",
            path: "create-faculty",
            element: <CreateFaculty/>
           },
        ]
    }
];

type TRoutes = {
    path: string;
    element: ReactNode 
}
export const adminRoutes = adminPaths.reduce((acc: TRoutes[], item)=>{
    if(item.element && item.path){
        acc.push({
            path: item.path,
            element: item.element
        });
    }
    if(item.children){
        item.children.forEach(child =>{
            acc.push({
                path: child.path,
                element: child.element
            });
        })
    };
    return acc;
}, []);

type TAdminSidebarItem = {
    key: string,
    label: ReactNode,
    children?: TAdminSidebarItem[]
};

export const adminSidebarItems = adminPaths.reduce((acc: TAdminSidebarItem[], item) => {
    if (item.element && item.path) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
            children: item.children.map(child => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        });
    }
    return acc;
}, []);
