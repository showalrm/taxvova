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

var tunits = 0;
function timeUnit(tunitselector) {
  tunits = tunitselector;
  if (tunits == 0) {
    document.getElementById("time").placeholder = "s";
  }
  if (tunits == 1) {
    document.getElementById("time").placeholder = "min";
  }
  if (tunits == 2) {
    document.getElementById("time").placeholder = "hrs";
  }
}

var dxunits = 0;
function displacementUnit(dxunitselector) {
  dxunits = dxunitselector;
  if (dxunits == 0) {
    document.getElementById("displace").placeholder = "m";
  }
  if (dxunits == 1) {
    document.getElementById("displace").placeholder = "km";
  }
}

var viunits = 0;
function iVelocityUnit(viunitselector) {
  viunits = viunitselector;
  if (viunits == 0) {
    document.getElementById("vel0").placeholder = "m/s";
  }
  if (viunits == 1) {
    document.getElementById("vel0").placeholder = "km/h";
  }
}

var vunits = 0;
function velocityUnit(vunitselector) {
  vunits = vunitselector;
  if (vunits == 0) {
    document.getElementById("vel").placeholder = "m/s";
  }
  if (vunits == 1) {
    document.getElementById("vel").placeholder = "km/h";
  }
}

var aunits = 0;
function accelerationUnit(aunitselector) {
  aunits = aunitselector;
  if (aunits == 0) {
    document.getElementById("accel").placeholder = "m/s²";
  }
}

