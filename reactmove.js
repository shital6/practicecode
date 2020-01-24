
var div=document.createElement('Div');
div.id='mydiv';

document.body.appendChild(div);
var adiv = document.getElementById('mydiv')
adiv.style.width='50px';
adiv.style.height='50px';
adiv.style.color='red';
adiv.style.backgroundColor='red';
var starttime
 
function moveit(timestamp, el, dist, duration){
    //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date:
    var timestamp = timestamp || new Date().getTime()
    console.log(timestamp);
    var runtime = timestamp - starttime
    console.log(runtime);
    var progress = runtime / duration
    console.log(progress);
    progress = Math.min(progress, 1)
    el.style.left = (dist * progress).toFixed(2) + 'px'
    if (runtime < duration){ // if duration not met yet
        requestAnimationFrame(function(timestamp){
             // call requestAnimationFrame again with parameters
             console.log(timestamp);
            moveit(timestamp, el, dist, duration)
        })
    }
}
 
requestAnimationFrame(function(timestamp){
    starttime = timestamp || new Date().getTime() //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
    console.log(starttime);
    console.log(timestamp);
    moveit(timestamp, adiv, 400, 2000) // 400px over 1 second
})