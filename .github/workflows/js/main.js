
const links = []
const getLinks = () => {
    for (var i = 1; i < 31; i++) {
        let link
        if (i < 10) {
            link = { label: "Day 0" + i, url: "day0" + i + "/index.html" }
        } else {
            link = { label: "Day " + i, url: "day" + i + "/index.html" }
        }
        links.push(link);
    }
}
function embedLinks() {
    getLinks();
    for (var i = 0; i < links.length; i++) {
        document.getElementById("navigation").innerHTML +=
            '<li><a href="' + links[i].url + '">' + links[i].label + '</li>';
    }
    this.getDates();
}


function getDates() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mn = today.getMinutes();
    var ss = today.getSeconds();

    if (hh > 12) {
        hh = hh - 12
    }

    if (hh < 10) {
        hh = "0" + hh
    }

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    if (mn < 10) {
        mn = "0" + mn
    }

    if (ss < 10) {
        ss = "0" + ss
    }

    var display2 = "Last Updated: " + document.lastModified;

    document.getElementById("updateDate").innerHTML = display2;
    document.getElementById("currentYear").innerHTML = yyyy;
}



