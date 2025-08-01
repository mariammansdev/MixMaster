import Wrapper from '../assets/wrappers/ErrorPage';
import {Link, useRouteError} from 'react-router-dom';
import img from '../assets/not-found.svg'
const Error = () => {
  const error = useRouteError();
  if(error.status === 404) {
    return (
        <Wrapper>
          <div>
            <img src ={img} alt ="not-found" />
              <h3>We can't find the page you're looking for </h3>
              <Link to ='/'>back home</Link>
          </div>
          
        </Wrapper>
      );
  }
  return <Wrapper>
    <div>
      <h3>something went wrong </h3>
    </div>
  </Wrapper>
  
};
export default Error;
