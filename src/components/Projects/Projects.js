import React from 'react';

import { Container, Relative, Absolute, Flex } from '../../views/grid';
import { Para } from '../../views/App.style';
import { A } from '../../views/types';
  
import { Image, ImageButton, Index } from '../Projects/Projects.style';

 import Fade from 'react-reveal/Zoom';
 import Bounce from 'react-reveal/Zoom';
 import Zoom from 'react-reveal/Zoom';
  

const Projects = () => {
        return (
            <Container>
              <Absolute>
                <Relative >
                  <Index>
                    <h1> 0001 </h1>
                  </Index>
                </Relative>
              </Absolute>

                <div>
                  <Bounce>
                  <h1>Projects</h1>
                  </Bounce>
                </div>
                <Fade >
                  <h2> <A href=""> Developers </A> </h2>
                </Fade>             

              <Flex justify={'center'} marginBottom='123px'>
                
                <ImageButton>
                  <Image src={require('../../assets/hero.gif')} alt="hero-image" />
                </ImageButton>
                <ImageButton>
                  <Image src={require('../../assets/hero.gif')} alt="hero-image" />
                </ImageButton>
                
              </Flex>

              <Zoom>
                <Para >
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
    }


export default Projects;