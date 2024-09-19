/* eslint-disable react/prop-types */
import './SloganComponente.css'

export default function SloganComponente({texto}){
    return(
        <>
        <div className='textoslogan'>
            <p className='slogan'>{texto}</p>
        </div>
        </>
    );

}