
// // //Date: 28-10-2019


// project.currentStyle = {
//     fillColor: 'green',
//     strokeColor: 'black'
// };

// var largeCircle = new Path.Circle(new Point(80, 50), 45);
// var smallCircle = new Path.Circle(new Point(80, 50), 30);

// function onMouseMove(event) {

//     console.log("onMouseMove");
//     smallCircle.position = event.point;
//     // console.log(largeCircle.bounds);
//     // console.log(smallCircle.bounds);

//     if (largeCircle.bounds.contains(smallCircle.bounds)) {
//         console.log("if running");

//         // If it does, fill it with green:
//         smallCircle.fillColor = 'yellow';
//         largeCircle.fillColor = 'green';
//     }

//     else {
//         console.log("Else Running")
//         smallCircle.fillColor = 'red';
//         largeCircle.fillColor = 'red';
//     }


// }







// project.currentStyle = {
//     fillColor: 'green',
//     strokeColor: 'black'
// };

// // Create a circle shaped path at {x: 80, y: 50}
// // with a radius of 45.
// var largeCircle = new Path.Circle(new Point(80, 50), 45);

// // Create a smaller circle shaped path in the same position
// // with a radius of 30.
// var circle = new Path.Circle(new Point(80, 50), 30);

// function onMouseMove(event) {
//     // Move the circle to the position of the mouse:
//     console.log("Event" + event);
//     circle.position = event.point;

//     // Check whether the bounding box of the smaller circle
//     // is contained within the bounding box of the larger item:
//     if (largeCircle.bounds.contains(circle.bounds)) {
//         // If it does, fill it with green:
//         circle.fillColor = 'yellow';
//         largeCircle.fillColor = 'green';
//     } else {
//         // If doesn't, fill it with red:
//         circle.fillColor = 'red';
//         largeCircle.fillColor = 'red';
//     }
// }



//intersects(rect[, epsilon])

var circle1 = new Path.Circle(new Point(350, 350), 45)
var circle2 = new Path.Circle(new Point(350, 350), 30)

function onMouseMove(e) {
    console.log("onMouseMove")
    circle2.position = e.point;

    if (circle1.bounds.intersects(circle2.bounds)) {
        console.log("IF is Running");
        circle1.fillColor = 'orange';
        circle2.fillColor = "yellow";
    }
    else {
        console.log("Else Is Running");
        circle1.fillColor = 'red';
        circle2.fillColor = 'red';
    }
}

//Boolean Operations

var size = new Size(50, 50);
var rect1 = new Rectangle(new Point(25, 15), size);
var rect2 = new Rectangle(new Point(50, 40), size);
// var finalRect =new Rectangle(new Point(75,65),size);

var intersected = rect1.intersect(rect2);
// var finalIntersected = finalRect.intersect(rect2);
// console.log(finalIntersected);

project.currentStyle = {
    strokeColor: "black",
}

new Path.Rectangle(rect1);
// console.log("new Path.Rectangle(rect1) "+new Path.Rectangle(rect1))
new Path.Rectangle(rect2);

var intersectionPath = new Path.Rectangle(intersected);

intersectionPath.fillColor = "red"



var unit1 = new Path.Rectangle(new Point(550,550),[80,80]);
var unit2 = new Path.Rectangle(new Point(550,550),[50,50]);

var union = unit1.unite(unit2);
console.log(union);



//Expanding of the previous rectangle
// hor=55;
// ver=100;

// var expand = rect2.expand(hor,ver)
// new Path.Rectangle(rect2);
// rect2.strokeColor="black";
// console.log(expand);



//Mathematical Operations

var point1 = new Point(10,20);
var Point2 = point1*4;
// console.log(Point2);



var point3 = Point2-point1;
// console.log(point3);


var point4 = point3+30;
// console.log(point4);


var point5 = point4/3;
// console.log(point5);


var point6 = point5 * new Point(3,2);
// console.log(point6);

Point2 = point1 + {x:100,y:100};
// console.log(Point2);



// console.log(point5);
point5 +=[10,10] 
// console.log(point5);


//Random Values
// Create a point whose x is between 0 and 50,
// and y is between 0 and 100
var result = new Point(50, 100) * Point.random();
console.log(result)




// Create a Size whose width is between 0-50  and Hheight 0-100,

var sizeResult = new Point(50,100)* Size.random() ;
// console.log("sizeResult" + sizeResult);



tool.minDistance = 10;
Console.log(tool.minDistance)
tool.maxDistance = 45;
onsole.log(tool.maxDistance)
var path;

function onMouseDown(event) {
    console.log("onMouseDown");

	path = new Path();
	path.fillColor = new Color({ hue: Math.random() * 360, saturation: 1, brightness: 1 });

	path.add(event.point);
}



