Webcam.set({
    width:280,
    height:400,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'" />';
    });
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h4ouiZkHX/model.json',model_loaded);

 function model_loaded(){
    console.log('loaded');
 }
 function check(){
    img=document.getElementById('picture');
    classifier.classify(img, got_result);
 }
 function got_result(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;

document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence.toFixed(3)*100)+"%";
}

 }