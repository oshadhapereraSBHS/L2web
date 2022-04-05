var sliderCount = 1;

function changeSlider() {
    sliderCount++;

    if (sliderCount % 2 == 0) {
        document.getElementById("sliderImg1").src="/images/green tshirt.png";
        document.getElementById("sliderImg2").src="/images/yellow tshirt w.png";
        document.getElementById("dot1img").src="/images/dot2.png";
        document.getElementById("dot2img").src="/images/dot.png";
        document.getElementById("sliderImg1").style.height="300px"
        document.getElementById("sliderImg1").style.height="300px"
        document.getElementById("sliderImg2").style.width="300px"
        document.getElementById("sliderImg2").style.width="300px"
        document.getElementById("sliderText").innerHTML = document.getElementById("hiddenSliderText").innerHTML
        document.getElementById("slider").style.backgroundImage="url('/images/sliderimg6.png')"
        document.getElementById("slider").style.backgroundImage="url('/images/sliderimg6.png')"
    } else {
        
        document.getElementById("sliderImg1").src="/images/background2.png";
        document.getElementById("sliderImg2").src="/images/background1.png";
        document.getElementById("dot1img").src="/images/dot.png";
        document.getElementById("dot2img").src="/images/dot2.png";
        document.getElementById("sliderText").innerHTML = document.getElementById("originalSliderText").innerHTML
        document.getElementById("slider").style.backgroundImage="url('/images/sliderimg2.png')"
    }
}
window.onload = function() {
    document.getElementById("originalSliderText").style.display = "none";
    document.getElementById("hiddenSliderText").style.display = "none";
}


