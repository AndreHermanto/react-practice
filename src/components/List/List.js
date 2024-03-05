function List({arr}){
    return(
      <>
        <div>Hello World</div>
        {arr.map(e => <li>{e}</li>)}
      </>
    )
  }

export default List;