import {Outlet} from "react-router-dom";
import {Header,Footer,BottomNavigation} from "../components/shared";
export default function AppShell(){return <div className="layout"><Header/><main><Outlet/></main><Footer/><BottomNavigation/></div>}