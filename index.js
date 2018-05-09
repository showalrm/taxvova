//
//  index.js
//  Taxvova Calculator
//
//  Created by Ryan Weaver 04/20/2018
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

        if (isNaN(v)){                      //in the absence of velocity

        if (isNaN(a)){                  //find acceleration
            var an = [(dx)/(vi+0.5*t**2)];
            var an = Math.round(an*1000)/1000;
            if(isFinite(an)){
                form.elements["accel"].value = an;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [(dx)/(t+0.5*a*t**2)];
            var vin = Math.round(vin*1000)/1000;
            if(isFinite(vin)){
                form.elements["vel0"].value = vin;
            }
        }
        else if (isNaN(dx)){             //find displacement
            var dxn = [(vi*t)+(0.5*a*t**2)];
            var dxn = Math.round(dxn*1000)/1000;
            if(isFinite(dxn)){
                form.elements["displace"].value = dxn;
            }
        }
        else if (isNaN(t)){             //find time
            var t1 = [(-vi+Math.sqrt.abs((vi**2)+2*a*dx))/a];
            var t1 = Math.round(t1*1000)/1000;
            var t2 = [(-vi-Math.sqrt.abs((vi**2)+2*a*dx))/a];
            var t2 = Math.round(an*1000)/1000;
            if (t1>=0 && t2>=0){
                form.elements["time"].value = t1;
            }
            else if (t1>=0){
                form.elements["time"].value = t2;
            }
            else if (t2>=0){
                form.elements["time"].type = text;
                var ttext = t1 + " or " + t2 + " choose wisely.";
                form.elements["time"].value = ttext;
            }
        }                
    }

    if (isNaN(dx)){                     //in the absence of displacement
            
        if (isNaN(a)){                  //find acceleration
            var an = [(v-vi)/t];
            var an = Math.round(an*1000)/1000;
            if (isFinite(an)){
                form.elements["accel"].value = an;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [v-(a*t)];
            var vin = Math.round(vin*1000)/1000;
            if (isFinite(vin)){
                form.elements["vel0"].value = vin;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [vi+(a*t)];
            var vn = Math.round(vn*1000)/1000;
            if (isFinite(vn)){
                form.elements["vel"].value = vn;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [(v-vi)/a];
            var tn = Math.round(tn*1000)/1000;
            if (isFinite(tn)){
                form.elements["time"].value = tn;
            }
        }
    }    

    if (isNaN(a)){                      //in the absence of acceleration
            
        if (isNaN(vi)){                 //find initial velocity
            var vin = [(2*t*dx)-v];
            var vin = Math.round(vin*1000)/1000;
            if (isFinite(vin)){
                form.elements["vel0"].value = vin;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [(2*t*dx)-vi];
            var vn = Math.round(vn*1000)/1000;
            if (isFinite(vn)){
                form.elements["vel"].value = vn;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [(2*dx)/(v+vi)];
            var tn = Math.round(tn*1000)/1000;
            if (isFinite(tn)){
                form.elements["time"].value = tn;
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [0.5*(vi+v)*t];
            var dxn = Math.round(dxn*1000)/1000;
            if (isFinite(dxn)){
                form.elements["displace"].value = dxn;
            }
        }
    }
        
    if (isNaN(t)){                      //in the absence of time
            
        if (isNaN(a)){                  //find acceleration
            var an = [(v**2-vi**2)/(2*dx)];
            var an = Math.round(an*1000)/1000;
            if (isFinite(an)){
                form.elements["accel"].value = an;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [Math.sqrt.abs(v**2-2*a*dx)];
            var vin = Math.round(vin*1000)/1000;
            if (isFinite(vin)){
                form.elements["vel0"].value = vin;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [Math.sqrt.abs(vi**2+2*a*dx)];
            var vn = Math.round(vn*1000)/1000;
            if (isFinite(vn)){
                form.elements["vel"].value = v;
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [(v**2-vi**2)/2*a];
            var dxn = Math.round(dxn*1000)/1000;
            if (isFinite(dxn)){
                form.elements["displace"].value = dxn;
            }
        }
    }
        
    if (isNaN(vi) && isNaN(a)){       //in the absence of initial velocity and acceleration

        if (isNaN(v)){                  //find velocity
            var vn = [dx/t];
            var vn = Math.round(vn*1000)/1000;
            if (isFinite(vn)){
                alert('The velocity is '+vn+'m/s.');
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [v*t];
            var dxn = Math.round(dxn*1000)/1000;
            if (isFinite(dxn)){
                form.elements["displace"].value = dxn;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [dx/v];
            var tn = Math.round(tn*1000)/1000;
            if (isFinite(tn)){
                form.elements["time"].value = tn;
            }
        }
    }
};
