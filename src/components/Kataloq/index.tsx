import React from 'react'
import KataloqTitle from '../KataloqTitle'
import KataloqCategory from '../KataloqCategory'
import {Link} from "react-router-dom"
import PurpleButton from '../PurpleButton'
const Kataloq = () => {
  return (<>
    <KataloqTitle title={"Dadlı Kataloq"}/>
    <KataloqCategory/>
    <div style={{display:"flex", alignItems:'center',justifyContent:"center"}}><Link to={"/kataloq"}><PurpleButton title="Daha çox şirniyyat" /></Link></div>
    </>
  )
}

export default Kataloq