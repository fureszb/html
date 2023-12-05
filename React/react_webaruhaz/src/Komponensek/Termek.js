import 'bootstrap/dist/css/bootstrap.css';
export default function Termek(props){

    function kattintas(){
      //console.log(props.index)
      //props.kattintas(props.index);
      props.kattintas(props.cim, props.src, props.leiras, props.ar)
    };

    return(
     <div className="card">
        <img className="card-img-top" src={props.src} alt="Card image"/>
        <div className="card-body">
        <h4 className="card-title">{props.cim}</h4>
        <p className="card-text">{props.leiras}</p>
        <h4 className="card-title">{props.ar} Ft</h4>
        <a href="#" className="btn btn-primary" onClick={kattintas}>Kosárba</a>
        </div>
    </div>
    )
}