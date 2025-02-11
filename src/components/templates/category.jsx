import { Outlet } from "react-router-dom";

export function CategoryTemplate() {
    return <div>
        <aside>Sidebar</aside>
        <Outlet />
    </div>
}