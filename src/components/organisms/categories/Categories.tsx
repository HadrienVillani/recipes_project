import categories from '@data/categories'
import { slugify } from '@utils/slugify';
import { Categorie } from '@molecules/categorie';

const Categories=()=> {
  function createQueryString(queryObject:any) {
    let queryString = Object.keys(queryObject)
      .filter((key) => queryObject[key] && !(Array.isArray(queryObject[key]) && !queryObject[key].length))
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
      }).join('&');
    return queryString ? `?${queryString}` : "";
  };
//   export const fetching = async ({ qs }: { qs: [string, { search?: string, page?: number, limit?: number, name?: string }] }) => {
//     const [, params] = qs;
//     const encoded = new URLSearchParams(params as  Record<string, string>);

//     return encoded.toString();
// }

//  Regarder as 
// new Map()
//  as Record <string, string>
  // new Set()
// /////////////


// fetching({ qs: ["", { search: "test", page: 1, limit: 10, name: "test" }] })


  return (
    <section>
        <h2>Categories</h2>
        <ul className='flex w-full flex-wrap justify-center flex-col'>{categories.map((categorie, key)=>{
           return (
              <li key={key} className='flex items-start flex-col'>
                <h3 className='text-white uppercase'>{categorie.name}</h3>
                <ul className='flex flex-wrap mb-10'>
                  {categorie.subcategories.map((subCategorie, key)=>{
                    return <Categorie title={subCategorie} key={key} path={":recipes"+createQueryString({categorie:`${slugify(categorie.name)}`,subCategorie:`${slugify(subCategorie)}`})}/>
                  })}
                </ul>
                
                {/* <Link key={key} to={":recipes"+createQueryString({categorie:`${slugify(categorie.name)}`,subCategorie:`${slugify(subCategorie)}`})}><li key={key} className='duration-500 border-2 border-amber-600 shadow-2xl rounded-md my-5 mr-10 p-10 bg-amber-600 font-bold uppercase hover:bg-transparent'>{subCategorie}</li></Link> */}
              </li>
           )  
        })}</ul>
    </section>
  )
}

export default Categories