const TicketServiceTest = require('../../src/services/TicketService');

describe('TicketService', () => {
    describe('Create', () => {
        test('should catch error - ticket is occupied', async () => {
            let ticket = {
                "seanceId": 3,
                "placeId": 4
            }
            // Create place (catch if already exists)
            try { await TicketServiceTest.Create(ticket); } catch (e) {}

            // test
            await expect(TicketServiceTest.Create(ticket)).rejects.toThrow();
        })
    })
})