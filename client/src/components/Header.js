import React from 'react';
import { Link } from "react-router-dom";

export default function Header() 
{
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}
