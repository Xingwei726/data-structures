var rawdata;
var data;
var raw;
var sensorday=[];
var sensorhour = [];
var sensortemp=[];
var bodytemp=[];
var dayIndex=[];
var timeIndex=[];

var format = d3.format(".4n");
var margin = { top: 200, right: 30, bottom: 350, left: 50 },
    width = 1440 - margin.left - margin.right,
    height = 1250 - margin.top - margin.bottom;

var x;
var y;
// var x2;
// var y2;
var myColor;
var bodyColor;
var tooltip;
var tooltip2;


function getResults(value){
    var parameters = { period: value };
    $.get( '/temp',parameters, function(d) {
        $('#tempreadings').html(d)
        // console.log ("single value:", d[2].avgtemp)
        rawdata=d;
        data=d;
        raw=d;

        for (i = 0; i < d.length; i++) {        
           sensorday.push(d[i].sensorday);
           sensorhour.push(d[i].sensorhour);
           sensortemp.push(d[i].avgtemp);
        }
        console.log("rawdata:", rawdata);
        console.log("data:", data);
        console.log("raw:", raw);
        square();
        circle();
    });
}


getResults()


console.log ("sensorday:", sensorday);
console.log ("sensorhour:", sensorhour);
console.log ("sensortemp:", sensortemp);



var svg = d3.select('#graph').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    //backgroud color: light-"#e1ebe6"; dark-"#1A293C"
    .style('background', '#1A293C')
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
// Add title to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -50)
        .attr("text-anchor", "left")
        .style("font-size", "22px")
        .style("fill", "#FFFFFF")
        .text("Exterior and Interior");

// Add subtitle to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -20)
        .attr("text-anchor", "left")
        .style("font-size", "14px")
        .style("fill", "#B5B4B4")
        .style("max-width", 400)
        .text("Temperatures I’ve experienced Throughout a Day");

var days = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29","30"]
var hours = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]




// Build X scales and axis:
x = d3.scaleBand()
    .range([ 0, width ])
    .domain(days)
    .padding(0.05);
 svg.append("g")
    .style("font-size", 12)
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickSize(0))
    .style("stroke", '#B5B4B4')
    .select(".domain").remove()
 
 
         
// Build Y scales and axis:
y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(hours)
    .padding(0.05);
 svg.append("g")
    .style("font-size", 12)
    .call(d3.axisLeft(y).tickSize(0))
    .style("stroke", '#B5B4B4')
    .select(".domain").remove()






// Build color scale
myColor = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([4,30])
 
bodyColor = d3.scaleSequential()
    .interpolator(d3.interpolateMagma)
    .domain([32.4,37]) 
 
 
    
tooltip = d3.select("#graph")
    .append("div")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "0px")
    .style("border-radius", "3px")
    .style("padding", "8px")
    
tooltip2 = d3.select("#graph")
    .append("div")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("color","white")
    .style("background-color", "black")
    .style("border", "solid")
    .style("border-width", "0px")
    .style("border-radius", "3px")
    .style("padding", "8px")    







//Draw Exterior Temperature Squares
function square(){
    
var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  
var mousemove = function(d) {
    tooltip
      .html("The temperature at <br>this hour is: " + format(d.avgtemp) + "°C")
      .style("left",d.sensorday*40  + "px")     
      .style("bottom", d.sensorhour*15 + "px");
  }
  
var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 1)
  }
  
  

svg.selectAll('rect')
    // .data([data])
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d){
          return x(d.sensorday)
      })
      .attr("y", function(d){
          return y(d.sensorhour)
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", 42)
      .attr("height", 27)
      .style("fill",function(d){
          return myColor(d.avgtemp)
      })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 1)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)

}



function circle(){
    
    //Draw Interior Temperature Circles
    d3.json('BodyTemp2.json', function(d){
        
    for (var i=0; i<d.length; i++){
        bodytemp.push(d[i].Temperature)
        dayIndex.push(d[i].DayIndex)
        timeIndex.push(d[i].TimeIndex)
    }
    
    console.log("bodytemp:",bodytemp)
    console.log("dayIndex:",dayIndex)
    console.log("timeIndex:",timeIndex)   
    
    var mouseover2 = function(d) {
        tooltip2
          .style("opacity", 1)
        d3.select(this)
          .style("stroke", "white")
          .style("opacity", 1)
      }
      
    var mousemove2 = function(d) {
        tooltip2
          .html("Body temperature at <br>this hour is: " + format(d.Temperature) + "°C")
          .style("left",d.DayIndex*40  + "px")     
          .style("bottom", d.TimeIndex*15 + "px");
      }
      
    var mouseleave2 = function(d) {
        tooltip2
          .style("opacity", 0)
        d3.select(this)
          .style("stroke", "none")
          .style("opacity", 1)
      }    
    
    
    
    
    svg.selectAll('circle')
        .data(d)
        .enter()
        .append("circle")
          .attr("cx", function(d){
              return x(d.DayIndex)+42/2
          })
          .attr("cy", function(d){
              return y(d.TimeIndex)+27/2
          })
          .attr("r", 5)
          .style("fill",function(d){
              return bodyColor(d.Temperature)
          })
          .style("stroke-width", 4)
          .style("stroke", "none")
          .style("opacity", 1)
          .on("mouseover", mouseover2)
          .on("mousemove", mousemove2)
          .on("mouseleave", mouseleave2)
        
    })
   
}

