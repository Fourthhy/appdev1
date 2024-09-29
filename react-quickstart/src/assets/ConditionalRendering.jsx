function UserLogged() {
    return (
        <p>
            User logged in
        </p>
    )
}

function UserNotLogged() {
    return (
        <p> User not logged in</p>
    )
}

//TRY MANIPULATING THIS VARIABLE TO SEE IF BOTH OF THE FUNCTION ABOVE WORKS
let isLoggedIn = true;

export default function ConditionalRendering() {
    let content;

    if (isLoggedIn) {
        content = <UserLogged />
    } else {
        content = <UserNotLogged />
    }
return (
    <>
        {content}
    </>
 );
}
 