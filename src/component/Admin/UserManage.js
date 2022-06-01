import React from 'react'
import { Link } from 'react-router-dom'
import './UserManage.css'


export default function UserManage() {
    return (
        <div>
            <div className='orcontainerss'>
                <h2 style={{color:'black',fontWeight:'bold'}}>User Manage</h2>
                <table>
                    <tbody><tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Transaction</th>
                        <th>Action</th>

                    </tr>
                        <tr>
                            <td>345623</td>
                            <td>Rakibul Islam</td>
                            <td>Rakib222@gmail.com</td>
                            <td>Confirm</td>
                            <td>5000 taka</td>

                            <td>
                            <Link to="/edituserprofile"><td><button className='ordermanagebtn'>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                            
                            
                        </tr>
                        <tr>
                        <td>345678</td>
                            <td>Kamrul Islam</td>
                            <td>kamrul@gmail.com</td>
                            <td>Confirm</td>
                            <td>4000 taka</td>

                            <td>
                            <Link to="/edituserprofile"><td><button className='ordermanagebtn'>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                        <tr>
                        <td>235679</td>
                            <td>Rasel Ahmed</td>
                            <td>raselkk9@gmail.com</td>
                            <td>Confirm</td>
                            <td>5000 taka</td>

                            <td>
                            <Link to="/edituserprofile"><td><button className='ordermanagebtn'>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                        <tr>
                        <td>345623</td>
                            <td>Kamal</td>
                            <td>kamal998@gmail.com</td>
                            <td>Confirm</td>
                            <td>5000 taka</td>

                            <td>
                            <Link to="/edituserprofile"><td><button className='ordermanagebtn'>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>

                        <tr>
                        <td>543678</td>
                            <td>Jahidul Islam</td>
                            <td>jahid23@gmail.com</td>
                            <td>confirm</td>
                            <td>8000</td>

                            <td>
                            <Link to="/edituserprofile"><td><button className='ordermanagebtn'>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                    
                    </tbody></table>
            </div>
        </div>
    )
}
