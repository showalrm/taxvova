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
            var t1 = [(-1*vi+Math.sqrt(vi**2+2*a*dx))/a];
            var t2 = [(-1*vi-Math.sqrt(vi**2+2*a*dx))/a];
            var t1 = Math.round(t1*1000)/1000;
            var t2 = Math.round(t2*1000)/1000;
            if (t1>=0 && t2>=0){
                form.elements["time"].type = 'text';
                var ttext = t1 + " or " + t2 + "; choose wisely";
                form.elements["time"].value = ttext;
            }
            else if (t1>=0){
                form.elements["time"].value = t1;
            }
            else if (t2>=0){
                form.elements["time"].value = t2;
                
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
            var vin = [((2*dx)/t)-v];
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
            var vi1 = Math.sqrt(v**2-2*a*dx);
            var vi2 = -1*(Math.sqrt(v**2-2*a*dx));
            var vi1 = Math.round(vin*1000)/1000;
            var vi2 = Math.round(vin*1000)/1000;
            var vin = vi1+' or '+vi2+'; choose wisely';
            if (isFinite(vi1 && vi2)){
                form.elements["vel0"].type = 'text';
                form.elements["vel0"].value = vin;
            }
        }
        else if (isNaN(v)){             //find velocity 
            var v1 = Math.sqrt(vi**2+2*a*dx);
            var v2 = -1*(Math.sqrt(vi**2+2*a*dx));
            var v1 = Math.round(v1*1000)/1000;
            var v2 = Math.round(v2*1000)/1000;
            var vn = v1+' or '+v2+'; choose wisely';
            if (isFinite(v1 && v2)){
                form.elements["vel"].type = 'text';
                form.elements["vel"].value = vn
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [(v**2-vi**2)/(2*a)];
            var dxn = Math.round(dxn*1000)/1000;
            if (isFinite(dxn)){
                form.elements["displace"].value = dxn;
            }
        }
    }
        
    if (isNaN(vi) && isNaN(a)){         //in the absence of initial velocity and acceleration

        if (isNaN(v)){                  //find velocity
            var vn = [dx/t];
            var vn = Math.round(vn*1000)/1000;
            if (isFinite(vn)){
                form.elements["vel"].value = vn;
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
function resetForm(){
  var form = document.getElementById("inputform");
  form.elements["time"].type = 'number';
  form.elements["displace"].type = 'number';
  form.elements["vel0"].type = 'number';
  form.elements["vel"].type = 'number';
  form.elements["accel"].type = 'number';
};
