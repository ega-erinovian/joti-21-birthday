import React from "react";
import Navbar from "./Navigation";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Img1 from "../img/album-img/1.webp";
import Img8 from "../img/album-img/8.webp";
import Img11 from "../img/album-img/11.webp";
import Img12 from "../img/album-img/12.webp";
import Img13 from "../img/album-img/13.webp";
import Img14 from "../img/album-img/14.webp";
import Img15 from "../img/album-img/15.webp";
import Img16 from "../img/album-img/16.webp";
import Img17 from "../img/album-img/17.webp";
import Img18 from "../img/album-img/18.webp";
import Img19 from "../img/album-img/19.webp";

const Album = () => {
  return (
    <>
      <section className="album-joti">
        <Navbar />
        <h1>Journey Through Time</h1>
        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="album">
              <div class="row">
                <div class="column">
                  <img src={Img12} alt="botjil" />
                  <img src={Img19} alt="ultah anggi:(( tpi keknya kmu pernah ultah disini dah" />
                  <img src={Img8} alt="cecankuu" />
                </div>
                <div class="column">
                  <img src={Img1} alt="cemberut aja cecan" />
                  <img src={Img16} alt="happy 19th birthday! keknya..." />
                  <img src={Img15} alt="happy 20th birthday!" />
                </div>
                <div class="column">
                  <img src={Img14} alt="ini lama bet gils" />
                  <img src={Img13} alt="ciye lulus SMA" />
                  <img src={Img11} alt="ini liburan terbahagia mu ga si..." />
                </div>
                <div class="column">
                  <img src={Img17} alt="happy 18th birthday!" />
                  <img src={Img18} alt="ihir naq UGM" />
                </div>
              </div>
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </section>
    </>
  );
};

export default Album;
