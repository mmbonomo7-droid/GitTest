let coolButton = document.createElement("input")

document.body.append(coolButton);

const beans = {
    flavor: "BBQ",
    consume(){
        alert("yum");
    }
};

let boi = "cool";
function checkTemperature(temp){
    let c = "cold";
    let w = "warm";
    let h = "hot";
    const lowWarm = 60
    const highWarm = 80

    if (temp < lowWarm ){
        return c;
    } else if (temp >= lowWarm && temp <= highWarm){
        return w;
    } else if(temp > highWarm){
        return h;
    }
}