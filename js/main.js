// DOM Elements

// Title
document.title = "CMI HOSPITAL"
document.title = 'ASTER ' + document.title

// List Elements
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



// var img = document.getElementById("element");

// var imgArray = new Array();

// var imageArray = ["../images/Group 2 (3).png","../images/Group 2.png","../images/Group 26.png"];



// function nextImage(element)
// {
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }

    // var listtwo, img, listLenone, i;
    // listtwo = [
    //  "",
    //  "../images/Bitmap.png",
    //  "../images/Group 26.png",
    //  "../images/Bitmap.png",
    //  "../images/Bitmap.png",];
    // listLenone = listtwo.length;
    // img = "<div class=''>";
    // for (i = 0; i < listLenone; i++) {
    //   img += "<img class='pb-3' src='https://media.geeksforgeeks.org/wp-content/uploads/20190506164011/logo3.png'    />";
    // }
    // img += "</div>";

    // document.getElementById("element").innerHTML = img;






