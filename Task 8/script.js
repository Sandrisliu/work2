console.log(
    [1, 2, 3, 4].reduce((a, b) => a + b, 0)
  )
  
  console.log(
    [].reduce((a, b) => a + b, 0)
  )
  
  function display(val) {
    document.getElementById('result').value += val
    return val
  }
  
  function solve() {
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
  }
  
  function clearScreen() {
    document.getElementById('result').value = ''
  
  }
  

