import React from "react";

import { 
  Para 
} from '../../views/App.style';

import { 
  Container 
} from '../../views/grid';


import {
    HeroImage,
    // RevealP,
  } from './Home.style';

// import WhenInView from '../../components/WhenInView/WhenInView';

import Fade from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Zoom';
import Zoom from 'react-reveal/Zoom';



const Home = () => {

return (
    <Container>

        <HeroImage>
          <div>
          <Bounce top>
          <h1>Corey Winter</h1>
          </Bounce>
          </div>
          <Fade >
          <h2>Front-end Developer</h2>
          </Fade>
        </HeroImage>

      {/* <Image src={require('../../assets/hero.gif')} alt="hero-image"/> */}

      {/* <WhenInView>
        {({ isInView }) => 
          <RevealP hide={!isInView} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
          </RevealP>    
        }
      </WhenInView> */}


      <Zoom>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
        </Para>
      </Zoom>
      <Bounce>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
        </Para>
      </Bounce>
    </Container>

  );
};

export default Home;