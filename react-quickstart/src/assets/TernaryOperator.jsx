function LoginForm() {
    return (
        <p> Login Form </p>
    )
}

function AdminForm() {
    return (
        <p> Admin Form </p>
    )
}

//TRY MANIPULATING THIS VARIABLE TO SEE IF BOTH OF THE FUNCTION ABOVE WORKS
let IfUserAdmin = true;
export default function TernaryOperator() {
    return (
        <>
            {IfUserAdmin ? (<AdminForm />) : (<LoginForm />)}
        </>
    )
}