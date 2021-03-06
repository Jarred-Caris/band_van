import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {
    const {user} = useAuth0();
    return (
        <div className="profile">
            {JSON.stringify(user, null, 2)}
            <h1>My Profile</h1>
        </div>
    )
}

export default Profile
