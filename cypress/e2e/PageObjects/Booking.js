class Booking {
    getFromDestination(){
        return cy.get('[data-cy="fromSelect"]')
    }

    getToDestination(){
        return cy.get('[data-cy="toSelect"]')
    }

    getDate(){
        return cy.get('[data-cy="departureDate"]').eq(0)
    }

    getBookBtn(){
        return cy.get('[data-cy="book-button"]').eq(0)
    }

    getDateTable(){
        return cy.get('table')
    }

    getConfirmBookingBtn(){
        return cy.get('[data-cy="bookTrip"]').eq(1)
    }

    getWithoutSightseeingBtn(){
        return cy.get('[data-cy="confirm"]')
    }

    getLeadEmail(){
        return cy.get('#lead-passenger-email')
    }

    getSaveEmailBtn(){
        return cy.get('[data-cy="saveAndContinue"]')
    }

    getFirstName(){
        return cy.get('#adult_0_firstName')
    }

    getLastName(){
        return cy.get('#adult_0_lastName')
    }

    getBirthDay(){
        return cy.get('#date-input')
    }

    getBirthMonth(){
        return cy.get('#month-option-2')
    }

    getBirthYear(){
        return cy.get('[data-cy="yearInput"]')
    }

    getCallingCode(){
        return cy.get('#calling_code')
    }

    getPhoneNumber(){
        return cy.get('#phone')
    }

    getConfrimPaymentBtn(){
        return cy.get('[data-cy="confirmPayment"]')
    }

}

export default Booking;