
const rq = require('request');

module.exports = (url, done) => {

    rq.get(url, function(err,response,body){

        if(err){
            throw err
        }else{
            done(body);
        }
    })

}
