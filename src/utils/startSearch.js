const keyWordSearch = async (value,copyData)=>{
    let data = []
    const wordFliter = /\w+/g
      if(wordFliter.test(value.keyWord)){
       data = copyData.filter(e=>e.subMovieTitle.toLowerCase().match(value.keyWord.toLowerCase()))
    }else{
      data = copyData.filter(e=>e.name.indexOf(value.keyWord,0) !== -1)
     }
   return  data
  }

const genreFliter = (value,copyData)=>{
      let data = []
      if(value === '全部'){
        data = [...copyData]
      }else{
       data = copyData.filter(e=>e.genres.split('、').includes(value))
      }
    return data
}
  export {keyWordSearch,genreFliter}