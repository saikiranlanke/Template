// DOM Elements

// Title
document.title = "CMI HOSPITAL"
document.title = 'ASTER ' + document.title

// List 
    var listone, text, listLen, i;
    listone = [
    "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.",
    "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.",
    "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.",
    "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent.",
    "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad."];
    listLen = listone.length;

    text = "<ol>";
    for (i = 0; i < listLen; i++) {
      text += "<li class='p-icon'>" + listone[i] + "</li>";
    }
    text += "</ol>";

    document.getElementById("types").innerHTML = text;




    $(document).ready(function(){
    GetLinks();
    });
    function GetLinks() {
            var row = '';
            var obj = {
  "1.png": "Failure to thrive – not gaining weight and height as per the age norms",
  "2.png": "Infections warranting multiple hospitalizations",
  "3.png": "Requirement of intravenous antibiotics to clear infections",
  "4.png": "2 or more episodes of pneumonia",
  "5.png": "Family history of death of children at young age due to immune deficiency ",
  "6.png": "Repeated episodes of diarrhea",
  "7.png": "2 or more episodes of sinus infections within a year",
  "8.png": "2 or more episodes of ear discharge",
  "9.png": "Repeated skin infections",
  "10.png": "Repeated abscess formation (liver abscess, brain abscess)",
};
            $.each(obj, function (key, val) {
                row += "<div class='col-md-3 p-3'><div class='p-3 b-light'><div class='w-50'><img src='images/"+key+"' class='pb-3'></div><p class='f-l'>"+val+"</p></div></div>";
                
            });

           $("#icon").html(row);
        }


