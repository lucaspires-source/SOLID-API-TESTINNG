import {expect, test} from 'vitest'
import { getFutureDate } from '../tests/utils/get-future-date'
import { Appointment } from './appointment'

test('create a new appointment', () => {
    const startsAt =  getFutureDate('2022-08-10')
    const endsAt = getFutureDate('2022-08-11')

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
    startsAt.setDate(startsAt.getDate() + 2)
    endsAt.setDate(endsAt.getDate() + 1)
    
    expect(() =>{
        const appointment = new Appointment({
            customer:'john doe',
            startsAt,
            endsAt,
        }) 
    }).toThrow()

})