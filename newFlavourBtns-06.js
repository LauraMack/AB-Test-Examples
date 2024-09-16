// add a new way to select rge flavours on PDP - through a select element

const SB006DV1 = {
  init: function () {
    this.mainCSS();
    this.mainJS();
  },
  mainCSS: function () {
    const styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    document.head.appendChild(styles).textContent = `
    .option-selector:first-of-type {
        display: none !important;
    }
    .new-flavor-select-wrap label {
        display: block;
        font-size: .88em;
        font-weight: 700;
        margin-bottom: .8em;
    }
    .new-flavor-select-wrap {
      padding-bottom: 15px;
    }
    .new-flavor-select-wrap svg {
        height: 15px;
        width: 15px;
        margin-left: -30px;
        margin-top: 12px;
    }
    .new-flavor-select-wrap select {
        cursor: pointer;
    }
    .hide {
        display: none;
    }
                          `;
  },
  mainJS: function () {
    const newFlavorSelect = `
    <div class="new-flavor-select-wrap hide">
    <label for="flavor">Flavor</label>
    <select name="flavors" id="new-flavor-select">
  </select>
  <svg></svg>
  </div>
  `;
    document
      .querySelector("variant-picker")
      .insertAdjacentHTML("beforebegin", newFlavorSelect);
    const flavorSelector = document.querySelector("#new-flavor-select");
    const flavorButtons = document
      .querySelectorAll(".option-selector")[0]
      .querySelectorAll(".option-selector__btns.flex.flex-wrap label");
    document.querySelector(".new-flavor-select-wrap svg").outerHTML =
      document.querySelector(
        ".main-nav__item.main-nav__item--primary.main-nav__item-content svg"
      ).outerHTML;
    flavorButtons[0].click();
    flavorButtons.forEach((el) => {
      const flavorOption = `<option value="${el.innerText}">${el.innerText}</option>`;
      flavorSelector.insertAdjacentHTML("beforeend", flavorOption);
    });
    document.querySelector(".new-flavor-select-wrap").classList.remove("hide");
    (function SoldOutPollFor() {
      if (document.querySelector("[title='Sold out']")) {
        flavorButtons.forEach((btn) => {
          document
            .querySelectorAll("#new-flavor-select option")
            .forEach((option) => {
              if (
                btn.getAttribute("title") === "Sold out" &&
                btn.innerText === option.innerText
              ) {
                option.disabled = true;
              }
            });
        });
      } else {
        setTimeout(SoldOutPollFor, 100);
      }
    })();
    flavorSelector.addEventListener("change", (ev) => {
      flavorButtons.forEach((btn) => {
        if (ev.target.value === btn.innerText) {
          btn.click();
        }
      });
    });
  },
};

(function SB006DV1PollFor() {
  if (
    document.querySelector("variant-picker") &&
    !document.querySelector(".new-flavor-select-wrap")
  ) {
    console.log("SB006DV1 - Variation - 1.1");
    SB006DV1.init();
  } else {
    setTimeout(SB006DV1PollFor, 200);
  }
})();
