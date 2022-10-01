import {expect, test} from 'vitest'
import { Appointment } from './appointment'

test('create a new appointment', () => {
    const startsAt = new Date()
    const endsAt = new Date()
    endsAt.setDate(endsAt.getDate() + 1)
    const appointment = new Appointment({
        customer:'john doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment)
    expect(appointment.customer).toEqual('john doe')
})

test('Cannot create a new appointment with end  date Before Start Date', () => {

    const startsAt = new Date()
    const endsAt = new Date()
    endsAt.setDate(endsAt.getDate() - 1)
    
    expect(() =>{
        const appointment = new Appointment({
            customer:'john doe',
            startsAt,
            endsAt,
        }) 
    }).toThrow()

})