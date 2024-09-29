export default function EventResponder() {
    function EventHandler() {
        alert("You clicked me!!");
    }
    return (
        <button onClick={EventHandler}>
        Click me
        </button>            
    )
}