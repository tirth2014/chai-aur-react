import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const { userid } = useParams()
    return (
        <div>
            <p className='bg-gray-300 text-black p-3 text-center'>parameter param passed in route "/user/param" will show below</p>
            <div className='bg-gray-300 text-black p-3 text-center text-2xl'>User: {userid}</div>
        </div>
    )
}

export default User