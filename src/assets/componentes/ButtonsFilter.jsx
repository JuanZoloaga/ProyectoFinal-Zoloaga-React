import {Link} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function ButtonsFilter ({categoria, handleClick}) {

    return (
        <>
            {<button onClick={() => handleClick(categoria)}><Link to={`../category/${categoria}`}>{categoria}</Link></button>}
        </>
    )
}
