{
    var color = 'blue';
    function changeColor() {
        let anotherColor = 'red';
        function swapColors() {
            let tempColor = anotherColor;
            anotherColor = color;
            color = tempColor;
            console.log(this, 'swapColors');
        }
        console.log(this, 'changeColor');
        swapColors();
    }
    changeColor();
}
