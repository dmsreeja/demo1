class sample{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    div(){
        console.log(Math.floor(this.y));
    }
}
var obj_sample = new sample(12,56);
obj_sample.div();