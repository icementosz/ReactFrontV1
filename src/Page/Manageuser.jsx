import { useSidebar } from '../Component/sidebarcontext';

function Manageuser() {
    const { isSidebarOpen } = useSidebar();
    const mainClass = `Main${isSidebarOpen ? ' sidebarOpen' : ''}`;
    return (
        <>
             <div className={mainClass}>
                <div className="main-content">
                    <div className="head-title">
                        <div className="left">
                            <h1>Manage User</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li><i className="fa-solid fa-angle-right"></i></li>
                                <li>
                                    <a className="active" href="#">Manage User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Manageuser