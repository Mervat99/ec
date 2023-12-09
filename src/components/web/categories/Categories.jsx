import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Categories.css';
import { Navigation, Pagination, Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CategoriesDetails'
export default function Categories() {
  // console.log(process.env.Variable_Name)  for cra
  // console.log(import.meta.env);

  // const [isLoading,setIsloading] =useState(true);
  // const [categories ,setCategories] = useState([]);
  // const getCategories = async()=>{
    // const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
  //   try{
  //     const {data} = await axios.get(`https://ecommerce-node4.vercel.app/categories`);
  //     console.log(data);
  //     setIsloading(false);
  //     setCategories(data.categories);
  //   }catch(error){
  //     console.log(error);
  //     setIsloading(false);
  //   }finally{
  //     setIsloading(false);
  //   }
  // }
  // useEffect(() =>{
  //   getCategories();
  // },[])

  // if(isLoading){
  //  return <h2>loading ...</h2>
  // }
  const getCategories = async()=>{
    // const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    const {data} = await axios.get(`https://ecommerce-node4.vercel.app/categories`);
    return data;
  }
  // const query = useQuery('web_categories',getCategories);
  // console.log(query);
  const {data,isLoading} = useQuery('web_categories',getCategories);
  console.log(data?.categories);

  if(isLoading){
    return <p>Loading ...</p>
  }
  return (
    // <div>Categories for user</div>
    <div className='container'>
       {/* <div className='row'>
       {categories.length? categories.map( (category)=>
          <div className='col-lg-4' key={category._id}>
           <img src={category.image.secure_url} />
           <h2>{category.name}</h2>
          </div>
               
        ):<h2>No category found</h2>
       }
      </div>  */}

      {/* <div className='row'>
      {data?.categories.length ? data?.categories.map((category)=>
            <div className="col-lg-4" key={category._id}>
               <img src={category.image.secure_url} />
              <h2>{category.name}</h2>
            </div>
        ):<h2>no catgory found</h2>}    
      </div>  */}
      <div className="swiper-custom-pagination"></div>
      <Swiper
       modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      loop={true}
      autoplay={{
        delay:1000
      }}
      pagination={{ clickable: true ,
      e1 : '.swiper-custom-pagination'}}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {data?.categories.length ? data?.categories.map((category)=>
      <SwiperSlide  key={category._id}>
    {/* <Link to={`/products/category/${category._id}` }> */}
        <div className="category">
        <img src={category.image.secure_url} className='rounded-circle' />
        <h2 className='fs-5'>{category.name}</h2>
        </div>
        {/* </Link> */}
      </SwiperSlide>
      ):<h2>no catgory found</h2>} 
      
    </Swiper>
    </div>
    )
}
