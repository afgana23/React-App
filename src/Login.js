import React from "react";
function Login(props) {


    function loginHandle(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={loginHandle}>
                <input placeholder="name" type="text" /><br></br>
                <input placeholder="name" type="text" /><br></br>
                <button onClick={() => props.data()} type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login
