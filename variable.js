var num = 10;
var str = "Hello, TypeScript!";
var bool = true;
var arr = [1, 2, 3];
var tuple = ["apple", 5];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var anyVar = 5;
var voidVar = undefined;
var nullVar = null;
var undefinedVar = undefined;
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Array:", arr);
console.log("Tuple:", tuple);
console.log("Enum:", Color);
console.log("Any:", anyVar);
console.log("Void:", voidVar);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
