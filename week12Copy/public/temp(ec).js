var rawdata;
var data;
var sensorday=[];
var sensorhour = [];
var sensortemp=[];

var margin = { top: 200, right: 20, bottom: 350, left: 50 },
    width = 1920 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

var barHeight=400;
var barWidth = 50;
var barOffset = 5;
var x;
var y;

function getResults(value){
    var parameters = { period: value };
    $.get( '/temp',parameters, function(d) {
        $('#tempreadings').html(d)

        // console.log(d[13])
        console.log ("single:", d[2].avgtemp)
        rawdata=d;
        data=d;

        for (i = 0; i < d.length; i++) {        
           sensorday.push(d[i].sensorday);
           sensorhour.push(d[i].sensorhour);
           sensortemp.push(d[i].avgtemp);
        //   dataAll.push(d[i].sensorday)
        }
        
        console.log("rawdata:", rawdata)
        console.log("data:", data)
        draw()

    });
}


getResults()



console.log ("sensorday:", sensorday);
console.log ("sensorhour:", sensorhour);
console.log ("sensortemp:", sensortemp);
// console.log ("data:", dataAll);



    
var svg = d3.select('#graph').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('background', '#e1ebe6')

var days = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29","30"]
var hours = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]

square();    
// var mouseover = function(d) {
//     tooltip
//       .style("opacity", 1)
//     d3.select(this)
//       .style("stroke", "black")
//       .style("opacity", 1)
//   }
//   var mousemove = function(d) {
//     tooltip
//       .html("The exact value of<br>this cell is: " + d.value)
//       .style("left", (d3.mouse(this)[0]+70) + "px")
//       .style("top", (d3.mouse(this)[1]) + "px")
//   }
//   var mouseleave = function(d) {
//     tooltip
//       .style("opacity", 0)
//     d3.select(this)
//       .style("stroke", "none")
//       .style("opacity", 0.8)
//   }


// Build X scales and axis:
// x = d3.scaleBand()
//     .range([ 0, width ])
//     .domain(days)
//     .padding(0.05);
//  svg.append("g")
//     .style("font-size", 15)
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x).tickSize(0))
//     .select(".domain").remove()
          
// // Build Y scales and axis:
// y = d3.scaleBand()
//     .range([ height, 0 ])
//     .domain(hours)
//     .padding(0.05);
//  svg.append("g")
//     .style("font-size", 15)
//     .call(d3.axisLeft(y).tickSize(0))
//     .select(".domain").remove()

function draw(){
            console.log("rawdata:", rawdata)
            console.log("data:", data)

}


function square(){
     svg.selectAll('rect')
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d,i){
          if(d.sensorday="1"){
             i*0
          }else if(d.sensorday="2"){
             i*40
          }else if(d.sensorday="3"){
             i*80
          }
      })
      .attr("y", function(d,i){
          if(d.sensorhour="0"){
             i*0
          }else if(d.sensorhour="1"){
             i*40
          }else if(d.sensorhour="2"){
             i*80
          }
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", 20)
      .attr("height", 20)
      .style("fill","#e93434")
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 1)
    // .on("mouseover", mouseover)
    // .on("mousemove", mousemove)
    // .on("mouseleave", mouseleave)
}