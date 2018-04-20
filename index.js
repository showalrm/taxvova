//
//  index.js
//  Taxvova Calculator
//
//  Created by Ryan Weaver 04/19/2018
//  Copyright © 2018 Dumb and Dumber Softworks
//

var t;
var dx;
var vi;
var v;
var a;

function updateOutput(){
    //grab the form values
    var form = document.getElementById("inputform");
    var t = parseFloat(form.elements["time"].value);
    var dx = parseFloat(form.elements["displace"].value);
    var vi = parseFloat(form.elements["vel0"].value);
    var v = parseFloat(form.elements["vel"].value);
    var a = parseFloat(form.elements["accel"].value);
    var out = form.elements["output"];

    if (isNaN(v)){                          //in the absence of velocity
        alert('The displacement is '+[(vi*t)+0.5*(a*t**2)]+'m.');
      }
    else if (isNaN(dx)){                    //in the absence of displacement
        alert('The velocity is '+[vi+(a*t)]+'m/s.');
      }
    else if (isNaN(a)){                     //in the absence of acceleration
        alert('The displacement is '+[0.5*(vi + v)*t]+'m.');
      }
    else if (isNaN(t)){                     //in the absence of time
        alert('The velocity is '+[Math.sqrt(vi**2+2*a*dx)]+'m/s.');
      }
  };
