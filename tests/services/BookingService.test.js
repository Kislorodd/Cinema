const BookingServiceTest = require('../../src/services/BookingService');

describe('BookingService', () => {
    describe('Create', () => {
        test('should catch error - unknown ticketId', async () => {
            let booking = {
                "userId": 1,
                "ticketId": 9999
            }
            await expect(BookingServiceTest.Create(booking)).rejects.toThrow();
        })
    })
})