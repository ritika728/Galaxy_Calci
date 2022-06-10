class Calculate{
  constructor(pre,curr){
    this.pre = pre;
    this.curr = curr;
    this.clear();
  }
  clear(){
    this.previous = '';
    this.current = '';
    this.operate = undefined;
  }
  append(number){
    if(number === '.' && this.current.includes('.')) return 
    this.current = this.current.toString() + number.toString();   
  }

  operation(operate){
    if(this.current === '') return
    if(this.previous !== ''){ this.solve()}
    this.operate = operate;
    this.previous = this.current;
    this.current = ''; 
  }

  solve(){
    let answer
    const p = parseFloat(this.previous);
    const c= parseFloat(this.current);
    if( isNaN(p) || isNaN(c)) return;
    switch(this.operate){
      case '+':
        answer = p + c;
        breakl
      case '-':
        answer = p - c;
        break;
      case '*':
        answer = p * c;
        break;
      case '÷':
        answer = p / c;
        break;
      case '%':
        answer = p % c;
      default:
        return
    }
    this.current = answer;
    this.operate = undefined;
    this.previous = '';
  }

  delete(){
    this.current = this.current.toString().slice(0, -1);
  }

  update(){
    this.curr.innerText = this.current;
    if( this.operate != null){
      this.pre.innerText = `${this.previous} ${this.operate}`
    }
    else{
      this.pre.innerText = ''
    }
  }

}

const numbuttons = document.querySelectorAll('[data-number]');
const operatebuttons = document.querySelectorAll('[data-operation]')
const clearbutton = document.querySelector('[data-clear]');
const deletebutton = document.querySelector('[data-delete]');
const equalbutton = document.querySelector('[data-equal]');
const pre = document.querySelector('[data-previous]');
const curr = document.querySelector('[data-current]'); 

const calculate = new Calculate(pre,curr);

clearbutton.addEventListener('click',() => {
  calculate.clear();
  calculate.update();
})

numbuttons.forEach(button => {
  button.addEventListener('click', ()=> {
    calculate.append(button.innerText);
    calculate.update();
  })
})

operatebuttons.forEach(button => {
  button.addEventListener('click' , ()=> {
    calculate.operation(button.innerText);
    calculate.update();
  })
})

equalbutton.addEventListener('click', button => {
  calculate.solve();
  calculate.update();
})

deletebutton.addEventListener('click' , button => {
  calculate.delete();
  calculate.update();
})


