import { Outlet } from "react-router-dom"
import BottomNavigation from "./components/BottomNavigation"

export default function Layout(){
    return (
        <div >
            <div id="layout">
                <Outlet/>
            </div>
            <BottomNavigation/>
        </div>
    )
}