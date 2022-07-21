(function(){
  
    function DataList(){
      const container = document.querySelector('#esgList')
      const loadMoreBtn = document.querySelector('#esgList>p');
      const addItemCount = 9;
      const added = 0; //더보기 버튼을 클릭해서 추가된 항목 수
      const data = window.data;

      loadMoreBtn.addEventListener('click', addItem)

      function addItem(e){
        let newItem = data.slice(addItemCount, addItemCount * 2);
        newItem.forEach(function(element){
          //console.log(idx, element);
          let itemHTML = `
            <li key=${element.id}>
            <figure>
              <div><img src={/image/media/${element.image}} alt="${element.title}" /></div>
              <figcaption>
                <dl>
                    <dt>${element.type}</dt>
                    <dd>${element.title}</dd>
                </dl>
              </figcaption>
            </figure>
          </li>`
        });
      }

      function AddList(){
          let sliceData = data.slice(added, addItemCount);
          return(
            sliceData.map( (item) =>
              <li key={item.id}>
                <figure>
                  <div><img src={`/image/media/${item.image}`} alt="{item.title}" /></div>
                  <figcaption>
                    <dl>
                        <dt>{item.type}</dt>
                        <dd>{item.title}</dd>
                    </dl>
                  </figcaption>
                </figure>
              </li>
            )
          )
      }

      return(
        <ul>
          <AddList></AddList>
        </ul>
      )
    }
    
    const root = document.querySelector('#root')
      ReactDOM.render(
        <DataList />, root
      )
})()