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
            var anr = Math.round(an * 0.001)/0.001;
            if(isFinite(anr)){
                form.elements["accel"].value = anr;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [(dx)/(t+0.5*a*t**2)];
            var vinr = Math.round(vin * 0.001)/0.001;
            if(isFinite(vinr)){
                form.elements["vel0"].value = vinr;
            }
        }
        else if (isNaN(dx)){             //find displacement
            var dxn = [(vi*t)+(0.5*a*t**2)];
            var dxnr = Math.round(dxn * 0.001)/0.001;
            if(isFinite(dxnr)){
                form.elements["displace"].value = dxnr;
            }
        }
        else if (isNaN(t)){             //find time
            var t1 = [(-vi+Math.sqrt.abs((vi**2)+2*a*dx))/a];
            var t1r = Math.round(t1 * 0.001)/0.001;
            var t2 = [(-vi-Math.sqrt.abs((vi**2)+2*a*dx))/a];
            var t2r = Math.round(t2 * 0.001)/0.001;
            if (t1>=0 && t2>=0){
                form.elements["time"].value = t1r;
            }
            else if (t1>=0){
                form.elements["time"].value = t2r;
            }
            else if (t2>=0){
                form.elements["time"].type = text;
                var ttext = t1r + " or " + t2r + " choose wisely.";
                form.elements["time"].value = ttext;
            }
        }                
    }

    if (isNaN(dx)){                     //in the absence of displacement
            
        if (isNaN(a)){                  //find acceleration
            var an = [(v-vi)/t];
            var anr = Math.round(an * 0.001)/0.001;
            if (isFinite(anr)){
                form.elements["accel"].value = anr;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [v-(a*t)];
            var vinr = Math.round(vin * 0.001)/0.001;
            if (isFinite(vinr)){
                form.elements["vel0"].value = vinr;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [vi+(a*t)];
            var vnr = Math.round(vn * 0.001)/0.001;
            if (isFinite(vnr)){
                form.elements["vel"].value = vnr;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [(v-vi)/a];
            var tnr = Math.round(tn * 0.001)/0.001;
            if (isFinite(tnr)){
                form.elements["time"].value = tnr;
            }
        }
    }    

    if (isNaN(a)){                      //in the absence of acceleration
            
        if (isNaN(vi)){                 //find initial velocity
            var vin = [(2*t*dx)-v];
            var vinr = Math.round(vin * 0.001)/0.001;
            if (isFinite(vinr)){
                form.elements["vel0"].value = vinr;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [(2*t*dx)-vi];
            var vnr = Math.round(vn * 0.001)/0.001;
            if (isFinite(vnr)){
                form.elements["vel"].value = vnr;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [(2*dx)/(v+vi)];
            var tnr = Math.round(tn * 0.001)/0.001;
            if (isFinite(tnr)){
                form.elements["time"].value = tnr;
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [0.5*(vi+v)*t];
            var dxnr = Math.round(dxn * 0.001)/0.001;
            if (isFinite(dxnr)){
                form.elements["displace"].value = dxnr;
            }
        }
    }
        
    if (isNaN(t)){                      //in the absence of time
            
        if (isNaN(a)){                  //find acceleration
            var an = [(v**2-vi**2)/(2*dx)];
            var anr = Math.round(an * 0.001)/0.001;
            if (isFinite(anr)){
                form.elements["accel"].value = anr;
            }
        }
        else if (isNaN(vi)){            //find initial velocity
            var vin = [Math.sqrt.abs(v**2-2*a*dx)];
            var vinr = Math.round(vin * 0.001)/0.001;
            if (isFinite(vinr)){
                form.elements["vel0"].value = vinr;
            }
        }
        else if (isNaN(v)){             //find velocity
            var vn = [Math.sqrt.abs(vi**2+2*a*dx)];
            var vnr = Math.round(vn * 0.001)/0.001;
            if (isFinite(vnr)){
                form.elements["vel"].value = vnr;
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [(v**2-vi**2)/2*a];
            var dxnr = Math.round(dxn * 0.001)/0.001;
            if (isFinite(dxnr)){
                form.elements["displace"].value = dxnr;
            }
        }
    }
        
    if (isNaN(vi) && isNaN(a)){       //in the absence of initial velocity and acceleration

        if (isNaN(v)){                  //find velocity
            var vn = [dx/t];
            var vnr = Math.round(vn * 0.001)/0.001;
            if (isFinite(vnr)){
                form.elements["vel"].value = vnr;
            }
        }
        else if (isNaN(dx)){            //find displacement
            var dxn = [v*t];
            var dxnr = Math.round(dxn * 0.001)/0.001;
            if (isFinite(dxnr)){
                form.elements["displace"].value = dxnr;
            }
        }
        else if (isNaN(t)){             //find time
            var tn = [dx/v];
            var tnr = Math.round(tn * 0.001)/0.001;
            if (isFinite(tnr)){
                form.elements["time"].value = tnr;
            }
        }
    }
};
