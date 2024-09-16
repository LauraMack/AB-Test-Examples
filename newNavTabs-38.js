// add new navigation tabs at the top of the product page that scroll to specific sections
!(function () {
  const f = "font-weight: 600; font-size: 15px;";
  const rc = `background: #006600; color: #AAAAAA; ${f};`;
  const wc = `background: #AAAA00; color: #F62817; ${f}`;
  console.log("%c ==== SB_038DM - Benefits tabs on PDP - BUCKETED ==== ", rc);
  const SB_038DM = {
    init: function () {
      this.mainCSS();
      this.mainJS();
    },
    mainCSS: function () {
      let s = document.createElement("style");
      s.setAttribute("type", "text/css");
      document.head.appendChild(s).textContent = `
        body[active-tab="0"] #nt-3-details-and-specs,
        body[active-tab="0"] #nt-3-whats-included,
        body[active-tab="0"] #complete-your-normatec-bundle,
        body[active-tab="0"] #nt-3-fresh-legs,
        body[active-tab="0"] #explore-normatec-3,
        body[active-tab="0"] section.container.black,
        body[active-tab="0"] #main > .layout-limiter.padded,
        body[active-tab="1"] .r-normatec-vp,
        body[active-tab="1"] #nt-3-details-and-specs,
        body[active-tab="1"] #nt-3-whats-included,
        body[active-tab="1"] #complete-your-normatec-bundle,
        body[active-tab="2"] #what-does-normatec-3-do,
        body[active-tab="2"] #nt-3-whats-included,
        body[active-tab="2"] #complete-your-normatec-bundle,
        body[active-tab="2"] .r-normatec-vp,
        body[active-tab="2"] #nt-3-fresh-legs,
        body[active-tab="2"] #explore-normatec-3,
        body[active-tab="2"] section.container.black,
        body[active-tab="3"] #nt-3-details-and-specs,
        body[active-tab="3"] .r-normatec-vp,
        body[active-tab="3"] #nt-3-fresh-legs,
        body[active-tab="3"] #explore-normatec-3,
        body[active-tab="3"] section.container.black,
        body[active-tab="3"] #main > .layout-limiter.padded {
          display: none !important;
        }
        #sticky-nav > .layout-limiter {
          display: none;
        }
        .r-details-tabs {
          background: #eaeaea;
          border-style: solid;
          border-color: #000000;
          border-width: 0px 0px 1px 0px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-start;
          width: 100%;
          height: 48px;
          position: sticky;
          top: 0;
          z-index: 999;
          overflow: hidden;
          align-self: stretch;
          flex-shrink: 0;
        }
        .r-dt-tab {
          background: #282828;
          padding: 0px 40px 0px 40px;
          opacity: 0.4;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: 40px;
          overflow: hidden;
          color: #ffffff;
          text-align: center;
          font-family: "Suisse Intl", sans-serif;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.019px;
          margin-right: 1px;
          cursor: pointer;
        }
        .r-dt-atc {
          background: #282828;
          padding: 0px 40px 0px 40px;
          display: none;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          height: 48px;
          overflow: hidden;
          color: #ffffff;
          text-align: center;
          font-family: "Suisse Intl", sans-serif;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.019px;
          margin-left: auto;
          margin-right: 1px;
          cursor: pointer;
        }
        .r-dt-atc:hover {
          opacity: 0.4;
        }
        .r-dta-active {
          display: flex;
        }
        .r-dt-tab:last-of-type {
          margin-right: 0;
        }
        .r-dt-tab.r-active, .r-dt-tab:hover {
          font-weight: 500;
          height: 48px;
          opacity: unset;
        }
        @media only screen and (max-width:600px){
          .r-dt-atc, #sticky-nav > .layout-limiter .nav {
            display: none !important;
          }
          #sticky-nav > .layout-limiter {
            display: block;
          }
          .r-details-tabs {
            height: unset;
          }
          .r-dt-tab {
            font-size: 14px;
            padding: unset;
            white-space: nowrap;
            flex: auto;
          }
          .r-dt-tab.r-active, .r-dt-tab:hover {
            height: 40px;
          }
        }
        `;
    },
    mainJS: function () {
      const $this = this;
      const newSec = `<div class="r-details-tabs">
          <div class="r-dt-tab r-active">Benefits</div>
          <div class="r-dt-tab">Overview</div>
          <div class="r-dt-tab">Specs</div>
          <div class="r-dt-tab">What’s included</div>
          <div class="r-dt-atc">Add to bag</div>
        </div>`;
      document
        .querySelector("#sticky-nav")
        .insertAdjacentHTML("afterbegin", newSec);
      document.body.setAttribute("active-tab", "0");
      document.querySelectorAll(".r-dt-tab").forEach((el, i) =>
        el.addEventListener("click", () => {
          document
            .querySelector(".r-dt-tab.r-active")
            .classList.remove("r-active");
          el.classList.add("r-active");
          document.body.setAttribute("active-tab", i);

          (function scrollToTop() {
            const scrollTo =
              document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTo > window.innerHeight) {
              window.requestAnimationFrame(scrollToTop);
              window.scrollTo(window.innerHeight, scrollTo - scrollTo / 10);
            }
          })();
        })
      );
      const cATC = document.querySelector(".r-dt-atc");
      const checkATC = () => {
        if (document.querySelector("#sticky-nav .cart-action-bar button"))
          cATC.classList.add("r-dta-active");
        else cATC.classList.remove("r-dta-active");
      };
      checkATC();
      window.addEventListener("scroll", checkATC);
      cATC.addEventListener("click", () =>
        document.querySelector("#sticky-nav .cart-action-bar button").click()
      );
      $this.waitForEl("#normatec-line-faq", (nEl) => $this.moveToEnd(nEl));
      $this.waitForEl("#yotpo-reviews", (nEl) => $this.moveToEnd(nEl));
    },
    moveToEnd: (el) =>
      document.querySelector("#main").insertAdjacentElement("beforeend", el),
    waitForEl: function (s, cb) {
      const $this = this,
        t = document.querySelector(s);
      if (t) cb(t);
      else setTimeout(() => $this.waitForEl(s, cb), 100);
    },
  };

  let SB_038DMPollBreak = 0;
  (function SB_038DMPollFor() {
    if (
      document.querySelector("#sticky-nav") &&
      !document.querySelector(".r-details-tabs")
    ) {
      try {
        console.log("%c ==== SB_038DM START ====", rc);
        console.log("%c SB_038DM - Benefits tabs on PDP", rc);
        SB_038DM.init();
        let oldURL = window.location.href + window.location.hash;
        function checkURLchange() {
          let currentURL = window.location.href + window.location.hash;
          if (currentURL !== oldURL) {
            oldURL = currentURL;
            console.log("SB_038DM URL Changed");
            window.location.reload(true);
          }
        }
        setInterval(checkURLchange, 100);
        console.log("%c ==== SB_038DM  END  ====", rc);
      } catch (error) {
        console.log("%c ERROR => " + error, wc);
        console.log("%c SB_038DM x x x x x Failed", wc);
      }
    } else if (++SB_038DMPollBreak < 1000) {
      setTimeout(SB_038DMPollFor, 25);
    }
  })();
})();
