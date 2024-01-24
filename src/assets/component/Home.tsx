import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';


const Home = () => {

  const { userName } = useContext(GlobalContext);

  return (
    <div className='container'>
      <h2> Welcome to Home page <span className='text-capitalize text-warning'> {userName}</span></h2>

      <p>
        If you are still facing issues, you may need to simplify your styling and stick to widely supported practices. Unfortunately, due to the limitations of email clients, achieving consistent styling can be challenging. Always refer to the specific documentation or support resources of the email clients you are targeting for the most accurate information on their CSS support.
      </p>
    </div>
  )
}

export default Home
