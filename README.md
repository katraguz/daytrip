# Daytrip task intro

This repo contains a solution to Daytrip technical task, with the tests written in Cypress.

To run it on your machine, follow [these instructions](https://docs.cypress.io/guides/getting-started/installing-cypress) to install Cypress.

Make sure that you have already have node_modules. In case not, run ```npm init``` in terminal.

## Tasks

1) Create e2e project using Cypress 
2) Add at least a one single test for the booking flow using our lower environment url https://website.staging.mydaytrip.net/ 
3) Test should cover ability of booking a trip from point A to point B with a cash option. - BookTrip.cy.js
4) Attach your repository url in the email

## Note
I tried to avoid using cy.wait, but it was not possible when choosing ***from*** and ***to*** destinations on the main page since it wouldn't let me proceed until the same form at the bottom got the values from the top. I'm assuming that's a race condition where 2 states need to be synced between the forms. Maybe I'm wrong about this, but that's how I understood and solved this issue. Would be happy to hear how this could be avoided!
Besides ```cy.wait(3000)```, I also used ```keystrokeDelay: 100``` in e2e.js under support files so typing of the destinations is more human for the same reason.
