module.exports = {
    convertStringToArray(string) {
        return string.split(',').map(item => item.trim());
    }
}