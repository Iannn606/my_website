
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function openProj(evt, projName) {
    //Declare all variables
    var i, projcontent, projlinks;

    //Get all elements with class="projcontent" and hide them 
    projcontent = document.getElementsByClassName("projcontent");
    for (i = 0; i < projcontent.length; i++) {
        projcontent[i].style.display = "none";
    }

    //Get all elements with class="projlink" and remove the class "active"
    projlinks = document.getElementsByClassName("projlink");
    for (i=0; i < projlinks.length; i++) {
        projlinks[i].className = projlinks[i].className.replace(" active","");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab 
    document.getElementById(projName).style.display = "block";
    evt.currentTarget.className += " active";
  }