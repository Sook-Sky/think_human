const likelion = [
    {
        "name" : "김멋사",
        "dept" : "makt"
    },
    {
        "name" : "이사자",
        "dept" : "sales"
    },
    {
        "name" : "박토끼",
        "dept" : "IT"
    }

];

console.log(likelion[0].name);

for (let i = 0 ; i < 3; i++) {
    const element = likelion[i]
    if(element.name === '이사자') {
        //document.writeln(element.dept);
        console.log(element.dept)        
    }
}
