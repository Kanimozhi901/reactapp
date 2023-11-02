import React from 'react'
import './Categories.css';
function Categories() {
  return (
    <>
    <div className='b'>
    <a href='https://www.countryliving.com/food-drinks/g29890694/cake-types/'><h1 className='a'>Cakes By Type</h1></a>
<ol>
    <div>

   <h3> <li>Regular cakes</li>
    <li >Photo cakes</li>
    <li >Designer cakes</li>
    <li >Eggless cake</li></h3>
    </div>
    </ol>
    <a href='https://gurgaonbakers.com/cakes/cakes-by-flavour/'><h1 className='a'>Cakes By Flavour</h1></a>
    <ol>
        <div>
        <h3><li>ButterScotch cakes</li>
        <li >Black Forest cakes</li>
        <li >Chocolate cakes</li>
        <li >Strawberry cakes</li>
        <li >Vanilla cakes</li></h3>
        </div>
    </ol>
    <a href='https://www.justdial.com/Salem/Occasions-Cakes-Chocolates-And-More/nct-11995036'><h1 className='a'>Cakes By Occasion</h1></a>
    <ol>
        <div>
        <h3 >
        <li >Birthday cakes</li>
        <li >Anniversay cakes</li>
        <li >Christmas cakes</li></h3></div>
        </ol>
        </div></>
  )
}
export default Categories;