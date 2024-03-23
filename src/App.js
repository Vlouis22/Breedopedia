import './App.css';
import { CatCard } from './components/CatCard';
import { Banlist } from './components/Banlist';
import { useEffect, useState } from 'react';
const CAT = process.env.REACT_APP_API_KEY

function App() {

  const [cat, setCat] = useState({})
  const [fetchError, setFetchError] = useState(false);
  const [newCat, setNewCat] = useState(false)
  const [banlist, setBanList] = useState([])


  //const url = `https://api.thecatapi.com/v1/images/search?&has_breeds=true&order=RANDOM&page=0&limit=5&api_key=${CAT}`
  const temp_url = `https://api.thecatapi.com/v1/breeds?&order=RANDOM&`



  useEffect(() => {
    const getNewCat = async () => {

      let index = Math.floor(Math.random() * 67)

      try {
        const response = await fetch(temp_url)
        if (!response.ok) throw new Error('try again');
        const newCat = await response.json()
        setFetchError(null)
        setData(newCat[index])
      }
      catch (error) {
        setFetchError(error.message);
      }
    }

    getNewCat();
  }, [newCat])

  function setData(data) {
      if(data){
        let weight = (data.weight.imperial)
        let name = (data.name)
        let img = `https://cdn2.thecatapi.com/images/${data.reference_image_id}.jpg`
        let origin = data.origin
        let life_span = data.life_span
        let description = data.description
        if (checkForBan(weight, origin, life_span)){
          getNewCat()
        }
        else{
          setCat({weight: weight, name: name, img: img, origin: origin, life_span:life_span, description:description})
        }
    }
  }

  function checkForBan(weight, origin, life_span){
    console.log("started checking for ban")
    weight = `${weight} lbs`
    life_span = `${life_span} years`

    for(let ban of banlist){
      console.log(ban)
      if(ban === weight || ban === life_span || ban === origin){
        console.log(weight, life_span, origin)
        return true;
      }
    }
    return false;

  }

  function getNewCat(){
    setNewCat(!newCat);
  }

  function addToBanlist(event){
    let newban = event.target.innerHTML
    if(!banlist.includes(newban)){
    setBanList([...banlist, newban])
  }
}

  return (
    <div className="App">
      <CatCard name={cat.name} weight={cat.weight} origin={cat.origin} image={cat.img} getNewCat={getNewCat} life_span={cat.life_span} description={cat.description} addtoBan={addToBanlist}/>
      <Banlist banlist={banlist}/>
    </div>
  );
}

export default App;
