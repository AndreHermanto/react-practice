import SharedComponent from "../../helpers/SharedComponent/SharedComponent";

function Book({showList, title, address}) {
    console.log(address);
    return (
        <>
            <div>This is a book</div>
            <h1>{title}</h1>
            {showList ? <ul>
                <li>Harry Potter</li>
                <li>LOTR</li>
                <li>Hunger Games</li>
            </ul> : <></>}

            <ul>
                <li>{address.street}</li>
                <li>{address.unitNo}</li>
                <li>{address.streetNo}</li>
            </ul>
        </>
        
    );
  }

function HelloWorld(){
    return <div>Hello World!!!</div>
}

function IfComponent(){
    let x = true;
    if(x){
        return (<div>Its True</div>)
    }else{
        return <div>Its False</div>
    }
        
}

export {Book,HelloWorld,IfComponent}

