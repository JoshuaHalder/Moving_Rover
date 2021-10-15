var canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
rover_height=90;
rover_width=100;
background_image="mars.jpg";
rover_img="rover.png";

rover_X=10;
rover_Y=10;

function add(){
    background_tag=new Image();
    background_tag.onload=upload_bg;
    background_tag.src=background_image;

    rover_tag=new Image();
    rover_tag.onload=upload_rover;
     rover_tag.src=rover_img;
}

function upload_bg(){
    ctx.drawImage(background_tag,0,0,canvas.width,canvas.height);
}


function upload_rover(){
    ctx.drawImage(rover_tag,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(key_pressed=='38'){
        up();
        console.log("up");
    }

    if(key_pressed=='40'){
        down();
        console.log("down");
    }

    if(key_pressed=='37'){
        left();
        console.log("left");
    }

    if(key_pressed=='39'){
       right();
        console.log("right");
    }
}

function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        upload_bg();
        upload_rover();
    }
}
function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        upload_bg();
        upload_rover();
    }
}
function left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        upload_bg();
        upload_rover();
    }
}
function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        upload_bg();
        upload_rover();
    }
}