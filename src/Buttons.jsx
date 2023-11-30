import { useDispatch } from "react-redux"

export default function Buttons() {
    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch({type: 'plus'})
    }

    const handliMinus = () => {
        dispatch({type: 'minus'})
    }
    const handleReturn = () => {
        dispatch({type:'nol'})
    }
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <button onClick={handliMinus}>-</button>
      <button onClick={handleReturn}>0</button>
    </div>
  )
}
