 name_of_the_student_arrya=[];
 function submit(){
     var name_1=document.getElementById("name_of_the_student_1").value;
     var name_2=document.getElementById("name_of_the_student_2").value;
     var name_3=document.getElementById("name_of_the_student_3").value;
     var name_4=document.getElementById("name_of_the_student_4").value;

     name_of_the_student_arrya.push(name_1);
     name_of_the_student_arrya.push(name_2);
     name_of_the_student_arrya.push(name_3);
     name_of_the_student_arrya.push(name_4);

     console.log(name_of_the_student_arrya);

     document.getElementById("display_name").innerHTML=name_of_the_student_arrya;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display="inner-block";

 }
 function sort(){
     name_of_the_student_arrya.sort();
     console.log(name_of_the_student_arrya);
     document.getElementById("display_name").innerHTML=name_of_the_student_arrya;
 }