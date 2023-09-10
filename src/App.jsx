
import './App.css'
import Counter from './counter'
import Player from './player'
import Users from './users'

function App() {

function handleClick(){
  alert('Click')
}
const handleClick2 =() => {
  alert('Click number 2')
}
const addToFive = (num) => {
  alert(num +2)
}
  return (
    <>
      <h2> React core concepts 2</h2>
      <Player></Player>
      <Counter></Counter>
      <Users></Users>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click Two</button>
      <button onClick={()=>{alert('third click')}}>Click third</button>
      <button onClick={()=> addToFive(5)}>Click third</button>
    </>
  )
}

export default App
