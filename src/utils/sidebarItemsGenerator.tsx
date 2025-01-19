import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItem = {
    key: string,
    label: ReactNode,
    children?: TSidebarItem[]
};

type TUserPath = {
    name: string;
    path? :string;
    element? : ReactNode,
    children? : TUserPath[]
};

export const sidebarItemsGenerator = (sidebarItems: TUserPath[], role: string) =>{
    const SidebarItems = sidebarItems.reduce((acc: TSidebarItem[], item) => {
        if (item.element && item.path) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                }))
            });
        }
        return acc;
    }, []);
    return SidebarItems;
}