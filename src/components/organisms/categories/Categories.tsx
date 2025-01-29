import categories from '@data/categories'
import { NavLink } from 'react-router-dom';

const Categories=()=> {

    
  return (
    <section>
        <div>Categories</div>
        <ul>{categories.map((element, key)=>{
           return <li key={key}>
                <NavLink to={`:${element.name}`}>
                    <h3>{element.name}</h3>
                    <p>{element.description}</p>
                </NavLink>
            </li>
        })}</ul>
    </section>
  )
}

export default Categories