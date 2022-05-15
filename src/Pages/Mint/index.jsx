import React, { useState } from "react";
import styles from "./Mint.module.scss";
import { Modal } from "react-responsive-modal";

import { discord, medium, twitter, rbc, fox, cross } from "../../Assets/images";
import useMetaMask from "../../Hooks/metamask";

export default function Mint() {
  const { connect, disconnect, isActive, account } = useMetaMask();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className={styles.mint_page}>
      <div className={styles.title_wrapper}>
        <span className={styles.mint_page_title}>MINT SALE IS LIVE</span>
      </div>
      <div className={styles.subtitle_wrapper}>
        <span className={styles.mint_page_subtitle}>
          Exclusive 1/1 Bunny Buddies will be created by the artist to be at the
          center of his collection. These 15 unique items will be released after
          the big reveal.
        </span>
      </div>

      <div className={styles.wallet_card_wrapper}>
        <div className={styles.wallet_card}>
          <div className={styles.mint_img}>
            <img src={rbc} alt="rbc" />
          </div>
          <div className={styles.label_value_holder}>
            <span className={styles.label}>Remaining Amount</span>
            <div className={styles.value}>
              6238/<span className={styles.value_divisor}>100000</span>
            </div>
          </div>
          <div className={styles.horizontal_rule_wrapper}>
            <hr />
          </div>
          <div className={styles.label_value_holder}>
            <span className={styles.label}>Price</span>
            <div className={styles.value}>3 SOL</div>
          </div>
          <div className={styles.connect_wallet_btn_wrapper}>
            <button
              onClick={() => {
                connect();
                onOpenModal();
              }}
            >
              <span className={styles.connect_wallet_btn_text}>
                CONNECT WALLET
              </span>
            </button>
          </div>
        </div>
      </div>
      <Modal
        classNames={{ modal: styles.wallet_modal }}
        // open={true}
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
      >
        <div className={styles.wallet_card}>
          <div className={styles.wallet_body}>
            <div className={styles.cross_img}>
              <img src={cross} alt="cross" />
            </div>
            <div className={styles.connect_text}>
              <span>Connect a Wallet</span>
            </div>
          </div>

          <div className={styles.wallet_logo}>
            <div className={styles.wallet_img}>
              <img src={fox} alt="fox" />
            </div>
            <div className={styles.wallet_text}>
              <span>metamask</span>
            </div>
          </div>
        </div>
      </Modal>

      <div className={styles.social_media_wrapper}>
        <img src={twitter} alt="social media" />
        <img src={discord} alt="social media" />
        <img src={medium} alt="social media" />
      </div>
    </div>
  );
}

//
{
  /* <Modal
classNames={{ modal: styles.wallet_modal }}
open={open}
onClose={onCloseModal}
center
showCloseIcon={false}
>
<div className={styles.wallet_logo}>
  <div className={styles.wallet_img}>
    <img src={fox} alt="fox" />
  </div>
  <div className={styles.wallet_text}>
    <span>metamask connected</span>
  </div>
</div>
<div className={styles.wallet_card}>
  {isActive && (
    <div className={styles.label_value_holder}>
      <span className={styles.label}>{`wallet: ${account.slice(
        0,
        4
      )}...${account.slice(-2)}`}</span>
    </div>
  )}
</div>
</Modal> */
}

// css:
// .wallet_modal {
//   background: none;
//   border: none;
//   box-shadow: none;
//   position: static;
//   .wallet_logo {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding-bottom: 1rem;
//     .wallet_text {
//       span {
//         font-family: "Lora";
//         font-style: normal;
//         font-weight: 700;
//         font-size: 16px;
//         line-height: 20px;
//         color: #000000;
//         text-transform: capitalize;
//       }
//     }
//   }
//   .wallet_card {
//     background-color: #fbe2e2;
//     display: flex;
//     justify-content: center;
//     padding: 1rem;
//     .label {
//       text-align: center;
//       font-family: "Lato", sans-serif;
//       font-weight: 700;
//       font-size: 22px;
//     }
//   }
// }

// MOBILE:
// .wallet_modal {
// background: none;
// border: none;
// box-shadow: none;
// position: absolute;
// top: 36%;
// left: -18.75px;
// .wallet_logo {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding-bottom: 1rem;
//   .wallet_text {
//     span {
//       font-family: "Lora";
//       font-style: normal;
//       font-weight: 700;
//       font-size: 16px;
//       line-height: 20px;
//       color: #000000;
//       text-transform: capitalize;
//     }
//   }
// }
// .wallet_card {
//   background-color: #fbe2e2;
//   display: flex;
//   justify-content: center;
//   padding: 1rem;
//   .label {
//     text-align: center;
//     font-family: "Lato", sans-serif;
//     font-weight: 700;
//     font-size: 22px;
//   }
// }
// }
