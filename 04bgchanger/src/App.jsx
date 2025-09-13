import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{background:color}}>
    <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={()=> setcolor("red")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}
        >Red</button>
        <button onClick={()=> setcolor("green")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Green"}}
        >Green</button>
        <button onClick={()=> setcolor("blue")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Blue"}}
        >Blue</button>
        <button onClick={()=> setcolor("purple")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Purple"}}
        >Purple</button>
        <button onClick={()=> setcolor("orange")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Orange"}}
        >Orange</button>
        <button onClick={()=> setcolor("gray")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Gray"}}
        >Gray</button>
        <button onClick={()=> setcolor("cyan")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Cyan"}}
        >Cyan</button>
        <button onClick={()=> setcolor("brown")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "Brown"}}
        >Brown</button>
        <button onClick={()=> setcolor("black")} className=" outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "black"}}
        >black</button>
        <button onClick={()=> setcolor("lavender")} className=" outline-none px-3 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "lavender"}}
        >lavender</button>
        <button onClick={()=> setcolor("white")} className=" outline-none px-3 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor: "white"}}
        >white</button>
        
      </div>
    </div>
    </div>
  )
}

export default App
