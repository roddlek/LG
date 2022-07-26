(function(){
  function DataList(){
    //기본설정
    let addItemCount = 9;
    const data = window.data;
    
    function FilterBtn(){
      return (
        <section className="filterBtn">
          <h4 className="hidden">필터 버튼</h4>
          <ul>
              <li className="clicked" data-value="all">ALL</li>
              <li data-value="video">동영상</li>
              <li data-value="news">보도자료</li>
          </ul>
        </section>
      )
    }
  
    function EsgList(){
      //기본 리스트 9개 보이기
      function newList(item){
        return item.id < addItemCount;
      }
      const num = data.filter(newList);
  
      return (
        <ul>
          {num.map( (data) =>
            <li key={data.id} name={data.datatype}>
              <figure>
                  <div><img src={`/image/media/${data.image}`} alt="{data.title}" /></div>
                  <figcaption>
                      <dl>
                          <dt>{data.type}</dt>
                          <dd><a>{data.title}</a></dd>
                      </dl>
                  </figcaption>
              </figure>
            </li>
          )}
        </ul>
      )
    }

    
  return (
    <>
      <header>
        <h3>
            <span>ESG소식</span>
            <span>지속 가능한 발전을 위해 노력합니다</span>
        </h3>
      </header>
      <FilterBtn />
      <section id="esgList">
        <h4 className="hidden">ESG소식 자료들</h4>
        <EsgList />
        <p>더보기</p>
      </section>
    </>
  )
}

  const esg = document.querySelector('#esg')
  ReactDOM.render(
    <DataList />, esg
  )
})()