function remain(fn2) {
    console.log("this is function 1");
    fn2()
}
remain(function remain2() {
    console.log("this is function 2");
})