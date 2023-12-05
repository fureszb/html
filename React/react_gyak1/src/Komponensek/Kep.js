export default function Kep(props){

    function kattintas(){
      //console.log(props.index)
      props.kattintas(props.index);
    };

    return(
        <div className="kep" onClick={kattintas}>
            <img src={props.src}></img>
        </div>
    )
}