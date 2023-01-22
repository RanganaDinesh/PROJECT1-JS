function startTime() {
    var today = new Date();
    var day = today.getDay();
   
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
 //   let s = today.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    setTimeout(startTime, 1000);
    if (hour > 08 ) {
        var greet ="GOOD MORNING!! WAKE UP !!";
    }
    if(hour >= 13 ){
        var greet ="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }  if (hour >= 16 && hour < 20 ) {
        var greet ="GOOD EVENING !!";
    } if(hour >= 20){
        var greet ="GOOD NIGHT !!"
    }
    document.getElementById("greet").innerHTML = greet;
  
// if(hour >= 08 ){
//         var greet1 = "GRAB SOME HEALTHY BREAKFAST!!!";
       
//     }
// if(hour >= 13 ){
//         var greet1 = "LET'S HAVE SOME LUNCH !!";
//         box22.src = "./Assessts/Component 31 – 1.jpg";
//     }
//     if (hour >= 16) {
//         var greet1 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
//         box22.src = "./Assessts/lunch_image.jpg";
//     }  if(hour >= 20 ){
//         var greet1 = "CLOSE YOUR EYES AND GO TO SLEEP";
//         box22.src = "./Assessts/Component 32 – 1.jpg";
//     }
//     document.getElementById("greet1").innerHTML = greet1;
//     document.getElementById("box22").innerHTML = box22;
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        }
        else {
            hour = 12;
            prepand = ' AM';
        }
    };
    
    document.getElementById("hrs").innerHTML = hour;
    document.getElementById("mint").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("ten").innerHTML = prepand;

   
   

   
};
  
function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    } // for add a "0 before 10 ".
    return i;
}

function passvalue(){
    var selecttext=document.getElementById("option1").value;     
    localStorage.setItem("value",selecttext);
    document.getElementById("five1").innerHTML = localStorage.getItem("value");
   
    
    

    var selecttext1=document.getElementById("option2").value;
    localStorage.setItem("value1",selecttext1);
    document.getElementById("five2").innerHTML = localStorage.getItem("value1");
    

    var selecttext2=document.getElementById("option3").value;
    localStorage.setItem("value2",selecttext2);
    document.getElementById("five3").innerHTML=localStorage.getItem("value2");

    var selecttext3=document.getElementById("option4").value;
    localStorage.setItem("value3",selecttext3);
    document.getElementById("five4").innerHTML = localStorage.getItem("value3");

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    var select = document.getElementById("option1");
    var select1 = document.getElementById("option2");
    var select2 = document.getElementById("option3");
    var select3 = document.getElementById("option4");
    var imageDiv = document.getElementById("box22");
    var textDiv = document.getElementById("greet1");
    var button = document.getElementById("change-button");
    button.addEventListener("click", function() {
        var selectedValue = select.value;
        switch (selectedValue) {
            case "10AM-11AM":
                imageDiv.src = "./Assessts/Component 30 – 1.jpg";
             
                textDiv.innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
                break;
            // case "12PM-1PM":
            //     imageDiv.innerHTML = "";
            //     textDiv.innerHTML = "LET'S HAVE SOME LUNCH !!";
            //     break;
            // case "4PM-5PM":
            //     imageDiv.innerHTML = "";
            //     textDiv.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            //     break;
            // case "8PM-9AM":
            //     imageDiv.innerHTML = "";
            //     textDiv.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
            //     break;
               
        }
        var selectedValue1 = select1.value;
        switch (selectedValue1) {
            
            case "12PM-1PM":
                imageDiv.src = "./Assessts/Component 31 – 1.jpg";
                textDiv.innerHTML = "LET'S HAVE SOME LUNCH !!";
                break;
          
               
        }
        var selectedValue2 = select2.value;
        switch (selectedValue2) {
            
          
            case "4PM-5PM":
                imageDiv.src = "  ./Assessts/lunch_image.jpg";
                textDiv.innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
                break;
           
              
        }
        var selectedValue3 = select3.value;
        switch (selectedValue3) {
            
          
            case "8PM-9AM":
                imageDiv.src = "./Assessts/Component 32 – 1.jpg";
                textDiv.innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
                break;
               
        }
    })
    
}
    


