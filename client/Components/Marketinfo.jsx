import React from 'react'

const Marketinfo = (props) => {
  return (
      <div id="market">
    <h2>Market Info</h2>
   <button class="btn btn-warning" onClick={props.click}>Toggle Market Info</button>
   <a href="#">Top of page</a>
    </div>
  )
}

export default Marketinfo