function updateOutput() {
  //grab the form values
  var form = document.getElementById("inputform");
  t = parseFloat(form.elements["time"].value);
  dx = parseFloat(form.elements["displace"].value);
  vi = parseFloat(form.elements["vel0"].value);
  v = parseFloat(form.elements["vel"].value);
  a = parseFloat(form.elements["accel"].value);

  if (tunits == 1) {
    t = t * 60;
  }

  if (tunits == 2) {
    t = t * 3600;
  }

  if (dxunits == 1) {
    dx = dx * 1000;
  }

  if (viunits == 1) {
    vi = vi * 0.277777;
  }

  if (vunits == 1) {
    v = v * 0.277777;
  }

  if (isNaN(vi) && isNaN(a)) {
    //in the absence of initial velocity and acceleration

    if (isNaN(v)) {
      //find velocity
      var v = [dx / t];

      if (isFinite(v)) {
        form.elements["vel"].value = v;
      }
    } else if (isNaN(dx)) {
      //find displacement
      var dx = [v * t];

      if (isFinite(dx)) {
        form.elements["displace"].value = dx;
      }
    } else if (isNaN(t)) {
      //find time
      var t = [dx / v];

      if (isFinite(t)) {
        form.elements["time"].value = t;
      }
    }
  }

  if (isNaN(v)) {
    //in the absence of velocity

    if (isNaN(a)) {
      //find acceleration
      var an = [dx / (vi + 0.5 * t ** 2)];
      if (isFinite(an)) {
        form.elements["accel"].value = an;
      }
    } else if (isNaN(vi)) {
      //find initial velocity
      var vin = [dx / (t + 0.5 * a * t ** 2)];

      if (isFinite(vin)) {
        form.elements["vel0"].value = vin;
      }
      var vn = [vin + a * t];

      if (isFinite(vn)) {
        form.elements["vel"].value = vn;
      }
    } else if (isNaN(dx)) {
      //find displacement
      var dxn = [vi * t + 0.5 * a * t ** 2];

      if (isFinite(dxn)) {
        form.elements["displace"].value = dxn;
      }
    } else if (isNaN(t)) {
      //find time
      var t1 = [(-1 * vi + Math.sqrt(vi ** 2 + 2 * a * dx)) / a];
      var t2 = [(-1 * vi - Math.sqrt(vi ** 2 + 2 * a * dx)) / a];

      if (t1 >= 0 && t2 >= 0) {
        form.elements["time"].type = "text";
        var ttext = t1 + " or " + t2 + "; choose wisely";
        form.elements["time"].value = ttext;
      } else if (t1 >= 0) {
        form.elements["time"].value = t1;
      } else if (t2 >= 0) {
        form.elements["time"].value = t2;
      }
    } else {
      var vn = vi + a * t;

      if (isFinite(vn)) {
        form.elements["vel"].value = vn;
      }
    }
  }

  if (isNaN(dx)) {
    //in the absence of displacement

    if (isNaN(a)) {
      //find acceleration
      var an = [(v - vi) / t];

      if (isFinite(an)) {
        form.elements["accel"].value = an;
      }
    } else if (isNaN(vi)) {
      //find initial velocity
      var vin = [v - a * t];

      if (isFinite(vin)) {
        form.elements["vel0"].value = vin;
      }
      var dxn = [vin * t + 0.5 * a * t ** 2];

      if (isFinite(dxn)) {
        form.elements["displace"].value = dxn;
      }
    } else if (isNaN(v)) {
      //find velocity
      var vn = [vi + a * t];

      if (isFinite(vn)) {
        form.elements["vel"].value = vn;
      }
    } else if (isNaN(t)) {
      //find time
      var tn = Math.abs((v - vi) / a);

      if (isFinite(tn)) {
        form.elements["time"].value = tn;
      }
    } else {
      var dxn = 0.5 * t * (vi + v);

      if (isFinite(dxn)) {
        form.elements["displace"].value = dxn;
      }
    }
  }

  if (isNaN(a)) {
    //in the absence of acceleration

    if (isNaN(vi)) {
      //find initial velocity
      var vin = [2 * dx / t - v];

      if (isFinite(vin)) {
        form.elements["vel0"].value = vin;
      }

      var an = [(vin + v) / t];

      if (isFinite(an)) {
        form.elements["accel"].value = an;
      }
    } else if (isNaN(v)) {
      //find velocity
      var vn = [(2 * dx)/t - vi];

      if (isFinite(vn)) {
        form.elements["vel"].value = vn;
      }
    } else if (isNaN(t)) {
      //find time
      var tn = [2 * dx / (v + vi)];

      if (isFinite(tn)) {
        form.elements["time"].value = tn;
      }
    } else if (isNaN(dx)) {
      //find displacement
      var dxn = [0.5 * (vi + v) * t];

      if (isFinite(dxn)) {
        form.elements["displace"].value = dxn;
      }
    } else {
      var an = (v - vi) / t;

      if (isFinite(an)) {
        form.elements["accel"].value = an;
      }
    }
  } else if (isNaN(vi)) {
    var vin = v - a * t;

    if (isFinite(vin)) {
      form.elements["vel0"].value = vin;
    }
  }

  if (isNaN(t)) {
    //in the absence of time

    if (isNaN(a)) {
      //find acceleration
      var an = [(v ** 2 - vi ** 2) / (2 * dx)];

      if (isFinite(an)) {
        form.elements["accel"].value = an;
      }
    } else if (isNaN(vi)) {
      //find initial velocity
      var vi1 = Math.sqrt(v ** 2 - 2 * a * dx);
      var vi2 = -1 * Math.sqrt(v ** 2 - 2 * a * dx);

      var vin = vi1 + " or " + vi2 + "; choose wisely";
      if (isFinite(vi1 && vi2)) {
        form.elements["vel0"].type = "text";
        form.elements["vel0"].value = vin;
      }

      var tn1 = [(v - vi1) / a];
      var tn2 = [(v - vi2) / a];

      if (isFinite(tn1 && tn2)) {
        if (tn1 >= 0 && tn2 >= 0) {
          var tntext = tn1 + " or " + tn2 + "; choose wisely";
          form.elements["time"].type = "text";
          form.elements["time"].value = tntext;
        } else if (tn1 >= 0) {
          form.elements["time"].value = tn1;
        } else if (tn2 >= 0) {
          form.elements["time"].value = tn2;
        }
      }
    } else if (isNaN(v)) {
      //find velocity
      var v1 = Math.sqrt(vi ** 2 + 2 * a * dx);
      var v2 = -1 * Math.sqrt(vi ** 2 + 2 * a * dx);

      var vn = v1 + " or " + v2 + "; choose wisely";
      if (isFinite(v1 && v2)) {
        form.elements["vel"].type = "text";
        form.elements["vel"].value = vn;
      }
    } else if (isNaN(dx)) {
      //find displacement
      var dxn = [(v ** 2 - vi ** 2) / (2 * a)];

      if (isFinite(dxn)) {
        form.elements["displace"].value = dxn;
      }
    } else {
      var tn = Math.abs((v - vi) / a);

      if (isFinite(tn)) {
        form.elements["time"].value = tn;
      }
    }
  }
};

function resetForm() {
  //resets form types to numbers
  var form = document.getElementById("inputform");
  form.elements["time"].type = "number";
  form.elements["displace"].type = "number";
  form.elements["vel0"].type = "number";
  form.elements["vel"].type = "number";
  form.elements["accel"].type = "number";
  //resets unit selectors
  $("#sec").trigger("click");
  $("#meters").trigger("click");
  $("#msi").trigger("click");
  $("#ms").trigger("click");
  $("#ms2").trigger("click");
};
