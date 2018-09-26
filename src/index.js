module.exports = function solveEquation(equation) {
  // your implementation
  equation = equation.replace('x^2','/').replace('x','/').replace(/\s/g, '').split('/').map(elem => parseInt(elem));

  let desriminant = equation[1]*equation[1] - (4 * equation[0] * equation[2]);
  let x1 = (-equation[1] + Math.round(Math.sqrt(desriminant)))/(2 * equation[0]);
  let x2 = (-equation[1] - Math.round(Math.sqrt(desriminant)))/(2 * equation[0]);

  return (x1<x2) ? [x1, x2] : [x2, x1];
}