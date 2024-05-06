import './phasor.css';

export default function Phasor(){
    function fn(e)
    {
        e.target.style.color=e.target.style.color=='white'?'black':'white';
    }
    return(<><h1 className='marquee-container marquee-text'>hii</h1><h2 onClick={fn} id='phasor'>Phasor</h2></>);
}