document.addEventListener("DOMContentLoaded", setup);

function setup() {
  // Start
  var b = document.getElementById("start");
  b.addEventListener("click", sicht);
  // Antworten 1
  var x = document.getElementById("btn1");
  var y = document.getElementById("btn2");
  var z = document.getElementById("btn3");
  var w = document.getElementById("btn4");
  x.addEventListener("click", antwort1);
  y.addEventListener("click", antwort2);
  z.addEventListener("click", antwort3);
  w.addEventListener("click", antwort4);

//Antworten 2
  var a21 = document.getElementById("btn5");
  var a22 = document.getElementById("btn6");
  var a23 = document.getElementById("btn7");
  var a24 = document.getElementById("btn8");
  a21.addEventListener("click", antwort5);
  a22.addEventListener("click", antwort6);
  a23.addEventListener("click", antwort7);
  a24.addEventListener("click", antwort8);

  //Antworten 3
  var a31 = document.getElementById("btn9");
  var a32 = document.getElementById("btn10");
  var a33 = document.getElementById("btn11");
  var a34 = document.getElementById("btn12");
  a31.addEventListener("click", antwort9);
  a32.addEventListener("click", antwort10);
  a33.addEventListener("click", antwort11);
  a34.addEventListener("click", antwort12);

  //Antworten 4
  var a41 = document.getElementById("btn13");
  var a42 = document.getElementById("btn14");
  var a43 = document.getElementById("btn15");
  var a44 = document.getElementById("btn16");
  a41.addEventListener("click", antwort13);
  a42.addEventListener("click", antwort14);
  a43.addEventListener("click", antwort15);
  a44.addEventListener("click", antwort16);

//Antworten 5
  var a51 = document.getElementById("btn17");
  var a52 = document.getElementById("btn18");
  var a53 = document.getElementById("btn19");
  var a54 = document.getElementById("btn20");
  a51.addEventListener("click", antwort17);
  a52.addEventListener("click", antwort18);
  a53.addEventListener("click", antwort19);
  a54.addEventListener("click", antwort20);

  //Antworten 6
  var a61 = document.getElementById("btn21");
  var a62 = document.getElementById("btn22");
  var a63 = document.getElementById("btn23");
  var a64 = document.getElementById("btn24");
  a61.addEventListener("click", antwort21);
  a62.addEventListener("click", antwort22);
  a63.addEventListener("click", antwort23);
  a64.addEventListener("click", antwort24);
  //Antworten 7
  var a71 = document.getElementById("btn25");
  var a72 = document.getElementById("btn26");
  var a73 = document.getElementById("btn27");
  var a74 = document.getElementById("btn28");
  a71.addEventListener("click", antwort25);
  a72.addEventListener("click", antwort26);
  a73.addEventListener("click", antwort27);
  a74.addEventListener("click", antwort28);
  //Antworten 8
  var a81 = document.getElementById("btn29");
  var a82 = document.getElementById("btn30");
  var a83 = document.getElementById("btn31");
  var a84 = document.getElementById("btn32");
  a81.addEventListener("click", antwort29);
  a82.addEventListener("click", antwort30);
  a83.addEventListener("click", antwort31);
  a84.addEventListener("click", antwort32);
  //Antworten 9
  var a91 = document.getElementById("btn33");
  var a92 = document.getElementById("btn34");
  var a93 = document.getElementById("btn35");
  var a94 = document.getElementById("btn36");
  a91.addEventListener("click", antwort33);
  a92.addEventListener("click", antwort34);
  a93.addEventListener("click", antwort35);
  a94.addEventListener("click", antwort36);
  //Antworten 10
  var a101 = document.getElementById("btn37");
  var a102 = document.getElementById("btn38");
  var a103 = document.getElementById("btn39");
  var a104 = document.getElementById("btn40");
  a101.addEventListener("click", antwort37);
  a102.addEventListener("click", antwort38);
  a103.addEventListener("click", antwort39);
  a104.addEventListener("click", antwort40);
//ende
  var a = document.getElementById("end");
  var a2 = document.getElementById("side");
  a.addEventListener("click", end);
  a2.addEventListener("click", end);
  fragewahl = 1
  m = 0;
  c = 0;
  m2 = 0;
  m3 = 0;
  m4 = 0;
  m5 = 0;
  m6 = 0;
  m7 = 0;
  m8 = 0;
  m9 = 0;
  m10 = 0;
}

