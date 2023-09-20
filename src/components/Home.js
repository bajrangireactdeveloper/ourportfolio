import Slider from './Slider'
import Cards from './Cards';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Contact from './Contact';
 

export default function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>

     {/* our Skill Section Start */}

     <div className="container" id='about'>
        <h3 className="text-center py-3 my-3 text-primary fw-bold">About Us</h3>
        <div className="row">
          <About/>

        </div>
    </div>

    {/* our Skill Section End */}

    <div className="container" id='experince'>
        <h3 className="text-center py-3 my-3 text-primary fw-bold">Our Experience</h3>
        <div className="row">
        <Cards cardTitlename="THML" classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/html.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="CSS"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/css.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Bootstrap"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/bootstrap.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="JavaScript"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/js.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="jQuery"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/jQuery.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Php WordPress"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/wordpress.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="React Js"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/react.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

       
        </div>
    </div>

    {/* our Skill Section Start */}

    <div className="container" id='skills'>
        <h3 className="text-center py-3 my-3 text-primary fw-bold">Our Skills</h3>
        <div className="row">
        <Cards cardTitlename="THML" classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/html.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="CSS"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid" imgpath="/assets/skills/css.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Bootstrap"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/bootstrap.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="JavaScript"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/js.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="jQuery"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/jQuery.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Php WordPress"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/wordpress.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="React Js"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/react.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        <Cards cardTitlename="Figma"  classNameTxt="card-img-top img_techno py-3 m-auto img-fluid"  imgpath="/assets/skills/figma.png" cardTxt="Some quick example text to build on the card title and make up the bulk of the card's content." />

        </div>
    </div>

    {/* our Skill Section End */}


     {/* our Skill Section Start */}

     <div className="container" id='ourproject'>
        <h3 className="text-center py-3 my-3 text-primary fw-bold">Our Project</h3>
        <div className="row">
        
       <Services Project_tile="Wealthmark" Project_desc="We create This Website" Project_url="https://wealthmark.io/"/>
       <Services Project_tile="Awadh Help Foundation" Project_desc="We create This Website" Project_url="https://awadhhelpfoundation.com/"/>

       <Services Project_tile="Chaturby" Project_desc="We create This Website" Project_url="https://www.chaturbuy.com/"/>

        </div>
    </div>

    {/* our Skill Section End */}



     {/* our Skill Section Start */}
     <h3 className="text-center py-3 my-3 text-primary fw-bold">Contact Us</h3>

     <footer>

     <div className="container" id='ourcontact'>
        <div className="row">
          <Contact/>

        </div>
    </div>

     </footer>

    {/* our Skill Section End */}
    
    </>
  )
}
