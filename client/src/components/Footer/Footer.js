import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "rgb(0,0,0,0.9)" }}
      className="font-small pt-4 "
    >
      <MDBContainer fluid>
        <MDBRow style={{ marginLeft: "70px" }}>
          <MDBCol className="col-7 ml-2">
            <img
              src="https://gomycodewebsite.blob.core.windows.net/website/img/white_Logo_4f6fdd21a0_b5e4f70e94.svg"
              style={{ width: "200px", marginBottom: "20px" }}
              alt=""
            />
            <p>
              GoMyCode Hackerspace,
              <br /> Immeuble NEO, 2ème étage,
              <br /> Rue du lac lochness, Les Berges du Lac1
              <br /> +216 31 314 570
              <br /> hello@gomycode.com
            </p>
          </MDBCol>
          <MDBCol className="col-2" style={{ textAlign: "left" }}>
            <h6 className="title">See : </h6>
            <ul>
              <li className="list-unstyled">
                <a
                  href="https://gomycode.com/TN-FR/home"
                  style={{ color: "red" }}
                  target='_blanl'
                >
                  GomyCode
                </a>
              </li>
              <li className="list-unstyled">
                <a href="http://learn.gomycode.co/" style={{ color: "red" }} target='_blanl'>
                  Learn Plateform
                </a>
              </li>

              <li className="list-unstyled">
                <a href="https://gomytech.co/" style={{ color: "red" }} target='_blanl'>
                  GomyTech
                </a>
              </li>
            </ul>
            <div>
              <div>
                <h6>Follow us :</h6>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}> 
                <div>
                  <a href="https://www.facebook.com/gomycode" target="_blanl">
                    <img src="https://gomycodewebsite.blob.core.windows.net/website/img/facebook_icon_f74f5d1368.png" alt=''/>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/school/go-my-code"
                    target="_blanl"
                  >
                    <img src="https://gomycodewebsite.blob.core.windows.net/website/img/linkedin_icon_e0189c3552.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCB6_JaNT8ovPvRs-zxmcawQ"
                    target="_blanl"
                  >
                    <img src="https://gomycodewebsite.blob.core.windows.net/website/img/youtube_icon_8c19cb03cd.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/gomycode/" target="_blanl">
                    <img src="https://gomycodewebsite.blob.core.windows.net/website/img/insta_icon_f45d208431.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a
                    href="https://twitter.com/gomycode?lang=en"
                    target="_blanl"
                  >
                    <img src="https://gomycodewebsite.blob.core.windows.net/website/img/twitter_icon_598f6e186a.png" alt=""/>
                  </a>
                </div>
              </div>
              </div> 
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link to="https://gomycode.com/TN-FR/home"> GOMYCODE </Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
