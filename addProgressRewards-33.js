// add a progress bar to the side cart, with rewards based on total $$ in the cart
const SB033DV1 = {
  init: function () {
    this.mainCSS();
    this.mainJS();
  },
  mainCSS: function () {
    const styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    document.head.appendChild(styles).textContent = `
    .side-cart .free__shipping--bar.thetopone {
        display: none;
          }
          #cart-wrap .swell-cart-placeholder {
            padding-top: 0 !important;
          }
          #cart-wrap .cart-progress-bar {
            margin-top: 0px;
          }
          #cart-wrap .free-text, #cart-wrap .free-shipping-bar {
            display: none !important;
              }
          .pb-img-container svg {
            height: 40px;
            width: 40px;
            position: absolute;
          }
          .pb-img-checked {
            display: none;
          }
          #first-img {
            display: block;
          }
          .bar-outer {
            height: 6px;
            width: 20%;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            display: flex;
          }
          .pb-inner {
            display: flex;
            height: 40px;
            align-items: center;
          }
          .pb-img-text-wrapper {
            width: 40px;
            height: 40px;
          }
          .pb-img-container {
            position: relative;
          }
          .cart-progress-bar {
            width: 100%;
            margin-top: 20px;
          }
          .progress-bar-txt {
            color: var(--primary-black, #000);
            font-size: 12px;
            font-family: Founders Grotesk Mono;
            line-height: 14px;
            letter-spacing: 0.4px;
            text-transform: uppercase;
            text-align: left;
          }
          .progress-msg-wrapper p {
            color: #000;
            font-size: 11px;
            font-family: Futura ND Book;
            line-height: 14px;
            letter-spacing: 0.5px;
            width: 83px;
            text-align: center;
            color: #000;
            font-weight: 400;
          }
          .progress-msg-wrapper {
            display: flex;
            width: 107%;
            justify-content: space-between;
            margin-top: 10px;
            margin-left: -13px;
          }
          .bar-inner-1 {
            width: 40%;
            height: 6px;
          }
          .bar-inner-2 {
            width: 61%;
            height: 6px;
            margin-left: -1px;
          }
          .bar-inner-3 {
            width: 40%;
            height: 6px;
          }
          .bar-inner-4 {
            width: 61%;
            height: 6px;
            margin-left: -1px;
          }
          .bar-inner-5 {
            width: 40%;
            height: 6px;
          }
          .bar-inner-6 {
            width: 61%;
            height: 6px;
            margin-left: -1px;
          }
          @media (max-width: 1280px) {
            .progress-msg-wrapper {
              width: 106%;
            }
          }
          @media (max-width: 1030px) {
            #cart-wrap .progress-msg-wrapper p {
              width: 70px;
              font-size: 10px;
            }
            #cart-wrap .progress-msg-wrapper {
              width: 110%;
              margin-left: 0;
            }
          }
          @media (max-width: 899px) {
            #cart-wrap .progress-msg-wrapper p {
              width: 95px;
            }
            #cart-wrap .progress-msg-wrapper {
              width: 100%;
            }
            #cart-wrap .bar-outer {
              width: 41%;
            }
          }
          @media (max-width: 584px) {
            #cart-wrap .bar-outer {
              width: 39%;
            }
          }
          @media (max-width: 365px) {
            .progress-msg-wrapper p {
              width: 90px;
            }
          }
                    `;
  },
  mainJS: function () {
    const addProgressBar = () => {
      const cartTotal = Number(
        document
          .querySelector(".subtotal .saso-cart-original-total")
          .innerText.split("$")[1]
      );
      const shipThreshold = 50;
      const giftThreshold = 125;
      const setThreshold = 175;
      let shipDiff = parseFloat(shipThreshold - cartTotal).toFixed(2);
      let giftDiff = parseFloat(giftThreshold - cartTotal).toFixed(2);
      let setDiff = parseFloat(setThreshold - cartTotal).toFixed(2);
      let progressMsg;
      if (cartTotal < shipThreshold) {
        progressMsg = `You are $${shipDiff} away from Free Shipping!`;
      }
      if (cartTotal >= shipThreshold && cartTotal < giftThreshold) {
        // progressMsg = `You are $${giftDiff}.00 away from a Free Beach Tote!`;
        progressMsg = `You are $${setDiff} away from a free travel set!`;
      }
      if (cartTotal >= giftThreshold && cartTotal < setThreshold) {
        progressMsg = `You are $${setDiff} away from a free travel set!`;
      }
      if (cartTotal >= setThreshold) {
        progressMsg = `CELEBRATE YOUR SUCCESS! UNLOCK YOUR FREE GIFTS BY ADDING THEM TO YOUR CART!`;
      }
      const html = `<div class="cart-progress-bar">
      <p class="progress-bar-txt">${progressMsg}</p>
      <div class="pb-inner">
         <div class="pb-img-text-wrapper">
            <div class="pb-img-container">
               <svg id="first-img" class="pb-img-checked" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="#FEFAF0" stroke="black" stroke-linejoin="round" stroke-dasharray="4 2"/>
                  <circle cx="33" cy="7" r="7" fill="black"/>
                  <path d="M32.3 7.93313L30.4331 6.0669L29.5 7.00001L32.3 9.80001L36.9656 5.13379L36.0331 4.20001L32.3 7.93313Z" fill="#FEFAF0"/>
                  <g clip-path="url(#clip0_52_352)">
                     <path d="M20.4159 29.9898L17.1508 27.5076L24.7808 14.3648C24.811 14.3128 24.8799 14.299 24.9278 14.3354L31.0279 18.9728C31.0758 19.0092 31.0809 19.0794 31.0389 19.1224L20.4159 29.9898Z" stroke="black" stroke-miterlimit="10"/>
                     <path d="M20.4334 30.0031L17.1333 27.4943L16.121 28.8259L19.4211 31.3347L20.4334 30.0031Z" stroke="black" stroke-miterlimit="10"/>
                     <path d="M17.6116 28.9095L18.9418 29.9208" stroke="black" stroke-miterlimit="10"/>
                     <path d="M26.4771 21.2234C26.6779 21.376 26.9673 21.335 27.1218 21.1317C27.2766 20.928 27.2385 20.6387 27.0377 20.486C26.8361 20.3328 26.5475 20.3738 26.3927 20.5775C26.2381 20.7809 26.2756 21.0702 26.4771 21.2234Z" fill="black"/>
                     <path d="M25.8459 22.0536C25.6444 21.9004 25.3558 21.9414 25.201 22.145C25.0461 22.3487 25.0837 22.6379 25.2853 22.7911C25.4861 22.9438 25.7752 22.903 25.9301 22.6993C26.0849 22.4956 26.0468 22.2063 25.8459 22.0536Z" fill="black"/>
                     <path d="M25.8093 19.6293L25.6715 19.8105C25.5947 19.5244 25.4255 19.2608 25.1695 19.0662C24.54 18.5877 23.6377 18.716 23.1541 19.3522C22.6702 19.9887 22.7878 20.8926 23.4172 21.3711C23.6732 21.5658 23.9723 21.6586 24.2684 21.6562L24.1353 21.8313L24.6561 22.2272L26.3301 20.0252L25.8093 19.6293ZM23.8452 20.9861C23.4632 20.6956 23.4076 20.1591 23.701 19.7731C23.9947 19.3869 24.5261 19.2975 24.9081 19.5879C25.2896 19.8779 25.33 20.402 25.0363 20.7883C24.7429 21.1742 24.2267 21.2761 23.8452 20.9861Z" fill="black"/>
                  </g>
                  <g clip-path="url(#clip1_52_352)">
                     <path d="M20.2185 29.3424H15.1387L12.8072 10.6384C12.7997 10.5788 12.8463 10.5261 12.9064 10.5261H22.4508C22.5109 10.5261 22.5575 10.5788 22.55 10.6384L20.2185 29.3424Z" fill="#FEFAF0" stroke="black" stroke-miterlimit="10"/>
                     <path d="M20.2457 29.3424H15.1115V31.3141C15.1115 31.3693 15.1563 31.4141 15.2115 31.4141H20.1457C20.2009 31.4141 20.2457 31.3693 20.2457 31.3141V29.3424Z" fill="#FEFAF0" stroke="black" stroke-miterlimit="10"/>
                     <path d="M16.6438 30.3793H18.7134" stroke="black" stroke-miterlimit="10"/>
                     <path d="M19.6238 16.156C19.9362 16.156 20.1907 15.8986 20.1907 15.5824C20.1907 15.2655 19.9362 15.0089 19.6238 15.0089C19.3102 15.0089 19.0564 15.2655 19.0564 15.5824C19.0564 15.8989 19.3102 16.156 19.6238 16.156Z" fill="black"/>
                     <path d="M19.6238 17.4476C19.3102 17.4476 19.0564 17.7043 19.0564 18.0212C19.0564 18.3381 19.3102 18.595 19.6238 18.595C19.9362 18.595 20.1907 18.3381 20.1907 18.0212C20.1907 17.7043 19.9362 17.4476 19.6238 17.4476Z" fill="black"/>
                     <path d="M17.7705 15.0847V15.3667C17.4803 15.1421 17.1159 15.0091 16.7176 15.0091C15.7383 15.0091 14.9448 15.812 14.9448 16.8017C14.9448 17.7919 15.7383 18.5951 16.7176 18.5951C17.1159 18.5951 17.4803 18.4625 17.7705 18.2382V18.5105H18.5807V15.0847H17.7705ZM16.8509 17.8946C16.2565 17.8946 15.7996 17.4072 15.7996 16.8068C15.7996 16.2059 16.2565 15.7194 16.8509 15.7194C17.4444 15.7194 17.877 16.2059 17.877 16.8068C17.877 17.4072 17.4444 17.8946 16.8509 17.8946Z" fill="black"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_52_352">
                        <rect width="12.5517" height="22.4138" fill="white" transform="translate(24.9043 8) rotate(31.2836)"/>
                     </clipPath>
                     <clipPath id="clip1_52_352">
                        <rect width="12.5517" height="22.4138" fill="white" transform="translate(11 9.62952)"/>
                     </clipPath>
                  </defs>
               </svg>
            </div>
         </div>
         <div class="bar-outer">
            <div class="bar-inner-1"></div>
            <div class="bar-inner-2"></div>
         </div>
         <div class="pb-img-text-wrapper">
            <div class="pb-img-container">
               <svg class="pb-img-unchecked" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="#FEFAF0" stroke="black" stroke-linejoin="round" stroke-dasharray="4 2"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.317 38.4088C22.8892 38.4023 25.1421 37.0616 26.4352 35.0466C28.7767 35.5453 31.3147 34.8875 33.1287 33.0642C34.9431 31.2407 35.588 28.6996 35.0775 26.3606C37.0859 25.0574 38.4153 22.7978 38.4088 20.2257C38.4023 17.6535 37.0616 15.4005 35.0466 14.1075C35.5453 11.7659 34.8876 9.22811 33.0642 7.41387C31.2407 5.59974 28.6996 4.9547 26.3607 5.46513C25.0575 3.45671 22.7978 2.12739 20.2257 2.13387C17.6535 2.14036 15.4005 3.48115 14.1076 5.49606C11.766 4.9973 9.22811 5.6551 7.41387 7.47853C5.59974 9.30185 4.9547 11.8431 5.46524 14.1821C3.45682 15.4852 2.12739 17.7449 2.13387 20.317C2.14036 22.8892 3.48115 25.1421 5.49616 26.4351C4.99741 28.7767 5.65521 31.3146 7.47853 33.1287C9.30185 34.943 11.8431 35.588 14.1821 35.0775C15.4853 37.0859 17.7449 38.4153 20.317 38.4088Z" fill="#FEFAF0"/>
                  <path d="M11.5995 18.3723L11.2517 21.2193H10.398L10.7494 18.3723H10.1933L10.2898 17.5806H10.8459L11.047 15.9544C11.0985 15.5217 11.2155 15.2036 11.3985 15.0002C11.5814 14.7967 11.8428 14.6949 12.1826 14.6949C12.3885 14.6949 12.6293 14.7605 12.9048 14.892L12.8127 15.6411C12.6531 15.5125 12.5063 15.4481 12.3724 15.4481C12.218 15.4481 12.1034 15.5008 12.0286 15.6066C11.959 15.7123 11.9063 15.9065 11.8701 16.19L11.7 17.5806H12.4725L12.376 18.3723H11.5995Z" fill="black"/>
                  <path d="M14.0718 17.5806L14.0332 17.8934C14.3215 17.6204 14.6126 17.4841 14.9062 17.4841C15.1635 17.4841 15.398 17.5782 15.6091 17.766L15.0642 18.4689C14.907 18.335 14.7502 18.2678 14.5929 18.2678C14.4848 18.2678 14.3895 18.2891 14.307 18.3317C14.2246 18.3744 14.153 18.4411 14.0927 18.5328C14.0324 18.6245 13.9821 18.7419 13.9419 18.8863C13.9021 19.0306 13.8703 19.2031 13.8474 19.4038L13.6234 21.2194H12.7697L13.2177 17.5806H14.0718Z" fill="black"/>
                  <path d="M16.6216 19.7054C16.6216 19.9732 16.7145 20.1936 16.8998 20.3661C17.088 20.5386 17.3273 20.625 17.6184 20.625C18.0177 20.625 18.3242 20.4758 18.5377 20.1771L19.175 20.5285C18.9535 20.8273 18.7255 21.036 18.4914 21.1542C18.2546 21.2753 17.9582 21.336 17.6028 21.336C17.0386 21.336 16.5894 21.1699 16.2544 20.8377C15.9195 20.5056 15.7522 20.0613 15.7522 19.5051C15.7522 18.9233 15.9364 18.4363 16.3047 18.045C16.6702 17.6562 17.1327 17.4615 17.6916 17.4615C18.2325 17.4615 18.6587 17.6369 18.9704 17.9871C19.2872 18.3398 19.4457 18.8127 19.4457 19.405C19.4457 19.4669 19.4416 19.567 19.434 19.7062H16.6216V19.7054ZM18.5799 19.0178C18.4898 18.4564 18.1794 18.1757 17.649 18.1757C17.1467 18.1757 16.8198 18.4564 16.6678 19.0178H18.5799Z" fill="black"/>
                  <path d="M21.0602 19.7054C21.0602 19.9732 21.1531 20.1936 21.3384 20.3661C21.5266 20.5386 21.7659 20.625 22.057 20.625C22.4563 20.625 22.7628 20.4758 22.9763 20.1771L23.6136 20.5285C23.3921 20.8273 23.1641 21.036 22.93 21.1542C22.6932 21.2753 22.3968 21.336 22.0414 21.336C21.4772 21.336 21.028 21.1699 20.693 20.8377C20.3581 20.5056 20.1908 20.0613 20.1908 19.5051C20.1908 18.9233 20.375 18.4363 20.7433 18.045C21.1088 17.6562 21.5713 17.4615 22.1302 17.4615C22.6711 17.4615 23.0973 17.6369 23.409 17.9871C23.7258 18.3398 23.8843 18.8127 23.8843 19.405C23.8843 19.4669 23.8802 19.567 23.8726 19.7062H21.0602V19.7054ZM23.0185 19.0178C22.9284 18.4564 22.618 18.1757 22.0876 18.1757C21.5853 18.1757 21.2584 18.4564 21.1064 19.0178H23.0185Z" fill="black"/>
                  <path d="M24.8931 25.3797H7.92529L9.24063 13.1078H26.2081L24.8931 25.3797Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.8931 25.3797H31.2562C31.7951 25.3797 32.2659 25.0154 32.4019 24.4938L32.9713 22.3039C33.7791 19.1959 31.4335 16.1623 28.2222 16.1623H25.8807L24.8931 25.3797Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M31.484 18.5477C30.697 17.5303 29.5083 16.9468 28.2224 16.9468H26.5857L26.2142 20.4135H32.2958C32.1885 19.744 31.9138 19.1038 31.484 18.5477Z" fill="black"/>
                  <path d="M28.3542 27.7397C29.7629 27.7397 30.9049 26.5977 30.9049 25.189C30.9049 23.7803 29.7629 22.6384 28.3542 22.6384C26.9456 22.6384 25.8036 23.7803 25.8036 25.189C25.8036 26.5977 26.9456 27.7397 28.3542 27.7397Z" fill="black"/>
                  <path d="M13.6753 27.7397C15.084 27.7397 16.2259 26.5977 16.2259 25.189C16.2259 23.7803 15.084 22.6384 13.6753 22.6384C12.2666 22.6384 11.1246 23.7803 11.1246 25.189C11.1246 26.5977 12.2666 27.7397 13.6753 27.7397Z" fill="black"/>
               </svg>
               <svg class="pb-img-checked" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="#FEFAF0" stroke="black" stroke-linejoin="round" stroke-dasharray="4 2"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.317 38.4088C22.8892 38.4023 25.1421 37.0615 26.4352 35.0466C28.7767 35.5453 31.3147 34.8875 33.1287 33.0641C34.9431 31.2407 35.588 28.6996 35.0775 26.3605C37.0859 25.0574 38.4153 22.7978 38.4088 20.2256C38.4023 17.6535 37.0616 15.4005 35.0466 14.1075C35.5453 11.7659 34.8876 9.22808 33.0642 7.41384C31.2407 5.59971 28.6996 4.95467 26.3607 5.4651C25.0575 3.45668 22.7978 2.12736 20.2257 2.13384C17.6535 2.14033 15.4005 3.48112 14.1076 5.49602C11.766 4.99727 9.22811 5.65507 7.41387 7.4785C5.59974 9.30182 4.9547 11.8431 5.46524 14.1821C3.45682 15.4852 2.12739 17.7448 2.13387 20.317C2.14036 22.8892 3.48115 25.142 5.49616 26.435C4.99741 28.7767 5.65521 31.3146 7.47853 33.1287C9.30185 34.9429 11.8431 35.588 14.1821 35.0774C15.4853 37.0859 17.7449 38.4153 20.317 38.4088Z" fill="#FEFAF0"/>
                  <path d="M11.5995 18.3724L11.2517 21.2194H10.398L10.7494 18.3724H10.1933L10.2898 17.5806H10.8459L11.047 15.9544C11.0985 15.5217 11.2155 15.2037 11.3985 15.0002C11.5814 14.7967 11.8428 14.695 12.1826 14.695C12.3885 14.695 12.6293 14.7605 12.9048 14.892L12.8127 15.6412C12.6531 15.5125 12.5063 15.4481 12.3724 15.4481C12.218 15.4481 12.1034 15.5008 12.0286 15.6066C11.959 15.7123 11.9063 15.9066 11.8701 16.1901L11.7 17.5806H12.4725L12.376 18.3724H11.5995V18.3724Z" fill="black"/>
                  <path d="M14.0718 17.5806L14.0332 17.8935C14.3215 17.6204 14.6126 17.4841 14.9062 17.4841C15.1635 17.4841 15.398 17.5782 15.6091 17.766L15.0642 18.4689C14.907 18.335 14.7502 18.2678 14.5929 18.2678C14.4848 18.2678 14.3895 18.2891 14.307 18.3318C14.2246 18.3744 14.153 18.4411 14.0927 18.5328C14.0324 18.6245 13.9821 18.7419 13.9419 18.8863C13.9021 19.0307 13.8703 19.2032 13.8474 19.4038L13.6234 21.2194H12.7697L13.2177 17.5806H14.0718V17.5806Z" fill="black"/>
                  <path d="M16.6216 19.7054C16.6216 19.9732 16.7145 20.1936 16.8998 20.3661C17.088 20.5386 17.3273 20.625 17.6184 20.625C18.0177 20.625 18.3242 20.4758 18.5377 20.1771L19.175 20.5285C18.9535 20.8273 18.7255 21.036 18.4914 21.1542C18.2546 21.2753 17.9582 21.336 17.6028 21.336C17.0386 21.336 16.5894 21.1699 16.2544 20.8377C15.9195 20.5056 15.7522 20.0613 15.7522 19.5051C15.7522 18.9233 15.9364 18.4363 16.3047 18.045C16.6702 17.6562 17.1327 17.4615 17.6916 17.4615C18.2325 17.4615 18.6587 17.6369 18.9704 17.9871C19.2872 18.3398 19.4457 18.8127 19.4457 19.405C19.4457 19.4669 19.4416 19.567 19.434 19.7062H16.6216V19.7054ZM18.5799 19.0178C18.4898 18.4564 18.1794 18.1757 17.649 18.1757C17.1467 18.1757 16.8198 18.4564 16.6678 19.0178H18.5799Z" fill="black"/>
                  <path d="M21.0602 19.7054C21.0602 19.9732 21.1531 20.1936 21.3384 20.3661C21.5266 20.5386 21.7659 20.625 22.057 20.625C22.4563 20.625 22.7628 20.4758 22.9763 20.1771L23.6136 20.5285C23.3921 20.8273 23.1641 21.036 22.93 21.1542C22.6932 21.2753 22.3968 21.336 22.0414 21.336C21.4772 21.336 21.028 21.1699 20.693 20.8377C20.3581 20.5056 20.1908 20.0613 20.1908 19.5051C20.1908 18.9233 20.375 18.4363 20.7433 18.045C21.1088 17.6562 21.5713 17.4615 22.1302 17.4615C22.6711 17.4615 23.0973 17.6369 23.409 17.9871C23.7258 18.3398 23.8843 18.8127 23.8843 19.405C23.8843 19.4669 23.8802 19.567 23.8726 19.7062H21.0602V19.7054ZM23.0185 19.0178C22.9284 18.4564 22.618 18.1757 22.0876 18.1757C21.5853 18.1757 21.2584 18.4564 21.1064 19.0178H23.0185Z" fill="black"/>
                  <path d="M24.8931 25.3797H7.92529L9.24063 13.1078H26.2081L24.8931 25.3797Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.8931 25.3797H31.2562C31.7951 25.3797 32.2659 25.0153 32.4019 24.4938L32.9713 22.3038C33.7791 19.1959 31.4335 16.1623 28.2222 16.1623H25.8807L24.8931 25.3797Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M31.484 18.5477C30.697 17.5303 29.5083 16.9468 28.2224 16.9468H26.5857L26.2142 20.4135H32.2958C32.1885 19.744 31.9138 19.1038 31.484 18.5477Z" fill="black"/>
                  <path d="M28.3542 27.7397C29.7629 27.7397 30.9049 26.5977 30.9049 25.189C30.9049 23.7804 29.7629 22.6384 28.3542 22.6384C26.9456 22.6384 25.8036 23.7804 25.8036 25.189C25.8036 26.5977 26.9456 27.7397 28.3542 27.7397Z" fill="black"/>
                  <path d="M13.6753 27.7397C15.084 27.7397 16.2259 26.5977 16.2259 25.189C16.2259 23.7804 15.084 22.6384 13.6753 22.6384C12.2666 22.6384 11.1246 23.7804 11.1246 25.189C11.1246 26.5977 12.2666 27.7397 13.6753 27.7397Z" fill="black"/>
                  <circle cx="33" cy="7" r="7" fill="black"/>
                  <path d="M32.3 7.93313L30.4331 6.0669L29.5 7.00001L32.3 9.80001L36.9656 5.13379L36.0331 4.20001L32.3 7.93313Z" fill="#FEFAF0"/>
               </svg>
            </div>
         </div>
         <div class="bar-outer">
            <div class="bar-inner-3"></div>
            <div class="bar-inner-4"></div>
         </div>
         
         <div class="pb-img-text-wrapper">
            <div class="pb-img-container">
               <svg class="pb-img-unchecked" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="#FEFAF0" stroke="black" stroke-linejoin="round" stroke-dasharray="4 2"/>
                  <path d="M28.2788 16.0409H25.1218C25.1569 16.0112 25.1929 15.9824 25.2271 15.9509C25.5004 15.7081 25.7207 15.4115 25.8742 15.0796C26.0276 14.7478 26.1109 14.3879 26.1189 14.0223C26.1308 13.6225 26.0607 13.2244 25.9132 12.8526C25.7656 12.4808 25.5435 12.143 25.2607 11.8601C24.9779 11.5772 24.6402 11.3551 24.2684 11.2074C23.8967 11.0597 23.4986 10.9896 23.0988 11.0013C22.7331 11.0091 22.373 11.0924 22.041 11.2459C21.709 11.3993 21.4122 11.6197 21.1693 11.8931C20.8331 12.2827 20.5599 12.7223 20.3593 13.1962C20.1588 12.7223 19.8855 12.2827 19.5494 11.8931C19.3065 11.6197 19.0097 11.3993 18.6777 11.2459C18.3457 11.0924 17.9856 11.0091 17.6199 11.0013C17.2201 10.9896 16.822 11.0597 16.4502 11.2074C16.0785 11.3551 15.7408 11.5772 15.458 11.8601C15.1751 12.143 14.9531 12.4808 14.8055 12.8526C14.658 13.2244 14.5879 13.6225 14.5997 14.0223C14.6077 14.3879 14.6911 14.7478 14.8445 15.0796C14.998 15.4115 15.2183 15.7081 15.4916 15.9509C15.5258 15.9806 15.5618 16.0094 15.5969 16.0409H12.4399C12.058 16.0409 11.6918 16.1926 11.4217 16.4626C11.1517 16.7327 11 17.0989 11 17.4808V20.3606C11 20.7425 11.1517 21.1087 11.4217 21.3788C11.6918 21.6488 12.058 21.8005 12.4399 21.8005V27.5601C12.4399 27.942 12.5916 28.3082 12.8616 28.5783C13.1317 28.8483 13.4979 29 13.8798 29H26.8389C27.2208 29 27.587 28.8483 27.8571 28.5783C28.1271 28.3082 28.2788 27.942 28.2788 27.5601V21.8005C28.6607 21.8005 29.0269 21.6488 29.297 21.3788C29.567 21.1087 29.7187 20.7425 29.7187 20.3606V17.4808C29.7187 17.0989 29.567 16.7327 29.297 16.4626C29.0269 16.1926 28.6607 16.0409 28.2788 16.0409ZM22.2492 12.847C22.3632 12.7211 22.502 12.6202 22.6569 12.5505C22.8117 12.4808 22.9793 12.4439 23.1492 12.4421H23.1932C23.3923 12.4433 23.5891 12.4843 23.7721 12.5625C23.9551 12.6408 24.1206 12.7548 24.259 12.8979C24.3974 13.041 24.5058 13.2102 24.5779 13.3957C24.6501 13.5812 24.6844 13.7793 24.679 13.9782C24.6772 14.1481 24.6403 14.3157 24.5706 14.4705C24.5009 14.6254 24.4 14.7642 24.2741 14.8782C23.42 15.6341 22.0026 15.9005 21.1243 15.9941C21.2323 15.0411 21.5293 13.6561 22.2492 12.847ZM16.4815 12.8794C16.7604 12.6005 17.1382 12.443 17.5326 12.4412H17.5767C17.7466 12.443 17.9142 12.4799 18.069 12.5496C18.2239 12.6193 18.3627 12.7202 18.4767 12.8461C19.2317 13.6993 19.4981 15.114 19.5917 15.9887C18.717 15.8987 17.3023 15.6287 16.4491 14.8737C16.3232 14.7597 16.2223 14.6209 16.1526 14.466C16.0829 14.3112 16.046 14.1436 16.0441 13.9737C16.0386 13.7715 16.0741 13.5702 16.1487 13.3821C16.2233 13.1939 16.3353 13.0229 16.4779 12.8794H16.4815ZM12.4399 17.4808H19.6394V20.3606H12.4399V17.4808ZM13.8798 21.8005H19.6394V27.5601H13.8798V21.8005ZM26.8389 27.5601H21.0793V21.8005H26.8389V27.5601ZM28.2788 20.3606H21.0793V17.4808H28.2788V20.3606Z" fill="black"/>
               </svg>
               <svg class="pb-img-checked" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19.5" fill="#FEFAF0" stroke="black" stroke-linejoin="round" stroke-dasharray="4 2"/>
                  <path d="M28.2788 16.0409H25.1218C25.1569 16.0112 25.1929 15.9824 25.2271 15.9509C25.5004 15.7081 25.7207 15.4115 25.8742 15.0796C26.0276 14.7478 26.1109 14.3879 26.1189 14.0223C26.1308 13.6225 26.0607 13.2244 25.9132 12.8526C25.7656 12.4808 25.5435 12.143 25.2607 11.8601C24.9779 11.5772 24.6402 11.3551 24.2684 11.2074C23.8967 11.0597 23.4986 10.9896 23.0988 11.0013C22.7331 11.0091 22.373 11.0924 22.041 11.2459C21.709 11.3993 21.4122 11.6197 21.1693 11.8931C20.8331 12.2827 20.5599 12.7223 20.3593 13.1962C20.1588 12.7223 19.8855 12.2827 19.5494 11.8931C19.3065 11.6197 19.0097 11.3993 18.6777 11.2459C18.3457 11.0924 17.9856 11.0091 17.6199 11.0013C17.2201 10.9896 16.822 11.0597 16.4502 11.2074C16.0785 11.3551 15.7408 11.5772 15.458 11.8601C15.1751 12.143 14.9531 12.4808 14.8055 12.8526C14.658 13.2244 14.5879 13.6225 14.5997 14.0223C14.6077 14.3879 14.6911 14.7478 14.8445 15.0796C14.998 15.4115 15.2183 15.7081 15.4916 15.9509C15.5258 15.9806 15.5618 16.0094 15.5969 16.0409H12.4399C12.058 16.0409 11.6918 16.1926 11.4217 16.4626C11.1517 16.7327 11 17.0989 11 17.4808V20.3606C11 20.7425 11.1517 21.1087 11.4217 21.3788C11.6918 21.6488 12.058 21.8005 12.4399 21.8005V27.5601C12.4399 27.942 12.5916 28.3082 12.8616 28.5783C13.1317 28.8483 13.4979 29 13.8798 29H26.8389C27.2208 29 27.587 28.8483 27.8571 28.5783C28.1271 28.3082 28.2788 27.942 28.2788 27.5601V21.8005C28.6607 21.8005 29.0269 21.6488 29.297 21.3788C29.567 21.1087 29.7187 20.7425 29.7187 20.3606V17.4808C29.7187 17.0989 29.567 16.7327 29.297 16.4626C29.0269 16.1926 28.6607 16.0409 28.2788 16.0409ZM22.2492 12.847C22.3632 12.7211 22.502 12.6202 22.6569 12.5505C22.8117 12.4808 22.9793 12.4439 23.1492 12.4421H23.1932C23.3923 12.4433 23.5891 12.4843 23.7721 12.5625C23.9551 12.6408 24.1206 12.7548 24.259 12.8979C24.3974 13.041 24.5058 13.2102 24.5779 13.3957C24.6501 13.5812 24.6844 13.7793 24.679 13.9782C24.6772 14.1481 24.6403 14.3157 24.5706 14.4705C24.5009 14.6254 24.4 14.7642 24.2741 14.8782C23.42 15.6341 22.0026 15.9005 21.1243 15.9941C21.2323 15.0411 21.5293 13.6561 22.2492 12.847ZM16.4815 12.8794C16.7604 12.6005 17.1382 12.443 17.5326 12.4412H17.5767C17.7466 12.443 17.9142 12.4799 18.069 12.5496C18.2239 12.6193 18.3627 12.7202 18.4767 12.8461C19.2317 13.6993 19.4981 15.114 19.5917 15.9887C18.717 15.8987 17.3023 15.6287 16.4491 14.8737C16.3232 14.7597 16.2223 14.6209 16.1526 14.466C16.0829 14.3112 16.046 14.1436 16.0441 13.9737C16.0386 13.7715 16.0741 13.5702 16.1487 13.3821C16.2233 13.1939 16.3353 13.0229 16.4779 12.8794H16.4815ZM12.4399 17.4808H19.6394V20.3606H12.4399V17.4808ZM13.8798 21.8005H19.6394V27.5601H13.8798V21.8005ZM26.8389 27.5601H21.0793V21.8005H26.8389V27.5601ZM28.2788 20.3606H21.0793V17.4808H28.2788V20.3606Z" fill="black"/>
                  <circle cx="33" cy="7" r="7" fill="black"/>
                  <path d="M32.3 7.93313L30.4331 6.0669L29.5 7.00001L32.3 9.80001L36.9656 5.13379L36.0331 4.20001L32.3 7.93313Z" fill="#FEFAF0"/>
               </svg>
            </div>
         </div>
      </div>
      <div class="progress-msg-wrapper">
         <p>FREE sample
            with every order
         </p>
         <p class="free-shipping-copy">FREE shipping
            on orders $50+
         </p>
         <p>FREE travel set on orders $175+</p>
      </div>
   </div>
   `;
      if (!document.querySelector(".cart-progress-bar")) {
        if (window.location.pathname === "/cart" && window.innerWidth > 584) {
          document
            .querySelector(
              ".cart__right--outer .swell-cart-placeholder.sign-in"
            )
            .insertAdjacentHTML("beforebegin", html);
        }
        if (window.location.pathname === "/cart" && window.innerWidth <= 584) {
          document
            .querySelector("#cart-wrap .cart_header--title")
            .insertAdjacentHTML("afterend", html);
        }
        if (window.location.pathname !== "/cart") {
          document
            .querySelector(".side-cart .cartHeader")
            .insertAdjacentHTML("afterend", html);
        }
        if (
          document
            .querySelector(".progress-bar-txt")
            .innerText.toLowerCase()
            .includes("free shipping")
        ) {
          document.querySelectorAll(".bar-inner-1")[0].style.backgroundColor =
            "#FF6B26";
        }
        if (
          document
            .querySelector(".progress-bar-txt")
            .innerText.toLowerCase()
            .includes("beach tote")
        ) {
          document.querySelectorAll(".bar-inner-1").forEach((el) => {
            el.style.backgroundColor = "#FF6B26";
          });
          document.querySelectorAll(".bar-inner-2")[0].style.backgroundColor =
            "#FF6B26";
          document.querySelectorAll(".bar-inner-3")[0].style.backgroundColor =
            "#FF6B26";
          document.querySelectorAll(".pb-img-checked")[1].style.display =
            "block";
        }
        if (
          document
            .querySelector(".progress-bar-txt")
            .innerText.toLowerCase()
            .includes("travel set")
        ) {
          document.querySelectorAll(".bar-inner-1").forEach((el) => {
            el.style.backgroundColor = "#FF6B26";
          });
          document.querySelectorAll(".bar-inner-2")[0].style.backgroundColor =
            "#FF6B26";
          document.querySelectorAll(".bar-inner-3")[0].style.backgroundColor =
            "#FF6B26";
          document.querySelectorAll(".pb-img-checked")[1].style.display =
            "block";
        }
        if (
          document
            .querySelector(".progress-bar-txt")
            .innerText.toLowerCase()
            .includes("celebrate your success")
        ) {
          document
            .querySelectorAll(
              ".bar-inner-1, .bar-inner-2, .bar-inner-3, .bar-inner-4, .bar-inner-5, .bar-inner-6"
            )
            .forEach((el) => {
              el.style.backgroundColor = "#FF6B26";
            });
          document.querySelectorAll(".bar-inner-2").forEach((el) => {
            el.style.backgroundColor = "#FF6B26";
          });
          document.querySelectorAll(".pb-img-checked").forEach((el) => {
            el.style.display = "block";
          });
        }
      }
    };
    if (window.location.pathname !== "/cart") {
      const targetNode = document.querySelector(".side__cart--overlay");

      const config = { attributes: true };

      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          if (mutation.type === "attributes") {
            if (
              document
                .querySelector(".side__cart--overlay")
                .classList.contains("active")
            ) {
              addProgressBar();
            } else {
              document.querySelectorAll(".cart-progress-bar").forEach((el) => {
                el.remove();
              });
            }
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
    (function () {
      const send = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function () {
        this.addEventListener("load", function () {
          if (
            document.querySelector(".side__cart--overlay") &&
            document
              .querySelector(".side__cart--overlay")
              .classList.contains("active") &&
            !document.querySelector(".cart-progress-bar")
          ) {
            addProgressBar();
          }
          if (
            window.location.pathname === "/cart" &&
            !document.querySelector(".cart-progress-bar")
          ) {
            addProgressBar();
          }
        });
        return send.apply(this, arguments);
      };
    })();
  },
};

(function SB033DV1PollFor() {
  if (
    (document.querySelector(".side__cart--overlay") ||
      document.querySelector(
        ".cart__right--outer .swell-cart-placeholder.sign-in"
      )) &&
    !document.querySelector(".cart-progress-bar")
  ) {
    console.log("SB033DV1 - Variation - 1.1");
    SB033DV1.init();
  } else {
    setTimeout(SB033DV1PollFor, 25);
  }
})();
