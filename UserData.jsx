import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserData() {
    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userData');
        navigate('/');
    };


    return (
        <div className='container my-4 text-bg-success  p-5  '>
            <h2>New User Details</h2>
            <ul>
                <li><b>First Name:</b> {userData.firstName}</li>
                <li><b>Last Name:</b> {userData.lastName}</li>
                <li><b>Mobile Number:</b> {userData.mobileNumber}</li>
                <li><b>Enrolment Date:</b> {userData.enrolmentDate}</li>
                <li><b>Native Place:</b> {userData.nativePlace}</li>
                <li><b>Areas of Interest:</b> {userData.areasOfInterest.join(', ')}</li>
                <li><b>Gender:</b> {userData.gender}</li>
            </ul>
            <button onClick={handleLogout} type="button" class="btn btn-primary">Logout</button>
        </div>
    );
}

export default UserData;