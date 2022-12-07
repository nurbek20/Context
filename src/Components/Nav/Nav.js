import React, {useEffect,useCallback, useContext} from 'react'
import { services } from '../../Services/Services';
import { MyContext } from '../../Context/My-context';


const Nav = () => {
  const {categories, getCategoryState}=useContext(MyContext)
  useEffect(()=>{
    const data=async()=>{
      await services.getCategories()
      .then(res=>{
        getCategoryState(res.data)
        // console.log("categories",res.data);
      })
    }
    data()
  },[])
  console.log("categories",categories);



  return (
    <div className='nav-menu'>
      <h3>Category Products</h3>
      <ol>
        {
          categories.map(elem=>{
            return <li>
              {elem}
            </li>
          })
        }
      </ol>
    </div>
  )
}

export default Nav;
