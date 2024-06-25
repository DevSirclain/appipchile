import React from "react";
import { Link } from "react-router-dom";

const links = [
    {
        name: "Gestor de Turnos",
        href: "/turnos"
    },
    {
        name: "Reporte Personal",
        href: "/reportes"
    },
    {
        name: "Gestor de Ticket",
        href: "/ticket"
    },
    {
        name: "Mis Mensajes",
        href: "/mensajes"
    },
];

function SideNav() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index.html" className="brand-link">
                    <span className="brand-text font-weight-light">Sistema Prueba</span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {links.map((x, index) => (
                                <li className="nav-item" key={index}>
                                    <a href={x.href} className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>{x.name}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
}

export default SideNav;
