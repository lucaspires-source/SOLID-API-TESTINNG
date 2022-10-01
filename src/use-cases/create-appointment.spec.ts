import {describe,it, expect} from 'vitest'
import { Appointment } from '../entities/appointment'
import { CreateAppointment } from './create-appointment'
import { getFutureDate } from '../tests/utils/get-future-date'
describe('Create Appointment',() =>{
    it('Should be able to create a new Appointment',() =>{
        const createAppointment = new CreateAppointment()
        const startsAt =  getFutureDate('2022-08-10')
        const endsAt = getFutureDate('2022-08-11')
    
        expect(createAppointment.execute({
            customer:'John Doe',
            startsAt,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })
})