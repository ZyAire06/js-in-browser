function convertFtoC(){
    let fahren = 60;
    console.log(fahren);

    let celsTemp = (fahren - 32)*5/9;
    console.log(celsTemp.toFixed(2));

}
convertFtoC();

function convertCtoF(){
    let cels = 60;
    console.log(cels);

    let fahrenTemp = (cels *5/9)+32;
    console.log(fahrenTemp.toFixed(2));

}
convertCtoF();