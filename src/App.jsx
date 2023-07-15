import React from "react"

//JSON [{'sdb':manish, 'bike':{}}]

//hooks (prebuilt function)

//1.setState, 2.useEffect (Basic fundamental hooks of react)


function App() {
   //constant for whole application
  const [title, setTitle] = React.useState("React 3rd day of trainning");
        //value,  //function


  return (

    <div style={{textAlign:'center'}}>{/* parent */}
    {/* children */}
      {/* use state helps us to state a new state */}
      {/* state 1 */}               {/* State 2 */}
      <div>
      <h1>{title}</h1> {/* My favourite training */}
      <button onClick={()=>setTitle('My favourite training')}>Change me</button>
      </div>
    </div>



  )
}

export default App
