import { useEffect, useState } from 'react'
import './App.css'
import Card from "./Card"
import menu from './data'


const App = () => {
  
  
  const [allItems, setallItems] = useState(menu)
  
  
  const cardElement = allItems.map(item => {
    return <Card key={item.id} item={item} />
  })
  
  const allCategories = ["all", ...new Set(menu.map(item => {
    return item.category
  }))]

  function filterItems (category) {
    const cardElement = menu.filter(items => {
      return items.category === category
    })

    setallItems(cardElement)
  }

 



  const btnsElement = allCategories.map(cat => (<button key={cat} onClick={() => showItems(event)} className="bg-indigo-500 text-white px-4 py-2 rounded-md">{cat}</button>))

  


  function showItems(event) {
    event.target.innerText === "all" ? setallItems(menu) : filterItems(event.target.innerText)
  }



  return (
    <div className="w-full flex flex-col space-y-6 items-center justify-center">
      <h1 className="text-4xl font-semibold">Our Menu</h1>
      <div className="flex items-center gap-4">
        {btnsElement}
      </div>
      <div className="card-component grid grid-cols-3 gap-6">
        {cardElement}
      </div>
    </div>
  )
}

export default App
