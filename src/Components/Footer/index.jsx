import React from "react";
import { footer } from "../../Assets/images/index";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_wrap">
        <div className="footer_img_wrap">
          <img src={footer} alt="footer-img" />
        </div>
        <div className="footer_content_wrap">
          <div className="content_head">
            <span>Rubensian Beauties Club</span>
          </div>
          <div className="content_btns">
            <button>Mint</button>
            <button>Contact us</button>
          </div>
          <div className="content_links">
            <a>NFT Ownership License button</a>
            <a>Terms of Conditions</a>
            <a>Opensea</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
