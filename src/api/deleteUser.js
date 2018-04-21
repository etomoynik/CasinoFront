export default () => {
    const url = 'www';
    return fetch(`${url}`, {method: 'delete'});
}