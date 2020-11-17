import React from 'react';
import { Link } from 'react-router-dom'

const Dashboard = props => {
    return (<div className="card">
        <div className="card-header">Dashboard</div>
        <div className="card-body">
            <ul>
                <li><Link to="products">Go to Store</Link></li>
                <li><Link to="admin/users">User manager</Link></li>
                <li><Link to="admin/products">Products manager</Link></li>
            </ul>
        </div>
    </div >)
}

export default Dashboard;
