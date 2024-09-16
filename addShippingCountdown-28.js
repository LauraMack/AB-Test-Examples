// Add a shipping countdown that calculates shipping times based on specific days / hours
const SB028DV1 = {
  init: function () {
    this.mainCSS();
    this.mainJS();
    this.goals();
  },
  mainCSS: function () {
    const styles = document.createElement("style");
    styles.setAttribute("type", "text/css");
    document.head.appendChild(styles).textContent = `
             .timer-container {
                 display: block;
                 background-color: 
                 rgba(120, 175, 73, 0.1);
                 width: 100%;
                 height: fit-content;
                 padding: 20px 24px 20px 30px;
                 display: flex;
                 margin-bottom: 25px;
                 margin-top: 25px;
                 justify-content: center;
                 align-items: center;
             }
             .timer-container-cart {
              display: block;
              background-color: 
              rgba(120, 175, 73, 0.1);
              width: 527px;
              height: 112px;
              padding: 20px 23px 20px 30px;
              display: flex;
              position: absolute;
              left: 0;
              top: auto;
          }
             .timer-container > p {
                 width: 48%;
                 color: #78af49;
                 margin-bottom: 0 !important;
                 font-size:16px;
                 margin-right:25px;
             }
             .number {
              font-size: 28px;
              font-weight: 900;
              letter-spacing: 1px;
              color: #78af49;
             }
             .colon {
              font-size: 28px;
              font-weight: 900;
              letter-spacing: 1px;
              color: #78af49;
              align-self: center;
              padding-left: 10px;
              padding-right: 10px;
             }
             .countdown {
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: center;
                 font-size: 12px;
                 letter-spacing: 0.5px;
                 text-align: center;
                 color: #78af49;
                 font-weight: 100;
                 border: solid 4px rgba(120, 175, 73, 0.2);
                 background-color: #fff;
                 border-radius: 6px;
                 width: 62px;
                 height: 72px;
             }
             .timer {
                 display: flex;
                 width: 47%;
                 justify-content: space-around;
             }
             .text-cart {
              width: 49%;
              font-size: 16px;
              line-height: 1.3;
              color: #78af49;
             }
             .break {
                 display: none;
             }
             .break-cart {
                 display: none;
             }
             @media (max-width: 1030px) {
                 .timer-container {
                     padding: 10px;
                 }
                 .timer-container > p {
                  padding: 10px;
                  margin-right:0;
              }
                 .timer {
                     width: 58%;
                 }
                 .timer-container-cart {
                  width: 50%;
                  height: fit-content;
                  padding: 0px;
              }
              .timer-container-cart .timer {
                  padding: 15px;
              }
              .text-cart {
                  width: unset;
                  font-size: 14px;
                  margin-bottom: 0 !important;
                  padding: 9px 14px !important;
                  align-self: center;
              }
             }
             @media (max-width: 915px) {
              .timer-container {
                  width: 100%;
                  flex-direction: column;
                  padding: 0px;
                  height: fit-content;
              }
              .timer-container > p {
                  width: unset;
                  padding: 10px 10px 5px 10px;
              }
              .timer {
                  width: 100%;
                  padding: 15px 45px;
                  align-self: center;
              }
              .break {
                  display: block;
                  background-color: rgba(120, 175, 73, 0.1);
                  height: 2px;
                  width: 100%;
                  align-self: center;
                  margin: 0 auto;
                  margin-top: 10px;
              }
              .timer-container-cart {
                  width: 50%;
                  height: fit-content;
                  padding: 0px;
              }
              .timer-container-cart .timer {
                  padding: 0px 10px 0px 10px;
              }
              .text-cart {
                  width: unset;
                  font-size: 14px;
                  margin-bottom: 0 !important;
                  padding: 9px !important;
              }
             }
             @media (max-width: 770px) {
                 .timer-container {
                     padding: 0px;
                 }
                 .timer {
                     padding: 15px 180px;
                 }
                 .timer-container-cart .timer {
                  padding: 10px 200px;
                 }
                 .break-cart {
                  display: block;
                  background-color: rgba(120, 175, 73, 0.1);
                  height: 2px;
                  width: 100%;
                  align-self: center;
                  margin: 0 auto;
                  margin-top: 10px;
              }
              .timer-container-cart {
                  width: 100%;
                  flex-direction: column;
                  padding: 0px;
                  height: fit-content;
                  position: static;
                  margin-bottom: 20px;
              }
              .text-cart {
                  text-align: center;
                  padding: 14px !important;
              }
             }
             @media (max-width: 560px) {
              .timer {
                  padding: 15px 80px;
              }
              .timer-container-cart .timer {
                  padding: 10px 100px;
              }
             }
             @media (max-width: 430px) {
              .timer-container {
                  width: 100%;
                  flex-direction: column;
                  padding: 0px;
                  height: fit-content;
              }
              .timer-container > p {
                  width: unset;
                  padding: 15px 15px 5px 15px;
              }
              .timer {
                  width: 100%;
                  padding: 15px 45px;
              }
              .break {
                  display: block;
                  background-color: rgba(120, 175, 73, 0.1);
                  height: 2px;
                  width: 100%;
                  align-self: center;
                  margin: 0 auto;
                  margin-top: 10px;
              }
              .text-cart {
                  width: unset;
                  padding: 10px 10px 5px 10px !important;
                  margin-bottom: 0 !important;
              }
              .timer-container-cart .timer {
                  padding: 10px 55px;
              }
             }
             @media (max-width: 363px) {
                 .timer {
                     padding: 15px 30px;
                 }
             }
              `;
  },
  mainJS: function () {
    // if cart page
    if (window.location.pathname === "/cart/") {
      //   get day of the week
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var today = new Date();
      var timezoneOffset = new Date().getTimezoneOffset();
      var timezoneHours = timezoneOffset / 60;
      var timezoneDifference = 4 - timezoneHours;
      var finalTime = 18 + timezoneDifference;

      var dayNum = today.getDay();
      var dayHour = today.getHours();
      let day;

      // get 'day' dynamically for cart text

      //weekday (monday - thursday and less than 6pm)
      if (
        (dayNum == 4 && dayHour < finalTime) ||
        (dayNum <= 3 && dayNum >= 1 && dayHour < finalTime)
      ) {
        day = weekday[today.getDay() + 1];
      }
      //weekday (monday - thursday and more than 6pm)
      if (dayNum <= 4 && dayNum >= 1 && dayHour >= finalTime) {
        day = weekday[today.getDay() + 2];
      }
      // weekend or Friday after 6pm
      if ((dayNum == 5 && dayHour >= finalTime) || dayNum == 0 || dayNum == 6) {
        day = "Tuesday";
      }
      if (
        (dayNum == 4 && dayHour >= finalTime) ||
        (dayNum == 5 && dayHour < finalTime)
      ) {
        day = "Monday";
      }

      const container = `<div class="timer-container-cart">
              <p class="text-cart"><strong>Want this item by ${day}?</strong> Select <strong>Next Day Air</strong> at checkout and order within the next:</p>
              <div class="break-cart"></div>
              <div class="timer"><div class="countdown"><span class="number">00</span>HOURS</div><span class="colon">:</span><div class="countdown"><span class="number">00</span>MINS</div><span class="colon">:</span><div class="countdown"><span class="number">00</span>SECS</div></div>
              </div>`;
      // append under button if > 770 width
      if (window.innerWidth <= 770) {
        document
          .querySelector(".wc-proceed-to-checkout")
          .insertAdjacentHTML("afterend", container);
      } else {
        document
          .querySelector(".cart_totals")
          .insertAdjacentHTML("afterbegin", container);
      }
      // if PDP page
    } else {
      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var today = new Date();
      var timezoneOffset = new Date().getTimezoneOffset();
      var timezoneHours = timezoneOffset / 60;
      var timezoneDifference = 4 - timezoneHours;
      var finalTime = 18 + timezoneDifference;

      var dayNum = today.getDay();
      var dayHour = today.getHours();
      let day;

      // get 'day' dynamically for cart text

      //weekday (monday - thursday and less than 6pm)
      if (
        (dayNum == 4 && dayHour < finalTime) ||
        (dayNum <= 3 && dayNum >= 1 && dayHour < finalTime)
      ) {
        day = weekday[today.getDay() + 1];
      }
      //weekday (monday - thursday and more than 6pm)
      if (dayNum <= 4 && dayNum >= 1 && dayHour >= finalTime) {
        day = weekday[today.getDay() + 2];
      }
      // weekend or Friday after 6pm
      if ((dayNum == 5 && dayHour >= finalTime) || dayNum == 0 || dayNum == 6) {
        day = "Tuesday";
      }
      if (
        (dayNum == 4 && dayHour >= finalTime) ||
        (dayNum == 5 && dayHour < finalTime)
      ) {
        day = "Monday";
      }

      const container = `<div class="timer-container"></div>`;
      document
        .querySelector(".shipping-blurb > p")
        .insertAdjacentHTML("afterend", container);

      const itemByDay = document.querySelector(".shipping-blurb").children[2];
      itemByDay.innerHTML = `<strong>Want this item by ${day}?</strong> Select <strong>Next Day Air</strong> at checkout and order within the next:`;

      document.querySelector(".timer-container").appendChild(itemByDay);

      const timer = `
            <div class="break"></div>
          <div class="timer"><div class="countdown"><span class="number">00</span>HOURS</div><span class="colon">:</span><div class="countdown"><span class="number">00</span>MINS</div><span class="colon">:</span><div class="countdown"><span class="number">00</span>SECS</div></div>
          `;

      document
        .querySelector(".timer-container")
        .insertAdjacentHTML("beforeend", timer);

      document.querySelector(".shipping-blurb").lastChild.innerHTML = `
            <p>See our <strong><a href="https://passyourtest.com/shipping/">Shipping Policy</a></strong> for more information.</p>
            `;
    }

    function update() {
      //   Get current date and time
      var today = new Date();
      var timezoneOffset = new Date().getTimezoneOffset();
      var timezoneHours = timezoneOffset / 60;
      var timezoneDifference = 4 - timezoneHours;

      var finalTime = 18 + timezoneDifference;

      // Get day number and day hour
      var dayNum = today.getDay();
      var dayHour = today.getHours();

      // if it's a weekday (Monday - Thursday)
      if (
        (dayNum == 4 && dayHour < finalTime) ||
        (dayNum <= 3 && dayNum >= 1)
      ) {
        console.log("condition 1");
        var daysToThurs = 4 - (dayNum < 4 ? dayNum : dayNum - 0);
        console.log(daysToThurs, "daystoThurs");

        // Get milliseconds to Thursday EOD
        var ThursdayEOD = new Date(+today);
        ThursdayEOD.setDate(ThursdayEOD.getDate() + daysToThurs);
        ThursdayEOD.setHours(finalTime, 0, 0, 0);
        console.log(ThursdayEOD, "thursdayEOD");
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((ThursdayEOD - today) / 1000) * 1000;

        var d = (ms / 8.64e7) | 0;
        var h = ((ms % 8.64e7) / 3.6e6) | 0;
        var m = ((ms % 3.6e6) / 6e4) | 0;
        var s = ((ms % 6e4) / 1e3) | 0;

        // Return remaining
        document.querySelector(
          ".timer"
        ).innerHTML = `<div class="countdown"><span class="number">${
          h >= 10 ? h : "0" + h
        }</span>HOURS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          m >= 10 ? m : "0" + m
        }</span>MINS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          s >= 10 ? s : "0" + s
        }</span>SECS</div>`;
      }
      // Get number of days to Monday (if it's Thursday after 6pm or Friday before 6pm)
      if (
        (dayNum == 4 && dayHour >= finalTime) ||
        (dayNum == 5 && dayHour < finalTime)
      ) {
        console.log("condition 2");
        console.log("thursday after 6pm");
        // var daysToMon = Math.abs(dayNum < 1 ? 1 : 7 - dayNum + 1);
        var daysToMon = dayNum == 4 ? 4 : 3;
        console.log(daysToMon, "daysToMon");
        // Get milliseconds to Monday EOD
        var mondayEOD = new Date(+today);
        mondayEOD.setDate(mondayEOD.getDate() + daysToMon);
        mondayEOD.setHours(finalTime, 0, 0, 0);
        console.log(mondayEOD, "MondayEOD");
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((mondayEOD - today) / 1000) * 1000;

        var d = (ms / 8.64e7) | 0;
        var h = ((ms % 8.64e7) / 3.6e6) | 0;
        var m = ((ms % 3.6e6) / 6e4) | 0;
        var s = ((ms % 6e4) / 1e3) | 0;
        var daysToHours = d * 24 + h;

        // Return remaining
        document.querySelector(
          ".timer"
        ).innerHTML = `<div class="countdown"><span class="number">${
          daysToHours >= 10 ? daysToHours : "0" + daysToHours
        }</span>HOURS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          m >= 10 ? m : "0" + m
        }</span>MINS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          s >= 10 ? s : "0" + s
        }</span>SECS</div>`;
      }
      // Get number of days to Tuesday (if it's friday after 18h or the weekend)
      if ((dayNum == 5 && dayHour >= finalTime) || dayNum == 0 || dayNum == 6) {
        console.log("condition 3");
        let daysToTues;
        if (dayNum == 5) {
          console.log("friday");
          daysToTues = 3;
        } else if (dayNum == 6) {
          console.log("saturday");
          daysToTues = 2;
        } else {
          daysToTues = 1;
          console.log("sunday");
        }
        console.log(daysToTues);
        // Get milliseconds to tuesday EOD
        var tuesdayEOD = new Date(+today);
        tuesdayEOD.setDate(tuesdayEOD.getDate() + daysToTues);
        tuesdayEOD.setHours(finalTime, 0, 0, 0);
        // Round up ms remaining so seconds remaining matches clock
        var ms = Math.ceil((tuesdayEOD - today) / 1000) * 1000;

        var d = (ms / 8.64e7) | 0;
        var h = ((ms % 8.64e7) / 3.6e6) | 0;
        var m = ((ms % 3.6e6) / 6e4) | 0;
        var s = ((ms % 6e4) / 1e3) | 0;
        var daysToHours = d * 24 + h;

        // Return remaining
        document.querySelector(
          ".timer"
        ).innerHTML = `<div class="countdown"><span class="number">${
          daysToHours >= 10 ? daysToHours : "0" + daysToHours
        }</span>HOURS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          m >= 10 ? m : "0" + m
        }</span>MINS</div><span class="colon">:</span><div class="countdown"><span class="number">${
          s >= 10 ? s : "0" + s
        }</span>SECS</div>`;
      }
    }
    setInterval(update, 1000);
  },
  goals: function () {},
};

(function SB028DV1PollFor() {
  if (
    (document.querySelector(".shipping-blurb") ||
      document.querySelector(".entry-content.clear")) &&
    !document.querySelector(".timer-container")
  ) {
    console.log("SB028DV1 - Variation - 1.2");
    SB028DV1.init();
  } else {
    setTimeout(SB028DV1PollFor, 25);
  }
})();
