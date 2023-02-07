import React from 'react'

type Props = {}

const JoinForm = (props: Props) => {
    return (
    <>
        <div>
            <p>Name:</p>
            <input type="text" className="name-input" />
        </div>
        <div>
            <p>Email:</p>
            <input type="text" className="email-input" />
        </div>
        <div>
            <p>Password:</p>
            <input type="text" className="password-input" />
        </div>
    </>
    )
}

export default JoinForm