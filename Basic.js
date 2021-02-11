console.log("hello from terminal")

var a=4;
var b="hello"

console.log(a)
console.log(b)


if(b=="ashish"){
    console.log("insdie 1 if")
}else if(b=="selenium"){
    console.log("insdie 2 if")
}else if(b=="risk"){
    console.log("insdie 3 if")
}
    else{
        console.log("no match so last else")
    }

for(i=0;i<4;i++){

    console.log("hello from for loop",i)
}

j=1
while(j<5){

    console.log("hello from while loop",j)
    j++
}


function add(a,b){

    return a+b
}
console.log(add(2,3));

var b=["hello","world","4","goodbye"]
console.log(b.length + " is the size of array")

for(i=0;i<b.length;i++){
    console.log("looping for loop" + b[i])
}

var myname="test"
console.log("printing char at  " + myname.charAt(2))

var newname=myname.concat("string")
console.log("concat string " + newname)

var slicename="test1 test2"
console.log("slice string " + slicename.slice(1,4))

var uppername="test1 test2"
console.log("upper string " + uppername.toUpperCase())