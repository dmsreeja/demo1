function App(name,compatibility,domain,size) {
    this.name=name
    this.compatibility=compatibility
    this.domain=domain
    this.size=size
    this.isAdmin= false
    }

var a1=new App("app1","android","health","4.5mb")
console.log(a1);
var a2=new App("app2","ios","entertainment","5mb")
console.log(a2);