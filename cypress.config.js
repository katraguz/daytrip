const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "1agkvp",
  
  e2e: {

    baseUrl: 'https://website.staging.mydaytrip.net/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
