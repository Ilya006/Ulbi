import { useEffect } from 'react';
import { axios } from '~/shared/lib/axios';

const MainPage = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('/')
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }

    fetch()
  }, [])


  return <div>MainPage</div>;
};

export default MainPage;
