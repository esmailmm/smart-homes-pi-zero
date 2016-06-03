// Modules
var sensorLib = require('node-dht-sensor');
var express = require('express');

// Express app
var app = express();

// Thermostat settings
var targetTemperature = 25;
var threshold = 1;

// Routes
app.get('/get', function (req, res) {

  answer = {
    targetTemperature: targetTemperature
  };
  res.json(answer);

});

app.get('/temperature', function (req, res) {

  answer = {
    temperature: sensor.read().temperature.toFixed(2)
  };
  res.json(answer);

});

// aREST
piREST.set_id('34f5eQ');
piREST.set_name('my_rpi_zero');
var piREST = require('pi-arest')(app);

// Start server
app.listen(3000, function () {
  console.log('Raspberry Pi Zero thermostat started!');
});


// Sensor
var sensor = {
    initialize: function () {
        return sensorLib.initialize(11, 4);
    },
    read: function () {

        // Read
        var readout = sensorLib.read();
        return readout;
    }
};

if (sensor.initialize()) {
    sensor.read();
} else {
    console.warn('Failed to initialize sensor');
}
