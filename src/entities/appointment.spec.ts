import {expect, test} from 'vitest'
import { Appointment } from './appointment'

test('create a new appointment', () => {
    const appointment = new Appointment({
        customer:'john doe',
        startsAt: new Date(),
        endsAt:new Date(),
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('john doe')
})