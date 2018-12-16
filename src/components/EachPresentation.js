import React from 'react'
import './eachPost.css'

export default function EachPresentation(props) {
  return (
    <div>
     { props.post.posts.map((element,index)=>{
          return<div className='each_post' key={index}>
              <p>{element.id}</p>
              <p>{element.presenter_name}</p>
              <p>{element.evaluator_name}</p>
              <p>{element.presentaion_topic}</p>
              <p>{element.presentation_URL}</p>
              <button>Edit</button>
              <button>Delete</button>
            </div>
      })}
    </div>
  )
}
