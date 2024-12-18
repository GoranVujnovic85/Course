/* The file autoRefresh.js provides functionality for automatically refreshing HTML pages. 
The interval is a global variable that can only be modified within this file. 
The AutoRefresh class is imported into all HTML files except for the ContactUs page. 
On the ContactUs page, autoRefresh.js is invoked by the function from config.js. */
class AutoRefresh {
  constructor() {
    this.interval = AutoRefresh.globalInterval;
    this.timerId = null;
  }
  // Static variable for global interval
  static globalInterval = 10000; 

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        window.location.reload();
      }, this.interval);
      console.log(`Auto-refresh started with an interval of ${this.interval}ms.`);
    } 
    else {
      console.log("Auto-refresh is already running.");
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log("Auto-refresh stopped.");
    } 
    else {
      console.log("Auto-refresh is not running.");
    }
  }
  
  updateInterval(newInterval) {
    // Updates the static variable for the global interval.
    AutoRefresh.globalInterval = newInterval; 
    this.stop();
    this.start();
    console.log(`Auto-refresh interval updated to ${newInterval}ms.`);
  }
}

// Kreirajte instancu AutoRefresh i pokrenite osvežavanje
const autoRefresh = new AutoRefresh();
autoRefresh.start();