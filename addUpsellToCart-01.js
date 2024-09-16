// Adds an upsell for a specific item to the sidecart
const SB001DV1 = {
  init: function () {
    this.mainCSS();
    this.mainJS();
  },
  mainCSS: function () {
    const styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    document.head.appendChild(styles).textContent = `
      .upsell-card {
          display: flex;
          justify-content: space-between;
      }
      .upsell-card img {
          height: 112px;
      }
      .main-upsell-container {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 8px 8px;
          background: #F7F9FC;
      }
      .inner-upsell-container {
          width: 100%;
      }
      .upsell-header p {
          font-family: 'Aftika';
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #132836;
          text-align: center;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #E0E0E0;
      }
      .shaker {
          font-family: 'Aftika';
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #132836;
      }
      .blender {
          font-family: 'Aftika';
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #132836;
          margin-top: 4px;
      }
      .upsell-descriptor {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 90px;
          align-self: center;
      }
      .upsell-descriptor .quantity-button {
          height: 28px;
          width: 28px;
          border: 1.5px solid #E0E0E0;
          border-radius: 8px; 
      }
      .upsell-descriptor .quantity-button:hover {
          opacity: .75;
      }
      .upsell-descriptor input {
          font-family: 'Aftika';
          font-weight: 700;
          font-size: 16px;
          line-height: 130%;
          text-transform: capitalize;
          color: #132836;
          padding: 0;
          width: 40px;
      }
      .upsell-price-actions p {
          font-family: 'Aftika';
          font-weight: 700;
          font-size: 16px;
          line-height: 21px;
          color: #41B5E8;
          align-self: flex-end;
      }
      .upsell-price-actions {
          display: flex !important;
          flex-direction: column;
          justify-content: space-between;
          height: 90px;
          align-self: center;
      }    
      .upsell-price-actions button {
          width: 120px;
          height: 38px;
          background: #41B5E8;
          border-radius: 8px;
          font-family: 'Aftika';
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          color: #FFFFFF;
      }
      .upsell-price-actions button:hover {
          opacity: .75;
      }
      .upsell-descriptor quantity-input {
        margin-bottom: 5px;
      }
      @media (max-width: 767px) {
          .upsell-card img {
              height: 96px;
          }
          .upsell-price-actions button {
              width: 88px;
          }
      }
      @media (max-width: 365px) {
          .upsell-price-actions button {
              width: 71px;
          }
      }
              `;
  },
  mainJS: function () {
    const addUpsell = () => {
      let clothing = false;
      document
        .querySelectorAll(
          "#cart-menu-container .space-y-4 .flex.items-center a.text-sm"
        )
        .forEach((el) => {
          if (
            (el.innerText.includes("T-Shirt") ||
              el.innerText.includes("Joggers") ||
              el.innerText.includes("Hat") ||
              el.innerText.includes("Crew Neck") ||
              el.innerText.includes("Hoodie") ||
              el.innerText.includes("Bag")) &&
            document.querySelectorAll(
              "#cart-menu-container .space-y-4 .flex.items-center a.text-sm"
            ).length <= 1
          ) {
            clothing = true;
          }
        });
      if (!clothing) {
        let buttonText;
        if (window.innerWidth >= 768) {
          buttonText = "Add to Cart";
        } else {
          buttonText = "Add";
        }
        const html = `
          <div class="main-upsell-container">
          <div class="inner-upsell-container">
          <div class="upsell-header"><p>OTHER PEOPLE BOUGHT THIS</p></div>
           <div class="upsell-card">
           <img src="https://passyourtest.s3.amazonaws.com/transparent-labs-shaker-bottle.png"/>
           <div class='upsell-descriptor'>
           <div>
           <p class="shaker">TL Shaker Bottle</p>
           <p class="blender">Blender Bottle</p>
           </div>
           <quantity-input>
           <div class="flex items-center text-blue-500">
           <button class="quantity-button" type="button">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
         </svg>
           </button>
           <input class="border-0 bg-transparent hide-selectors outline-none text-center w-16" min="1" name="quantity" readonly="" type="number" value="1">
           <button class="quantity-button" type="button">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
      </svg>
           </button>
           </div>
           </quantity-input>
           </div>
           <div class="upsell-price-actions">
           <p>$9.99</p>
           <button>${buttonText}</button>
           </div>
           </div>
          </div>
          </div>
          `;
        if (document.querySelector("#cart-menu-container .space-y-4")) {
          document
            .querySelector("#cart-menu-container .space-y-4")
            .insertAdjacentHTML("beforeend", html);
          document
            .querySelector(".upsell-price-actions button")
            .addEventListener("click", () => {
              fetch("/cart/add.js", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: [
                    {
                      quantity: document.querySelector(
                        ".upsell-descriptor input"
                      ).value,
                      id: "41074690326621",
                    },
                  ],
                }),
              })
                .then((response) => {
                  if (response.ok) {
                    console.log("ok");
                    renderCart();
                  }
                })
                .catch((error) => console.error(error));
            });
          document
            .querySelectorAll(".upsell-descriptor .quantity-button")[0]
            .classList.add("decrement");
          document
            .querySelectorAll(".upsell-descriptor .quantity-button")[1]
            .classList.add("increment");
          if (
            document.querySelector(".upsell-descriptor input").value === "1"
          ) {
            document.querySelector(
              ".upsell-descriptor .decrement"
            ).style.opacity = "0.4";
            document.querySelector(
              ".upsell-descriptor .decrement"
            ).style.cursor = "not-allowed";
          }
          document
            .querySelectorAll(".upsell-descriptor .quantity-button")
            .forEach((el) => {
              el.addEventListener("click", () => {
                if (
                  document.querySelector(".upsell-descriptor input").value ===
                  "1"
                ) {
                  document.querySelector(
                    ".upsell-descriptor .decrement"
                  ).style.opacity = "0.4";
                  document.querySelector(
                    ".upsell-descriptor .decrement"
                  ).style.cursor = "not-allowed";
                }
                if (
                  document.querySelector(".upsell-descriptor input").value > "1"
                ) {
                  document.querySelector(
                    ".upsell-descriptor .decrement"
                  ).style.opacity = "1";
                  document.querySelector(
                    ".upsell-descriptor .decrement"
                  ).style.cursor = "pointer";
                }
              });
            });
        }
      }
      const quantBtn = document.querySelector(
        "#cart-menu-container .space-y-4 .flex.items-center .mt-3 .quantity-button"
      );
      if (quantBtn) {
        document
          .querySelectorAll(
            "#cart-menu-container .space-y-4 .flex.items-center .mt-3 .quantity-button"
          )
          .forEach((el) => {
            el.addEventListener("click", () => {
              setTimeout(() => {
                if (!document.querySelector(".main-upsell-container")) {
                  addUpsell();
                }
              }, 1000);
            });
          });
      }
    };

    const targetNode = document.querySelector("#cart-menu");

    const config = { attributes: true };

    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          if (
            !document.querySelector("#cart-menu").classList.contains("hidden")
          ) {
            addUpsell();
          }
          if (
            document.querySelector("#cart-menu").classList.contains("hidden")
          ) {
            document.querySelector(".main-upsell-container").remove();
          }
        }
      }
    };
    const targetNode2 = document.querySelector("#cart-menu-container");

    const config2 = { attributes: true, childList: true, subtree: true };

    const callback2 = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          let shakerPresent = false;
          document
            .querySelectorAll(
              "#cart-menu-container .space-y-4 .flex.items-center a.text-sm"
            )
            .forEach((el) => {
              if (el.innerText.includes("Shaker Bottle")) {
                shakerPresent = true;
              }
            });
          if (
            !shakerPresent &&
            !document.querySelector(".main-upsell-container")
          ) {
            addUpsell();
          }
        }
      }
    };

    const observer2 = new MutationObserver(callback2);

    observer2.observe(targetNode2, config2);
  },
};

(function SB001DV1PollFor() {
  if (
    document.querySelector("#cart-menu-container") &&
    !document.querySelector(".main-upsell-container")
  ) {
    console.log("SB001DV1 - Variation - 1.9");
    SB001DV1.init();
  } else {
    setTimeout(SB001DV1PollFor, 25);
  }
})();
