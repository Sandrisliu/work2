let kgRef = document.getElementById ('kg');
let lbRef = document.getElementById ('lb');
let gRef = document.getElementById ('g');
let ozRef = document.getElementById ('oz');

let convertFromkg = () => {
  let kg = kgRef.value;
  lbRef.value = (kg * 2.2046);
  gRef.value = (kg / 0.0010000);
  ozRef.value = (kg * 35.274);
}

let convertFromlb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.2046);
  gRef.value = (lb / 0.0022046);
  ozRef.value = (lb * 16.000);
}

let convertFromg = () => {
  let g = gRef.value;
  kgRef.value = (g / 1000.0);
  lbRef.value = (g * 0.0022046);
  ozRef.value = (g * 0.035274);
}

let convertFromoz = () => {
  let oz = gRef.value;
  kgRef.value = (oz / 35.274);
  gRef.value = (oz / 0.035274);
  lbRef.value = (oz * 0.062500);
}

kgRef.addEventListener('input', convertFromkg);
gRef.addEventListener('input', convertFromg);
lbRef.addEventListener('input', convertFromlb);
ozRef.addEventListener('input', convertFromoz);
