let b1 = document.querySelector('.dots');
let b2 = document.querySelector('.circle');
let text = document.querySelector('p');

const dots = {
    dot1 : {
        x : 5,
        y : 16,
    },
    dot2 : {
        x : 0,
        y : 0,
    },
    length : function() {
        let ans = Math.sqrt(Math.pow(Math.abs(this.dot2.x-this.dot1.x), 2) + Math.pow(Math.abs(this.dot2.y-this.dot1.y), 2));
        return ans;
    },
};


const circle = {
    center : {
        x : 0,
        y : 0,
    },
    radius : 4,
    area : function() {
        let area = Math.PI * Math.pow(this.radius, 2);
        return area;
    },
};

b1.onclick = function() {
    text.textContent = dots.length();
}

b2.onclick = function() {
    text.textContent = circle.area();
}