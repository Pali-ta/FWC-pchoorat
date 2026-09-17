const balloon = document.getElementById('balloon');

let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

const handleClick = () => {
    size += 10;
    
    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % colors.length;
    }

    updateBalloon();
};

const handleMouseLeave = () => {
    if (size > 200) {
        size -= 5;
    }
    
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;

    updateBalloon();
};

const updateBalloon = () => {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
};

balloon.addEventListener('click', handleClick);
balloon.addEventListener('mouseleave', handleMouseLeave);