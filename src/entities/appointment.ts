export interface AppointmentProps {
    customer: string;
    startsAt:Date;
    endsAt:Date;
}


export class Appointment {
 private props : AppointmentProps


get customer () {
    return this.props.customer
}

get startsAt () {
    return this.props.startsAt
}

get endsAt () {
    return this.props.endsAt
}

constructor(props: AppointmentProps) {
    const {startsAt, endsAt} = props

    if (startsAt <= new Date()){
        throw new Error('Invalid starts date')
    }
    if(endsAt <= startsAt) {
        throw new Error('It is not possible to make an appointment that ends before it starts')
    }
    this.props = props
}
}