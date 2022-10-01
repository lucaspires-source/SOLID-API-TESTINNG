import {describe,it, expect} from 'vitest'
import { Appointment } from '../entities/appointment'
import { CreateAppointment } from './create-appointment'
describe('Create Appointment',() =>{
    it('Should be able to create a new Appointment',() =>{
        const createAppointment = new CreateAppointment()
        const startsAt = new Date()
        const endsAt = new Date()
        startsAt.setDate(startsAt.getDate() + 1)
        endsAt.setDate(endsAt.getDate() + 2)
        expect(createAppointment.execute({
            customer:'John Doe',
            startsAt,
            endsAt,
        })).resolves.toBeInstanceOf(Appointment)
    })
})