import { useSelector } from "react-redux"

export default function Number() {
    const num = useSelector((state) => state.number) 
    
    return (
    <div>{num}</div>
  )
}
