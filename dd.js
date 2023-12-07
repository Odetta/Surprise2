const setUp = () => {
    // $("#infoPara")
    // .fadeTo(100, 0)
    $("#infoPara").hide()
    $("#infoButton").css({margin: "auto", "text-align": "center", width: "350px", border: "2px solid black", padding: "10px", "background-color": "rgb(181, 181, 219)"})
    $("#infoPara").css({margin: "auto", "text-align": "center", width: "350px", border: "2px solid black", padding: "10px", "background-color": "rgb(224, 224, 241)"})
    $("#dwarf").css({width: "350px", height: "500px"})
};

const getInfo = () => {
    $("#infoPara")
    .fadeTo(5000, 0.1)
    .fadeTo(1000, 0.2)
    .fadeTo(1000, 0.3)
    .fadeTo(1000, 0.4)
    .fadeTo(1000, 0.5)
    .fadeTo(1000, 0.6)
    .fadeTo(1000, 0.7)
    .fadeTo(1000, 0.8)
    .fadeTo(1000, 0.9)
    .fadeTo(1000, 1)
};

$(document).ready(setUp);