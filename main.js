function start() {

    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_82tbx0uv/model.json", modelReady);
}

function modelReady() {

    classifier.classify(gotresult);
}

function gotresult(error,result) {


}