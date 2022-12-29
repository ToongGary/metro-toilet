import "./ToongBarStyle.css";
import Search from "./Search";
import { ToongItem } from "./ToongItem";



const ToongBar = () => {
    return (
        <nav className="ToongBar">

            <h1 className="ToongBar-logo"> 급 퉁 </h1>

            <ul className="ToongBar-menu" >
                Search<Search />
                {ToongItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href="/">
                                <i className={item.icon}></i>
                                {item.title}
                            </a>
                        </li>
                    );
                })
                }
            </ul>
        </nav >
    );
};

export default ToongBar;