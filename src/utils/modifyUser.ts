import { Result } from "../global/type"

type UserData = Partial<Result>

let store = window.localStorage

export const createUser = (newUser: UserData) => {
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

export const updateUser = (userToUpdate: UserData, index: number) => {
  
    const storage = store.getItem('user')
    let currentUsers: any = JSON.stringify(storage ?? '')
    currentUsers = JSON.parse(storage ?? '')
    currentUsers[index] = userToUpdate
    store.setItem('user', JSON.stringify(currentUsers))
}