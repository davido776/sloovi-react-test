const secondToTime = (sec) => {
    var hrsInt = parseInt(sec / 3600);

    var remSec = sec - (hrsInt * 3600)

    var secsInt = remSec / 60

    let hrs = hrsInt
    let secs = secsInt

    if(hrsInt < 10){
        hrs = `${0}${hrsInt}`
    }

    if(secsInt < 10){
        secs = `${0}${secsInt}`
    }

    var final = `${hrs}:${secs}`
    return final;
}


const convertTimeToSecond = (input) => {
    var inputArr = input.split(":");
    let hr;
    let sec;
    if(inputArr[0] > 12){
        var x = parseInt(inputArr) - 12;

        hr = x * 3600
        
    }else{
        if(inputArr[0].startsWith('0')){
        
            var s = inputArr[0].split("");
            var y = parseInt(s[1]);
            
            hr = y * 3600
        
        }else{
            var z = parseInt(inputArr[0])
            hr = z * 3600
            
        }
    }

    if(inputArr[1] > 9){
        var n = parseInt(inputArr[1]);
        sec = n * 60;
    }else{
        var s2 = inputArr[1].split("");
        var y2 = parseInt(s2[1]);
        sec = y2 * 60
    }

    var final = hr + sec;
    return final;
    


}

const timeZoneToSecond = () => {
    var d =new Date();
    var hours = d.getHours()
    var dateSeconds = d.getMinutes()

    var input = `${hours}:${dateSeconds}`
    var seconds = convertTimeToSecond(input);

    return seconds;
    
}

const timeConverter = {timeZoneToSecond, convertTimeToSecond, secondToTime}

export default timeConverter;