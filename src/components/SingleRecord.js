

function SingleRecord(props){
    return(
        <div className="container">
            <div className="recordList">
            <h4>{props.title}</h4>
            <h4>{props.artist}</h4>
            <h4>{props.year}</h4>
            <h4>{props.price}</h4>
        </div>
       </div>
       )
     
    
}

export default SingleRecord