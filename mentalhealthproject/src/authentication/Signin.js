import React , { useRef } from 'react'
import { useAuth } from './AuthProvider'
import { Form , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Signin = () => {
    const userRef = useRef()
    const passRef = useRef()
    const { signin } = useAuth()

    async function handlesignin()
    {
        try{
            await signin(userRef.current.value , passRef.current.value)
        }
        catch(e){
            console.log(e)
        }
    }

    return (
        <div>
            <Form>
                <input type="text" ref= { userRef } placeholder="username"/>
                <input type="password" ref= { passRef } placeholder="password"/>
                <Button className="btn btn-success" onClick= { handlesignin }>Login</Button>
            </Form>
            <Link to="/signup">Signup</Link>
        </div>
    )
}

export default Signin
