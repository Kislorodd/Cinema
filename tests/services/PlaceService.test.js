const PlaceServiceTest = require('../../src/services/PlaceService');

describe('PlaceService', () => {
    describe('GetAll', () => {
        test('should return array with all places', async () => {
            expect(await PlaceServiceTest.GetAll()).not.toBeUndefined();
        })
    })

    describe('Create', () => {
        test('should catch error - place is occupied', async () => {
            let place = {
                "hallId": 2,
                "floor": 1,
                "seat": 1,
                "row": 1,
                "isVip": false
            }
            // Create place (catch if already exists)
            try { await PlaceServiceTest.Create(place); } catch (e) {}

            // test
            await expect(PlaceServiceTest.Create(place)).rejects.toThrow();
        })
    })
})