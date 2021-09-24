
const rq = require('request')


function curl(url){

    rq.get(url, function(err,response,body){

        if(err){
            throw err
        }else{
            process.stdout.write(body);
        }
    })

}

module.exports = curl;