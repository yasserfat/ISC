(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "03/19/",
        launching = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > launching) {
        launching = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(launching).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            // document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



window.onresize = reportWindowSize;
function reportWindowSize() {
    
    // console.log(window.innerWidth)
    if (window.innerWidth <= 800) {
        var elem = document.getElementsByClassName("btn-area2");
        for (var k = 0; k < elem.length; k++) {
            elem[k].parentNode.removeChild(elem[k]);
        }
        document.getElementById("navlist").insertAdjacentHTML("beforeend", '<li class="btn-area2"><a href="#register" id="btn-s" class="btn-area">join us</a></li>')
    }
    else {
        var elem = document.getElementsByClassName("btn-area2");
        for (var k = 0; k < elem.length; k++) {
            elem[k].parentNode.removeChild(elem[k]);
        }
            document.getElementById("btn-container").insertAdjacentHTML("beforeend", '<a href="#register" id="btn-l" class="btn-area btn-area2">join us</a>')
        }
    }

    
    if (window.innerWidth <= 800) {
        var elem = document.getElementsByClassName("btn-area2");
        for (var k = 0; k < elem.length; k++) {
            elem[k].parentNode.removeChild(elem[k]);
        }
        document.getElementById("navlist").insertAdjacentHTML("beforeend", '<li class="btn-area2"><a href="#register" id="btn-s" class="btn-area">join us</a></li>')
    }
    else {
        var elem = document.getElementsByClassName("btn-area2");
        for (var k = 0; k < elem.length; k++) {
            elem[k].parentNode.removeChild(elem[k]);
        }
            document.getElementById("btn-container").insertAdjacentHTML("beforeend", '<a id="btn-l" href="#register" class="btn-area btn-area2">join us</a>')
        }


// Registration 

// document.getElementById("regform").addEventListener("submit",submitForm);

// function submitForm (e) {
//     e.preventDefault();

//     var name =getInputVal("name");
//     var email =getInputVal("email");
//     var phone =getInputVal("phone");
//     var institution =getInputVal("institution");
//     var purpose =getInputVal("purpose");
//     var background =getInputVal("background")
// }



const firebaseConfig = {
    apiKey: "AIzaSyCgDlxkWAg3yp2PnneTN-zJuY3oRtP0LOk",
    authDomain: "wedeventlp-91818.firebaseapp.com",
    databaseURL: "https://wedeventlp-91818-default-rtdb.firebaseio.com",
    projectId: "wedeventlp-91818",
    storageBucket: "wedeventlp-91818.appspot.com",
    messagingSenderId: "590525387786",
    appId: "1:590525387786:web:cf4715479a410fa490bbf3",
    measurementId: "G-R5C65J2X31"
  };

  firebase.initializeApp(firebaseConfig); 
  var regform = firebase.database().ref("wedeventlp")
  document.getElementById("regform").addEventListener("submit",submitForm);
function submitForm (e) {
    e.preventDefault();

    var name =getInputVal("name");
    var email =getInputVal("email");
    var phone =getInputVal("phone");
    var institution =getInputVal("institution");
    var purpose =getInputVal("purpose");
    var background =getInputVal("background");
    var option1 =getInputVal("option-1");
    var option2 =getInputVal("option-2");
    saveMessages(name,email,phone,institution,purpose,background,option1,option2)

    document.getElementById("success").style.display="block";
    document.getElementById("submit-btn").style.display="none";

}
const saveMessages=(name,email,phone,institution,purpose,background,option1,option2)=> {
    var newRegform = regform.push();
    newRegform.set({
        name: name,
        email : email,
        phone : phone,
        institution : institution,
        purpose: purpose,
        background: background,
        option1: option1,
        option2: option2


    });
};
function getInputVal(id){
    return document.getElementById(id).value;
}