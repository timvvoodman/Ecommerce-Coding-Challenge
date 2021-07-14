import React from 'react'

function Filter() {
  return (
    <div className="filter__container">
      <form>
        <div>
          <h2>Price:</h2>
          <div>
            <input type="checkbox"></input>
            <label>$0-$49</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>$50-$99</label>
          </div>
          <div>
            <input type="checkbox"></input>
            <label>$100 or more</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filter
