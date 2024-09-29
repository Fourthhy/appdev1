import './App.css'
import './assets/ConditionalRendering.jsx'
import ConditionalRendering from './assets/ConditionalRendering.jsx'
import './assets/TernaryOperator.jsx';
import TernaryOperator from './assets/TernaryOperator.jsx'
import './assets/ListRendering.jsx'
import ListRendering from './assets/ListRendering.jsx'

function MyButton() {
  return (
    <button>This is a button</button>
  )
}

function AboutPage() {
  return (
    <>
    <div className="AboutPage">
      <h1>About</h1>
      <p>Hello There! <br /> Kumain ka na ba? </p>
    </div> 
    </>
  )
}

const user = {
  name: "Fourth",
  CloseFriend: "Psene"
}

function DisplayData() {
  return (
    <p className="DisplayData">
      Hello, {user.name}!, 
      <br />you're a close friend of {user.CloseFriend}..
    </p>
  )
}

function DisplayPic() {
  return (
    <img src="https://via.placeholder.com/600/92c952" alt="" />
  )
}

// JUST UNCOMMENT THE COMPONENTS IN THE APP TO SEE OTHER FUNCTIONALITIES
export default function App() {
  return (
    <>

      <div className="Container">
        {/* <MyButton /> */}
        {/* <AboutPage /> */}
        {/* <DisplayData /> */}
        {/* <DisplayPic /> */}
        {/* <ConditionalRendering /> */}
        {/* <TernaryOperator /> */}
        <ListRendering />
      </div>
      
    </>
  )
}


