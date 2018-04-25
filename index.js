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

   if (isNaN(v)){                       //in the absence of velocity

        if (isNaN(a)){                  //find acceleration
            a = [(dx)/(vi+0.5*(t**2))];
            alert('The acceleration is '+a+'m/s².');
        }
        else if (isNaN(vi)){            //find initial velocity
            vi = [(dx)/(t+0.5*(a(t**2)))];
            alert('The initial velocity is '+vi+'m/s.')
        }
        else if (isNaN(dx)){             //find displacement
            dx = [(vi*t)+0.5*(a*t**2)];
            alert('The displacement is '+v+'m.');
        }
        else if (isNaN(t)){             //find time
            var t1 = [(-vi+Math.sqrt((vi**2)+2*(a)*(dx)))/a];
            var t2 = [(-vi-Math.sqrt((vi**2)+2*(a)*(dx)))/a];
            if (t1>=0 && t2>=0){
                alert('The time is both '+t1+'s and '+t2+'s; choose wisely.');
            }
            else if (t1>=0){
                alert('The time is '+t1+'s.');
            }
            else if (t2>=0){
                alert('The time is '+t2+'s.');
            }
        }                
    }

    if (isNaN(dx)){                     //in the absence of displacement
        
        if (isNaN(a)){                  //find acceleration
            a = [1/(vi+t-v0)];
            alert('The acceleration is '+a+'m/s².');
        }
        else if (isNaN(vi)){            //find initial velocity
            vi = [v-(a*t)];
            alert('The initial velocity is '+vi+'m/s.');
        }
        else if (isNaN(v)){             //find velocity
            v = [vi+(a*t)];
            alert('The velocity is '+v+'m/s.');
        }
        else if (isNaN(t)){             //find time
            t = [1/(vi+a-v)];
            alert('The time is '+t+'s.');
        }
      }

    if (isNaN(a)){                      //in the absence of acceleration
        
        if (isNaN(vi)){                 //find initial velocity
            vi = [(2*t*dx)-v];
            alert('The initial velocity is '+vi+'m/s.');
        }
        else if (isNaN(v)){             //find velocity
            v = [(2*t*dx)-vi];
            alert('The velocity is '+v+'m/s.');
        }
        else if (isNaN(t)){             //find time
            t = [(2*(dx))/(v+vi)];
            alert('The time is '+t+'m/s.');
        }
        else if (isNaN(dx)){            //find displacement
            dx = [0.5*(vi+v)*t];
            alert('The displacement is '+dx+'m.');
        }
      }
    if (isNaN(t)){                      //in the absence of time
        
        if (isNaN(a)){                  //find acceleration
            a = [(v**2-vi**2)/(2*dx)];
            alert('The acceleration is '+a+'m/s².');
        }
        else if (isNaN(vi)){            //find initial velocity
            vi = [Math.sqrt(v**2-2*a*dx)];
            alert('The initial velocity is '+vi+'m/s.');
        }
        else if (isNaN(v)){             //find velocity
            v = [Math.sqrt(vi**2+2*a*dx)];
            alert('The velocity is '+v+'m/s.');
        }
        else if (isNaN(dx)){            //find displacement
            dx = [(v**2-vi**2)/2*a];
            alert('The displacement is '+dx+'m.');
        }
      }
  };
