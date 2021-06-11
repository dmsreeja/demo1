function spread1(v,w,x,y,z) {
console.log(v,w,y,x,z);
    
}
let ar1= [1,2,3,4,5]
spread1(...ar1)


function spread2(v,w,...z) {
    console.log(v,w,z);
        
    }
    
    spread2(1,2,9,8,7,87,89,90)