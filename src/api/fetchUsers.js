export default () => {
    const amount = 10;
    return fetch(`https://randomuser.me/api/?results=${amount}`)
}