const request = require('request')

const joke = function (url, callback) {
    if (url.length < 5) {
        return callback('Your url is not so useful try another one', undefined)
    }
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            return callback('Your url is not so useful try another one', undefined)
        }
        const joke = response.body.value
        callback(undefined, joke)
    })

}

module.exports = joke;