import {Outlet} from "react-router-dom";
import {Header,Footer,BottomActionBar} from "../components/shared";
export default function StandaloneLayout(){return <div className="layout"><Header/><main><Outlet/></main><Footer/><BottomActionBar/></div>}