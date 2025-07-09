import Luffy from './assets/images.jpeg';
function Image(){
    const handleClick=(e)=>{
        e.target.style.display="none";
    }
    return (
        <img onClick={(e)=>handleClick(e)}   src={Luffy} alt="Luffy"></img>
    );
}
export default Image;