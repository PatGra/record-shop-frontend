import HomeButton from "./HomeButton"
import {useEffect, useState} from 'react'

function AddNewRecords(){
    const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
    
    const [title, setTitle] = useState()
    const [artist, setArtist] = useState()
    const [year, setYear] = useState()
    const [price, setPrice] = useState()
    console.log(BACKEND_URL);

    function handleTitle(event){
        const content= event.target.value;
        setTitle(content)
    }


    function handleArtist(event){
        const content= event.target.value;
        setArtist(content)
    }

    function handleYear(event){
        const content= event.target.value;
        setYear(content)
    }

    function handlePrice(event){
        const content= event.target.value;
        setPrice(content)
    }
    
    function sendRecord() {
        if (title === '' || price === '' || artist === '' || year === '') {
        alert('Please fill in all the fields');
        return;
        }
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        title: title,
        artist: artist,
        year: year,
        price: price,
        }),
        };
        fetch(BACKEND_URL + '/records', requestOptions).then((response) =>
        response.json()
        );
        } 

        function preventDef(event){
            event.preventDefault()
        }

    return (
        <div>
            <h3>PLEASE ADD SOME NEW STUFF</h3>
            <form onSubmit={preventDef}>
                <label>
      
                    TITLE:
                    <input type="text" name="title" onChange={ handleTitle} id='title'/>
                    ARTIST:
                    <input type="text" name="artist" onChange={ handleArtist } id='artist'/>
                    YEAR:
                    <input type="text" name="year" onChange={ handleYear} id='year'/>
                    PRICE:
                    <input type="text" name="price" onChange={ handlePrice } id='price'/>
                 
                </label>
                
            </form>
            <button onClick={sendRecord} type="submit" value="add">add</button>
            <HomeButton />


        </div>
    )
}
export default AddNewRecords