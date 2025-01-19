import { ReactNode } from "react";

type TUserPath = {
    name: string;
    path? :string;
    element? : ReactNode,
    children? : TUserPath[]
};

type TRoutes = {
    path: string;
    element: ReactNode
};

export const routesGenerator = (item: TUserPath[]) =>{
    const routes = item.reduce((acc: TRoutes[], item)=>{
        if(item.element && item.path){
            acc.push({
                path: item.path,
                element: item.element
            });
        }
        if(item.children){
            item.children.forEach(child =>{
                acc.push({
                    path: child.path!,
                    element: child.element
                });
            })
        };
        return acc;
    }, []);
    return routes;
}