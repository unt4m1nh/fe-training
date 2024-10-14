import { Result } from "../global/type"

type UserData = Partial<Result>

let store = window.localStorage

export const createUser = (data: UserData) => {
    const newUser: Partial<Result> = {
        gender: data.gender,
        name: data.name,
        email: data.email,
        dob: data.dob,
        phone: data.phone,
        picture: data.picture,
        nat: data.nat,
        // dob: {
        //     age: 99,
        //     date: ''
        // },
        // phone: '',
        // picture: {
        //     large: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
        //     medium: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7',
        //     thumbnail: 'https://tse1.mm.bing.net/th/id/OIP.d4aCLxnkE61dQKn4manesQHaEf?w=303&h=183&c=7&r=0&o=5&pid=1.7'
        // },
        // nat: ''
    }
    const storage = store.getItem('user')
    let currentUsers: any = JSON.stringify(storage ?? '')
    currentUsers = JSON.parse(storage ?? '');
    if (currentUsers) {
        console.log(typeof currentUsers)
        currentUsers.push(newUser)
    }
    store.setItem('user', JSON.stringify(currentUsers))
}

export const deleteUser = (index: number) => {
    const storage = store.getItem('user')
    let currentUsers: any = JSON.stringify(storage ?? '')
    currentUsers = JSON.parse(storage ?? '');
    if (currentUsers) {
        currentUsers.splice(index, 1)
        store.setItem('user', JSON.stringify(currentUsers))
    }
}