if (true) {
    console.log("I'm true");
}

var price = 500;
if (price > 200) {
    console.log("價格大於200");
}

var score = 59;
if (score >= 90) {
    console.log("優show");
} else if (score >= 60) {
    console.log("Good");
} else {
    console.log("請加油!");
}

var boxArr = document.getElementsByClassName("box");
console.log(boxArr[1]);

// 直接修改
boxArr[0].innerHTML = "BBox1";
boxArr[1].innerHTML = "BBox2";
boxArr[2].innerHTML = "BBox3";

// 使用陣列修改(use for loop)
for (i=0; i<boxArr.length; i++) {
    console.log("CCox"+ (i+1));
    boxArr[i].innerHTML = "DDbox"+ (i+1);
}

for (i=0; i<=10; i++) {
    console.log("No."+i);
}
