import './Tours.css';
import tour from './tour/tour';
import {Link} from 'react-router-dom';
function Tours(props){
    return (
        <div>
            {
                props.tourData.map(element=>{
                    return (
                        <Link to={`/city/${element.id}`}>
                            <tour key={element.id} dataWithKey={element}/>
                        </Link>
                    )
                })

            }
        </div>
    )

    
}




export default Tours;