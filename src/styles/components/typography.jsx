import React from 'react'

function BaseTitle({childreen, classname, tag}) {
  return (
    <div>
        {tag === "h1" && <h1 className={classname}>{childreen}</h1>}
        {tag === "h2" && <h2 className={classname}>{childreen}</h2>}
        {tag === "h3" && <h3 className={classname}>{childreen}</h3>}
        {tag === "h4" && <h4 className={classname}>{childreen}</h4>}
        {tag === "h5" && <h5 className={classname}>{childreen}</h5>}
        {tag === "h6" && <h6 className={classname}>{childreen}</h6>}
    </div>
  )
}

export default BaseTitle