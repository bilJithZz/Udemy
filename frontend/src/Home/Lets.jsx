import React, { useEffect } from 'react';
import './Lets.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectAllProducts } from '../Redux/couterSlice';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Lets = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllProducts);
  const status = useSelector((state) => state.api.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [dispatch, status]);

  return (
    <div className="lets">
      <div className="lets-header">
        <div className="lets-right">
          <h1>Let's start learning</h1>
        </div>
        <div className="lets-right">
          <h4>My learning</h4>
        </div>
      </div>
      <Carousel responsive={responsive}>
        {data.map((item) => (
          <Link to={`/course/${item.id}`} key={item.id}>
            <div className="lets-tutorial">
              <div className="lets-tutorial-img">
                <img
                  src={item.image || "https://img.freepik.com/free-photo/cartoon-man-wearing-glasses_23-2151136824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"}
                  alt={item.name}
                />
              </div>
              <div className="tutorial-d">
                <p>{item.description}</p>
                <h5>{item.name}</h5>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Lets;
