import './Tours.css';
function Tours(props){
    return (
        <div>
            {
                props.tourData.map(element=>{
                    return (
                        <div className="divStyle">
                            <h2 className="title">{element.name}</h2>
                            <img className="image" src={element.image} alt ="seen" ></img>
                        </div>
                    )
                })

            }
        </div>
    )

    
}




export default Tours;