import React from 'react';
import Banner from '../../components/Banner';
import FeaturedProdects from '../../components/FeaturedProdects';
import UserReview from '../../components/UserReview';
import Accordion from '../../components/Accordion';

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='container mx-auto'>
      <div className='my-24'>
        <h1 className='mb-16 text-2xl font-bold text-center'>Featured Products</h1>
      <FeaturedProdects/>
      </div>
      <div className='my-24'>
        <h1 className='mb-16 text-2xl font-bold text-center'>User Review</h1>
      <UserReview/>
      </div>
      <div className='my-24'>
        <h1 className='mb-16 text-2xl font-bold text-center'>Accordion</h1>
      <Accordion/>
      </div>
      </div>
    </div>
  );
};

export default Home;