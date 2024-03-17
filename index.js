class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

let rect = new Rectangle(10, 20);

// Add method directly to object
rect.perimeter = function() {
    return this.width * 2 + this.height * 2;
}

console.log(rect.perimeter())

let rect2 = new Rectangle(20, 20);

try {
    // Won't work, perimeter not defined on rect2
    console.log(rect2.perimeter());
} catch (e) {
    console.error("Exception: " + e.message);
}

// Add method to prototype
Rectangle.prototype.area = function() {
    return this.width * this.height;
}

// All instances of Rectangle now have an area function
console.log(rect.area());
console.log(rect2.area());
