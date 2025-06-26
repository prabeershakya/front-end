import { useState } from "react";
import Reactlogo from '../assets/react.svg'

const List =() => {
    const [list, setlist] = useState([{id: '1', name:'Horlics', price:'99.9', },
        {id:'2', name:'Bonvita', price:'69.9'}
    ])
    return (
       <div className="flex bg-gray-200 rounded-sm w-fit p-4 justify-center">
      <ul className="space-y-4">
        {list.map((item) => (
          <li 
            key={item.id} 
            className="flex flex-col bg-black m-2 w-40  rounded-2xl shadow-2xl p-4 text-white"
          >
            <img src={Reactlogo} alt="react" width="100" height="100" className="m-4" />
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>Price: {item.price}</span>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default List