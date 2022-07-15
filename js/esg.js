(function(){
  // function List(){
  //   const data = window.data;
  //   const dataList = data.map( item => {
  //     <li>{item.id}</li>
  //   })
  // }
    
    function App(){
      const data = window.data;
      const dataList = data.map( (item) =>
        <li key={item.id}>{item.type}</li>
      )

      return(
        <ul>
          {dataList}
        </ul>
      )
    }
    
    const root = document.querySelector('#root')
      ReactDOM.render(
        <App />, root
      )
})()