//sicht
function sicht() {
  hide.style.visibility="visible";
}
// Antworten auf Frage 1
function antwort1() {
  if ( fragewahl == 1) {
    n = 1;
    this.style.background="orange";
    this.style.color="black";

    btn2.style.background="#900F00";
    btn2.style.color="white";
    btn3.style.background="#900F00";
    btn3.style.color="white";
    btn4.style.background="#900F00";
    btn4.style.color="white";

    if (m == 0) {
      m = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort2() {
  if ( fragewahl == 1) {
    n = 2;
    this.style.background="orange";
    this.style.color="black";

    btn1.style.background="#900F00";
    btn1.style.color="white";
    btn3.style.background="#900F00";
    btn3.style.color="white";
    btn4.style.background="#900F00";
    btn4.style.color="white";

    if (m == 0) {
      m = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort3() {
  if ( fragewahl == 1) {
    n = 3;
    this.style.background="orange";
    this.style.color="black";

    btn2.style.background="#900F00";
    btn2.style.color="white";
    btn1.style.background="#900F00";
    btn1.style.color="white";
    btn4.style.background="#900F00";
    btn4.style.color="white";

    if (m == 0) {
      m = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort4() {
  if ( fragewahl == 1) {
    n = 4;
    this.style.background="orange";
    this.style.color="black";

    btn2.style.background="#900F00";
    btn2.style.color="white";
    btn1.style.background="#900F00";
    btn1.style.color="white";
    btn3.style.background="#900F00";
    btn3.style.color="white";

    if (m == 0) {
      m = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

// Antworten auf Frage 2

function antwort5() {
  if ( fragewahl == 1) {
    n2 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn6.style.background="#900F00";
    btn6.style.color="white";
    btn7.style.background="#900F00";
    btn7.style.color="white";
    btn8.style.background="#900F00";
    btn8.style.color="white";

    if (m2 == 0) {
      m2 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort6() {
  if ( fragewahl == 1) {
    n2 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn5.style.background="#900F00";
    btn5.style.color="white";
    btn7.style.background="#900F00";
    btn7.style.color="white";
    btn8.style.background="#900F00";
    btn8.style.color="white";

    if (m2 == 0) {
      m2 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort7() {
  if ( fragewahl == 1) {
    n2 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn5.style.background="#900F00";
    btn5.style.color="white";
    btn6.style.background="#900F00";
    btn6.style.color="white";
    btn8.style.background="#900F00";
    btn8.style.color="white";

    if (m2 == 0) {
      m2 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort8() {
  if ( fragewahl == 1) {
    n2 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn5.style.background="#900F00";
    btn5.style.color="white";
    btn6.style.background="#900F00";
    btn6.style.color="white";
    btn7.style.background="#900F00";
    btn7.style.color="white";

    if (m2 == 0) {
      m2 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
// Antwaorten auf Frage 3

function antwort9() {
  if ( fragewahl == 1) {
    n3 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn10.style.background="#900F00";
    btn10.style.color="white";
    btn11.style.background="#900F00";
    btn11.style.color="white";
    btn12.style.background="#900F00";
    btn12.style.color="white";

    if (m3 == 0) {
      m3 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort10() {
  if ( fragewahl == 1) {
    n3 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn9.style.background="#900F00";
    btn9.style.color="white";
    btn11.style.background="#900F00";
    btn11.style.color="white";
    btn12.style.background="#900F00";
    btn12.style.color="white";

    if (m3 == 0) {
      m3 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort11() {
  if ( fragewahl == 1) {
    n3 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn10.style.background="#900F00";
    btn10.style.color="white";
    btn9.style.background="#900F00";
    btn9.style.color="white";
    btn12.style.background="#900F00";
    btn12.style.color="white";

    if (m3 == 0) {
      m3 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort12() {
  if ( fragewahl == 1) {
    n3 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn10.style.background="#900F00";
    btn10.style.color="white";
    btn11.style.background="#900F00";
    btn11.style.color="white";
    btn9.style.background="#900F00";
    btn9.style.color="white";

    if (m3 == 0) {
      m3 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

// antwort auf frage 4
function antwort13() {
  if ( fragewahl == 1) {
    n4 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn14.style.background="#900F00";
    btn14.style.color="white";
    btn15.style.background="#900F00";
    btn15.style.color="white";
    btn16.style.background="#900F00";
    btn16.style.color="white";

    if (m4 == 0) {
      m4 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort14() {
  if ( fragewahl == 1) {
    n4 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn13.style.background="#900F00";
    btn13.style.color="white";
    btn15.style.background="#900F00";
    btn15.style.color="white";
    btn16.style.background="#900F00";
    btn16.style.color="white";

    if (m4 == 0) {
      m4 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

function antwort15() {
  if ( fragewahl == 1) {
    n4 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn14.style.background="#900F00";
    btn14.style.color="white";
    btn13.style.background="#900F00";
    btn13.style.color="white";
    btn16.style.background="#900F00";
    btn16.style.color="white";

    if (m4 == 0) {
      m4 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort16() {
  if ( fragewahl == 1) {
    n4 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn14.style.background="#900F00";
    btn14.style.color="white";
    btn15.style.background="#900F00";
    btn15.style.color="white";
    btn13.style.background="#900F00";
    btn13.style.color="white";

    if (m4 == 0) {
      m4 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
// Antworten frage 5
function antwort17() {
  if ( fragewahl == 1) {
    n5 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn18.style.background="#900F00";
    btn18.style.color="white";
    btn19.style.background="#900F00";
    btn19.style.color="white";
    btn20.style.background="#900F00";
    btn20.style.color="white";

    if (m5 == 0) {
      m5 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort18() {
  if ( fragewahl == 1) {
    n5 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn17.style.background="#900F00";
    btn17.style.color="white";
    btn19.style.background="#900F00";
    btn19.style.color="white";
    btn20.style.background="#900F00";
    btn20.style.color="white";

    if (m5 == 0) {
      m5 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort19() {
  if ( fragewahl == 1) {
    n5 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn18.style.background="#900F00";
    btn18.style.color="white";
    btn17.style.background="#900F00";
    btn17.style.color="white";
    btn20.style.background="#900F00";
    btn20.style.color="white";

    if (m5 == 0) {
      m5 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort20() {
  if ( fragewahl == 1) {
    n5 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn18.style.background="#900F00";
    btn18.style.color="white";
    btn19.style.background="#900F00";
    btn19.style.color="white";
    btn17.style.background="#900F00";
    btn17.style.color="white";

    if (m5 == 0) {
      m5 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
// Antworten auf Frage 5

function antwort21() {
  if ( fragewahl == 1) {
    n6 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn22.style.background="#900F00";
    btn22.style.color="white";
    btn23.style.background="#900F00";
    btn23.style.color="white";
    btn24.style.background="#900F00";
    btn24.style.color="white";

    if (m6 == 0) {
      m6 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort22() {
  if ( fragewahl == 1) {
    n6 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn21.style.background="#900F00";
    btn21.style.color="white";
    btn23.style.background="#900F00";
    btn23.style.color="white";
    btn24.style.background="#900F00";
    btn24.style.color="white";

    if (m6 == 0) {
      m6 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort23() {
  if ( fragewahl == 1) {
    n6 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn22.style.background="#900F00";
    btn22.style.color="white";
    btn21.style.background="#900F00";
    btn21.style.color="white";
    btn24.style.background="#900F00";
    btn24.style.color="white";

    if (m6 == 0) {
      m6 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort24() {
  if ( fragewahl == 1) {
    n6 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn22.style.background="#900F00";
    btn22.style.color="white";
    btn23.style.background="#900F00";
    btn23.style.color="white";
    btn21.style.background="#900F00";
    btn21.style.color="white";

    if (m6 == 0) {
      m6 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
//Antworten auf Frage 7
function antwort25() {
  if ( fragewahl == 1) {
    n7 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn26.style.background="#900F00";
    btn26.style.color="white";
    btn27.style.background="#900F00";
    btn27.style.color="white";
    btn28.style.background="#900F00";
    btn28.style.color="white";

    if (m7 == 0) {
      m7 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort26() {
  if ( fragewahl == 1) {
    n7 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn25.style.background="#900F00";
    btn25.style.color="white";
    btn27.style.background="#900F00";
    btn27.style.color="white";
    btn28.style.background="#900F00";
    btn28.style.color="white";

    if (m7 == 0) {
      m7 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort27() {
  if ( fragewahl == 1) {
    n7 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn26.style.background="#900F00";
    btn26.style.color="white";
    btn25.style.background="#900F00";
    btn25.style.color="white";
    btn28.style.background="#900F00";
    btn28.style.color="white";

    if (m7 == 0) {
      m7 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort28() {
  if ( fragewahl == 1) {
    n7 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn26.style.background="#900F00";
    btn26.style.color="white";
    btn27.style.background="#900F00";
    btn27.style.color="white";
    btn25.style.background="#900F00";
    btn25.style.color="white";

    if (m7 == 0) {
      m7 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
//Antworten auf Frage 8
function antwort29() {
  if ( fragewahl == 1) {
    n8 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn32.style.background="#900F00";
    btn32.style.color="white";
    btn30.style.background="#900F00";
    btn30.style.color="white";
    btn31.style.background="#900F00";
    btn31.style.color="white";

    if (m8 == 0) {
      m8 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort30() {
  if ( fragewahl == 1) {
    n8 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn32.style.background="#900F00";
    btn32.style.color="white";
    btn29.style.background="#900F00";
    btn29.style.color="white";
    btn31.style.background="#900F00";
    btn31.style.color="white";

    if (m8 == 0) {
      m8 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort31() {
  if ( fragewahl == 1) {
    n8 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn32.style.background="#900F00";
    btn32.style.color="white";
    btn30.style.background="#900F00";
    btn30.style.color="white";
    btn29.style.background="#900F00";
    btn29.style.color="white";

    if (m8 == 0) {
      m8 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort32() {
  if ( fragewahl == 1) {
    n8 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn29.style.background="#900F00";
    btn29.style.color="white";
    btn30.style.background="#900F00";
    btn30.style.color="white";
    btn31.style.background="#900F00";
    btn31.style.color="white";

    if (m8 == 0) {
      m8 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
//Antworten auf Frage 9
function antwort33() {
  if ( fragewahl == 1) {
    n9 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn34.style.background="#900F00";
    btn34.style.color="white";
    btn35.style.background="#900F00";
    btn35.style.color="white";
    btn36.style.background="#900F00";
    btn36.style.color="white";

    if (m9 == 0) {
      m9 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort34() {
  if ( fragewahl == 1) {
    n9 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn33.style.background="#900F00";
    btn33.style.color="white";
    btn35.style.background="#900F00";
    btn35.style.color="white";
    btn36.style.background="#900F00";
    btn36.style.color="white";

    if (m9 == 0) {
      m9 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort35() {
  if ( fragewahl == 1) {
    n9 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn34.style.background="#900F00";
    btn34.style.color="white";
    btn33.style.background="#900F00";
    btn33.style.color="white";
    btn36.style.background="#900F00";
    btn36.style.color="white";

    if (m9 == 0) {
      m9 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort36() {
  if ( fragewahl == 1) {
    n9 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn34.style.background="#900F00";
    btn34.style.color="white";
    btn35.style.background="#900F00";
    btn35.style.color="white";
    btn33.style.background="#900F00";
    btn33.style.color="white";

    if (m9 == 0) {
      m9 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
// Antwort auf frage 10
function antwort37() {
  if ( fragewahl == 1) {
    n10 = 1;
    this.style.background="orange";
    this.style.color="black";

    btn38.style.background="#900F00";
    btn38.style.color="white";
    btn39.style.background="#900F00";
    btn39.style.color="white";
    btn40.style.background="#900F00";
    btn40.style.color="white";

    if (m10 == 0) {
      m10 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort38() {
  if ( fragewahl == 1) {
    n10 = 2;
    this.style.background="orange";
    this.style.color="black";

    btn37.style.background="#900F00";
    btn37.style.color="white";
    btn39.style.background="#900F00";
    btn39.style.color="white";
    btn40.style.background="#900F00";
    btn40.style.color="white";

    if (m10 == 0) {
      m10 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}
function antwort39() {
  if ( fragewahl == 1) {
    n10 = 3;
    this.style.background="orange";
    this.style.color="black";

    btn38.style.background="#900F00";
    btn38.style.color="white";
    btn37.style.background="#900F00";
    btn37.style.color="white";
    btn40.style.background="#900F00";
    btn40.style.color="white";

    if (m10 == 0) {
      m10 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}


function antwort40() {
  if ( fragewahl == 1) {
    n10 = 4;
    this.style.background="orange";
    this.style.color="black";

    btn38.style.background="#900F00";
    btn38.style.color="white";
    btn39.style.background="#900F00";
    btn39.style.color="white";
    btn37.style.background="#900F00";
    btn37.style.color="white";

    if (m10 == 0) {
      m10 = 1;
      c = c+1;
      aufg.innerHTML= c + "/10";
    }
  }
}

// Ende
function end() {
  fragewahl = 0; // Blockiert das keine änderungen vorgenomen werden können
  var p = 0
  //F1
  if (n == 2) {
    p = p + 1;
    btn2.style.background="green";
    btn2.style.color="white";
    }
    else {
      btn2.style.background="lightgreen";
      btn2.style.color="white";
  }
  //F2
  if (n2 == 1) {
    p = p + 1;
    btn5.style.background="green";
    btn5.style.color="white";
  }
  else {
    btn5.style.background="lightgreen";
    btn5.style.color="white";
}
  //F3
  if (n3 == 2) {
    p = p + 1;
    btn10.style.background="green";
    btn10.style.color="white";
  }
  else {
    btn10.style.background="lightgreen";
    btn10.style.color="white";
}
  //F4
  if (n4 == 3) {
    p = p + 1;
    btn15.style.background="green";
    btn15.style.color="white";
  }
  else {
    btn15.style.background="lightgreen";
    btn15.style.color="white";
}
  //F5
  if (n5 == 4) {
    p = p + 1;
    btn20.style.background="green";
    btn20.style.color="white";
  }
  else {
    btn20.style.background="lightgreen";
    btn20.style.color="white";
}
//F6
if (n6 == 1) {
  p = p + 1;
  btn21.style.background="green";
  btn21.style.color="white";
}
else {
  btn21.style.background="lightgreen";
  btn21.style.color="white";
}
//F7
if (n7 == 4) {
  p = p + 1;
  btn28.style.background="green";
  btn28.style.color="white";
}
else {
  btn28.style.background="lightgreen";
  btn28.style.color="white";
}
//F8
if (n8 == 1) {
  p = p + 1;
  btn29.style.background="green";
  btn29.style.color="white";
}
else {
  btn29.style.background="lightgreen";
  btn29.style.color="white";
}
//F9
if (n9 == 3) {
  p = p + 1;
  btn35.style.background="green";
  btn35.style.color="white";
}
else {
  btn35.style.background="lightgreen";
  btn35.style.color="white";
}
//F10
if (n10 == 4) {
  p = p + 1;
  btn40.style.background="green";
  btn40.style.color="white";
}
else {
  btn40.style.background="lightgreen";
  btn40.style.color="white";
}


/*-----Ausgabe------------------------------------*/
  punktzahl.innerHTML= p + "/10";
  punktzahl2.innerHTML= p + "/10";
}


/*-----Timer-----------------------*/
var b = document.getElementById("start");
b.addEventListener("click", startTimer);
var a = document.getElementById("end");
a.addEventListener("click", stopTimer);
var a2 = document.getElementById("side");
a2.addEventListener("click", stopTimer);

var dStartTime;
var power = false;
var begin = 0


function startTimer(){
  if (begin == 0) {
    power = true;
    dStartTime = new Date();
    showTime();
    begin = 1;
  }

  }
function stopTimer(){
  power = false;
  }


function showTime(){
    if( !power )
      return;
  var dDeltaTime = new Date();
  dDeltaTime.setTime( new Date() - dStartTime );

  var sMin = dDeltaTime.getMinutes();
  var sSec = dDeltaTime.getSeconds();
  sMin = ( sMin < 10 ) ? "0" + sMin : sMin;
  sSec = ( sSec < 10 ) ? "0" + sSec : sSec;
  zeit.innerHTML = sMin + ":" + sSec;
  zeit2.innerHTML = sMin + ":" + sSec;
  setTimeout('showTime()', 1000);
}
/*--------Sidebar-----------------------------------------------------------------------*/
  var sidec = document.getElementById("close");
  sidec.addEventListener("click", sidebarc);
  var sideo = document.getElementById("offnen");
  sideo.addEventListener("click", sidebaro);

function sidebarc() {
  stats.style.visibility="hidden";
  offnen.style.visibility="visible";
}

function sidebaro() {
  stats.style.visibility="visible";
  offnen.style.visibility="hidden";
}
