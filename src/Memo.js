import React,{memo} from 'react'

const Memo = (props) => {
    console.log("Inner Component",props.data)
  return (
    <div>
      <h1> Memo {props.data} </h1>
    </div>
  )
}

export default memo(Memo);// memo ka wapper bna deya
