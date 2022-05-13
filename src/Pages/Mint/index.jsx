import React, { useState } from "react";
import styles from "./Mint.module.css";
import { Modal } from "react-responsive-modal";

import { discord, medium, twitter } from "../../Assets/images";
import useMetaMask from "../../Hooks/metamask";

export default function Mint() {
  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();
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
            <button onClick={onOpenModal}>
              <span className={styles.connect_wallet_btn_text}>
                CONNECT WALLET
              </span>
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.wallet_card_wrapper}>
          <div className={styles.wallet_card}>
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
              <button onClick={connect}>
                <span className={styles.connect_wallet_btn_text}>
                  CONNECT WALLET
                </span>
              </button>
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
