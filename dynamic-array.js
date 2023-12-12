class DynamicArray {

  constructor(defaultSize = 4) {

    this.capacity = defaultSize;
    this.length=0;
    this.data = new Array(this.capacity)
    // Your code here
  }


  /*
  expand() {
    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
    this.capacity = newCapacity;
  }*/



  read(index) {

    return this.data[index];

    // Your code here
  }

  push(val) {

    this.length++;

    if(this.length > this.capacity)
    {
      this.resize();
    }

    this.data[this.length -1] =val;



    // Your code here
  }


  pop() {

    if(this.length >0)
    {
      this.length--;

      return this.data[this.length]
    }


    // Your code here
  }

  shift() {


    if(this.length === 0) return undefined;

    let ret= this.data[0];

    for(let i=1;i<this.length;i++)
    {
      this.data[i-1] = this.data[i];
    }

    this.length--;

    return ret;

    // Your code here
  }

  unshift(val) {

    this.length++;

    if(this.length > this.capacity) this.resize();

    for(let i=this.length-2;i>=0;i--)
    {
      this.data[i+1]= this.data[i];
    }

    this.data[0]=val;


    // Your code here
  }

  indexOf(val) {

    for(let i=0;i<this.length;i++)
    {
       if(this.data[i]===val) return i;
    }

    return -1;
    // Your code here
  }

  resize() {

    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
    this.capacity = newCapacity;
    // Your code here
  }

}


module.exports = DynamicArray;
