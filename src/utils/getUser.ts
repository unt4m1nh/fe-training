export default function getUserList() {
    const storage = window.localStorage.getItem('user')
    let currentUsers: any = JSON.stringify(storage ?? '')
    currentUsers = JSON.parse(storage ?? '');
    if (currentUsers) {
        return currentUsers
    }
    return null
}