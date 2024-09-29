import './App.css'


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

export default function App() {
  return (
    <>

      <div className="Container">
        <MyButton />
        <AboutPage />
      </div>
      
    </>
  )
}


