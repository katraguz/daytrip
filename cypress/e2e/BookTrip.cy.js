import Booking from "./PageObjects/Booking"

describe('Book a trip from point A to B', () => {

  before (function(){
    cy.fixture('TripData').then(function(data){
      this.data=data
    })

    cy.visit('/')
  })

  it('should complete booking flow', function() {

    const booking = new Booking ()
    cy.intercept('**/configurator?*').as('TripDetails')
    cy.intercept('**/booking-confirmation?*').as('BookingConfirmed')

    booking.getFromDestination().eq(0).type(this.data.from_destination)
    cy.wait(3000)
     
    booking.getToDestination().eq(0).type(this.data.to_destination)
    cy.wait(3000)

    booking.getDate().click()

    booking.getFromDestination().eq(1).should('have.value', this.data.from_destination)
    booking.getToDestination().eq(1).should('have.value', this.data.to_destination)

    booking.getDate().click()
    booking.getDateTable().contains(this.data.booking_date).click();
  
    booking.getBookBtn().click()
    cy.wait('@TripDetails')

    booking.getFromDestination().eq(0).should('have.value', this.data.from_destination)
    booking.getToDestination().eq(0).should('have.value', this.data.to_destination)
    booking.getDate().eq(0).should('contain', this.data.booking_date)

    booking.getConfirmBookingBtn().click()
    booking.getWithoutSightseeingBtn().click()

    booking.getLeadEmail().type(this.data.email)
    booking.getSaveEmailBtn().click()

    booking.getFirstName().type(this.data.first_name)
    booking.getLastName().type(this.data.last_name)
    booking.getBirthDay().type(this.data.birth_day)
    booking.getBirthMonth().click({force: true})
    booking.getBirthYear().type(this.data.birth_year)

    booking.getCallingCode().click().type(this.data.country_code)
        .type('{enter}')
    booking.getPhoneNumber().type(this.data.phone_number)
    cy.contains('Cash').click()

    booking.getConfrimPaymentBtn().click()

    cy.wait('@BookingConfirmed')
    cy.get('body').should('contain', 'Your booking is confirmed!')

  })

})