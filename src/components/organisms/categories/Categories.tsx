import categories from '@data/categories'
import { Link} from 'react-router-dom';
import { slugify } from '@utils/slugify';

const Categories=()=> {
  function createQueryString(queryObject:any) {
    let queryString = Object.keys(queryObject)
      .filter((key) => queryObject[key] && !(Array.isArray(queryObject[key]) && !queryObject[key].length))
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
      }).join('&');
    return queryString ? `?${queryString}` : "";
  };
    
  return (
    <section>
        <h2>Categories</h2>
        <ul className='flex w-full flex-wrap justify-center flex-col'>{categories.map((categorie, key)=>{
           return (
              <li key={key} className='flex items-start flex-col'>
                <h3 className='text-white uppercase'>{categorie.name}</h3>
                <ul className='flex flex-wrap'>
                  {categorie.subcategories.map((subCategorie, key)=>{
                    return <Link key={key} to={":recipes"+createQueryString({categorie:`${slugify(categorie.name)}`,subCategorie:`${slugify(subCategorie)}`})}><li key={key} className='shadow-2xl rounded-md my-10 mr-10 p-10 bg-neutral-700 hover:bg-neutral-600'>{subCategorie}</li></Link>
                  })}
                </ul>
              </li>
           )  
        })}</ul>
    </section>
  )
}

export default Categories