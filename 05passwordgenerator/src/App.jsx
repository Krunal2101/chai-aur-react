import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {

  const [lenght, setlenght] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [Password, setpassword ] = useState("");

  // useRef hook

  const passwordRef = useRef(null)

  const passGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*/?:`";

    for (let i = 1; i <= lenght; i++) {
      
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }
    setpassword(pass);

  } , [lenght, numberAllowed, charAllowed, setpassword]);

  const copypasswordtoclipbored = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passGenerator()
  }, [lenght, numberAllowed, charAllowed, passGenerator])

  return (
    <>
     <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className=' text-white text-center my-3'>Password Generator</h1>
      <div className=' flex shadow rounded-md overflow-hidden mb-4 my-4'>
        <input
          type="text"
          value={Password}
          className=' outline-none w-full py-1 px-3 rounded-lg'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copypasswordtoclipbored} className=' bg-blue-600 text-white outline-1 px-3 py-3 mx-2 rounded-lg shrink-0'>Copy</button>
      </div>
      <div className=' flex text-sm gap-x-2'>
        <div className=' flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={16}
          value={lenght}
          className=' cursor-pointer'  
          onChange={(e)=>{setlenght(e.target.value)}} 
          />
          <label>lenght: {lenght}</label>
        </div>
        <div className=' flex items-center gap-x-1'>
           <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput' 
          onChange={()=>{
            setnumberAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
       <div className=' flex items-center gap-x-1'>
           <input 
          type='checkbox'
          defaultChecked={numberAllowed}
          id='CharactersInput' 
          onChange={()=>{
            setcharAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor='CharactersInput'>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
