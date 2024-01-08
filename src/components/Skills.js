import meter1 from "../assets/img/webd.gif";
import meter2 from "../assets/img/C++.gif";
import meter3 from "../assets/img/react.gif";
import meter4 from "../assets/img/db.gif";
import meter5 from "../assets/img/cloud.gif";
import meter6 from "../assets/img/pm.gif";
import meter7 from "../assets/img/bd.gif";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 1000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I can enhance and uplift the organization from my skills, efficiency to learn and mindset to grow</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item " >
                            <img src={meter1} alt="Image" style={{ borderRadius: '50%' }} />
                                <h5>Web Development</h5>
                                <a href="https://www.credly.com/badges/3bc81366-3cb7-4273-b1d5-b0ef378b37d5/public_url" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"  style={{ borderRadius: '50%' }}/>
                                <h5>C++</h5>
                                <a href="https://drive.google.com/file/d/1DMbD8uNiqdITVdF_VJs7L0_EagGHrWok/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>

                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"  style={{ borderRadius: '50%' }}/>
                                <h5>React.js</h5>
                                <a href="https://drive.google.com/file/d/1HCBEddIJidaABaQ-ShhHN1v-EPXIiwB0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" style={{ borderRadius: '30%' }}/>
                                <h5>DataBase</h5>
                                <a href="https://www.credly.com/badges/9264499f-938c-4cfb-9a04-6f28c729cd00/public_url" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                                </div>

                                <div className="item">
                                <img src={meter5} alt="Image" style={{ borderRadius: '50%' }} />
                                <h5>Cloud Computing</h5>
                                <a href="https://www.credly.com/badges/0c98a9ac-e879-40e9-93c5-3f5e0fb47fc9/public_url" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                                </div>

                                <div className="item">
                                <img src={meter7} alt="Image"  style={{ borderRadius: '50%' }}/>
                                <h5>Big data Computing</h5>
                                <a href="https://drive.google.com/file/d/1e_w94ySARBEPAikmugHSYOgArL-bCPzr/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                                </div>

                                <div className="item">
                                <img src={meter6} alt="Image" style={{ borderRadius: '50%' }} />
                                <h5>Project Manager</h5>
                                <a href="https://www.credly.com/badges/726f0992-ba48-4397-95b2-1911f29f8194/public_url" target="_blank" rel="noopener noreferrer">
        SEE HERE
      </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
