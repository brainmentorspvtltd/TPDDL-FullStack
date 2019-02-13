const events = require("events");
var eventObject = new events.EventEmitter();
// Register an Event
eventObject.on('sharelocation',(latlng)=>{
    console.log('Car Location is ',latlng);
})

// Call Event
function cabMove(){
eventObject.emit('sharelocation',{lat,lng});
}
var lat =10;
var lng = 11;
setInterval(()=>{
    cabMove(lat, lng);
    lat=lat+0.2;
    lng = lng + 0.1;
},3000);


