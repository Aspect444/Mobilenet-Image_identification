Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,
    constraints: {
        facingMode: "evironment"
    }
});

camera = document.getElementById("cam");
Webcam.attach("#cam")

function capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("pic").innerHTML = '<img id="captured" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
    console.log("MHBLS");
}

function identify(){
    img = document.getElementById("captured");
    classifier.classify(img, gotResult);
}

 function gotResult(error, result){
     if(error){
         console.error(error);
     }
     else{
         console.log(result);
         document.getElementById("object").innerHTML = result[0].label;
     }
 }