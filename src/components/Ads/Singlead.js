import React from 'react'
import classes from './Singlead.module.css'

const Singlead =  props => {
    return (
<main onClick={props.clicked} className={classes.grid}>
  <article>
    <div className={classes.box}>
    <img src={"data:image/png;base64,"+btoa(props.image)} alt="Sample photo" />
    </div>
    <div className={classes.text}>
    <h3>Rs {
    new Intl.NumberFormat('en-PK', {
    style: 'decimal',
    currency: 'PKR'
  }).format(props.price)}</h3>
    <p>{props.title}</p>
      {/* <button>Here's why</button> */}
      <div className={classes.productarea}>
        <span>{props.area}</span>
        <span>{props.date}</span>
      </div>
    </div>
  {/* </article>
  <article>
    <img src="/pix/samples/24m.jpg" alt="Sample photo"/>
    <div className={classes.text}>
      <h3>Completely Synergize</h3>
      <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
      <button>Here's how</button>
    </div>
  </article>
  <article>
    <img src="/pix/samples/22l.jpg" alt="Sample photo"/>
    <div className={classes.text}>
      <h3>Dynamically Procrastinate</h3>
      <p>Completely synergize resource taxing relationships via premier niche markets.</p>
      <button>Read more</button>
    </div>
  </article>
  <article>
    <img src="/pix/samples/15l.jpg" alt="Sample photo"/>
    <div className={classes.text}>
      <h3>Best in class</h3>
      <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
      <button>Just do it...</button>
    </div>
  </article>
  <article>
    <img src="/pix/samples/25m.jpg" alt="Sample photo"/>
    <div className={classes.text}>
      <h3>Dynamically innovate supply chains</h3>
      <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
      <button>Here's why</button>
    </div>
  </article>
  <article>
    <img src="/pix/samples/16l.jpg" alt="Sample photo"/>
    <div className={classes.text}>
      <h3>Sanity check</h3>
      <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
      <button>Stop here</button>
    </div> */}
  </article>
</main>
    )
}

export default Singlead