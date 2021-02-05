//the govbot code
//version 0.0.0
const Discord = require('discord.js');
const Bot = new Discord.Client();
var faker = require('faker');
var fs = require('fs');
const chartExporter = require("highcharts-export-server");
var TOKEN = "ODA1ODc2MDk5OTU0NzY5OTIw.YBhQmg.F0y74JXLJoCZQeV_ogVzbzt0kd8";

faker.locale = "en";
class player {
    name = "";
    companyname = "";
    money = 0;
}
console.log(faker.company.companyName());
console.log(faker.random.number());

Bot.on('ready', () => {
    console.log("ready");
});

Bot.login(TOKEN); //login (makes the bot actually come online)


// Initialize the exporter
chartExporter.initPool();

let pie_data = [];
for (i = 0; i <= 10; i++) {
    let name = faker.company.companyName();
    let networth = faker.random.number();
    pie_data.push({ name: name, y: networth });
}
//#region  chartdata
// Chart details object specifies chart type and data to plot
const chartDetails = {
    type: "png",
    options: {
        chart: {
            type: "pie"
        },
        title: {
            text: "Networth"
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: "<b>{point.name}</b>: {point.y}"
                }
            }
        },
        series: [{
            data: [{
                    name: pie_data[0].name,
                    y: pie_data[0].y
                },
                {
                    name: pie_data[1].name,
                    y: pie_data[1].y
                },
                {
                    name: pie_data[2].name,
                    y: pie_data[2].y
                },
                {
                    name: pie_data[3].name,
                    y: pie_data[3].y
                },
                {
                    name: pie_data[4].name,
                    y: pie_data[4].y
                },
                {
                    name: pie_data[5].name,
                    y: pie_data[5].y
                },
                {
                    name: pie_data[6].name,
                    y: pie_data[6].y
                },
                {
                    name: pie_data[7].name,
                    y: pie_data[7].y
                },
                {
                    name: pie_data[8].name,
                    y: pie_data[8].y
                },
                {
                    name: pie_data[9].name,
                    y: pie_data[9].y
                }
            ]
        }]
    }
};
// #endregion
chartExporter.export(chartDetails, (err, res) => {
    // Get the image data (base64)
    let imageb64 = res.data;
    // Filename of the output
    let outputFile = "networth.png";
    // Save the image to file
    fs.writeFileSync(outputFile, imageb64, "base64", function(err) {
        if (err) console.log(err);
    });
    console.log("Saved image!");
    chartExporter.killPool();
});