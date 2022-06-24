import React from 'react'

export const GifItem = ({title,url,id}) => {
  console.log({title,url,id});
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}



/* 
<ol>
{
  images.map(({id,title})=>(
    <li key={id} >{title}</li>

  ))
}
</ol> */