// console.log("I m in index.js");
// //here we callinf the fabric instance so we can use all fabrics functionalities
// const canvas = new fabric.Canvas('canvas', {
//     width: 500,
//     height: 500,
//     // backgroundColor: 'lightblue',
// }); // here we have the id that we have craeated in the index.html

// canvas.renderAll();

// // when you create the canvas fabic will create the canvas and upper-canvas
// // it does this to do some internal things we don't have to think about those details
// // we only nee to think about the main canvas and the high level api that it has created

// // setting a image as a background
// fabric.Image.fromURL('https://cdn.pixabay.com/photo/2022/01/19/00/36/sea-6948569_960_720.jpg',(img,e) => {
//     if(e) {
//         alert('image not found');
//     } else {
//         canvas.backgroundImage = img;
//         canvas.renderAll();
//     }
// })

const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 500,
        height: 500,
    })
}

const setBackground = (url, canvas) => {
    fabric.Image.fromURL(url,(img,e) => {
        if(e) {
            alert('image not found');
        } else {
            canvas.backgroundImage = img;
            canvas.renderAll();
        }
    })
};

const canvas = initCanvas('canvas');

setBackground('https://cdn.pixabay.com/photo/2022/01/19/00/36/sea-6948569_960_720.jpg', canvas);

// mouse over
canvas.on('mouse:over', (e) => {
    console.log(e);
})

//Root object class from which all 2d shape classes inherit from