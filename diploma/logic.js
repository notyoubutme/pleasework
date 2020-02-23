//структура с преподавателями
		let data_elem = [
			{id:1,surname:"sur1",name:"name1",fatherName:"fath1"},
			{id:2,surname:"sur2",name:"name1",fatherName:"fath1"},
			{id:3,surname:"sur3",name:"name1",fatherName:"fath1"},
			{id:4,surname:"sur4",name:"name1",fatherName:"fath1"},
			{id:5,surname:"sur5",name:"name1",fatherName:"fath1"},
			{id:6,surname:"sur3",name:"name1",fatherName:"fath1"},
			{id:7,surname:"sur4",name:"name1",fatherName:"fath1"},
			{id:8,surname:"sur5",name:"name1",fatherName:"fath1"}
		];

		let dump;

let Commitions;
let Branch;
let BrachTest = [{branchId:3, branchName: "branch1"},{branchId:2, branchName: "branch2"},{branchId:1, branchName: "branch3"}];
let CommTest = [{cycleCommissionId:3, cycleCommissionName: "cycle1"},{cycleCommissionId:1, cycleCommissionName: "cycle3"},{cycleCommissionId:2, cycleCommissionName: "cycle2"}];

var expanded = false;
var expandedCycle = false;

	

	function Show_settings(){
	
	
	//	$('#opened').addClass('active').siblings().removeClass('active');
	//	$("#shadow").addClass('show');		

	}

function localsett(text){
	localStorage.setItem("req_text", text);
}

    function ShowSettings(){
    	$('.setting').addClass('active').siblings().removeClass('active');
    	$('.setting').removeClass('hidden');
    	$("#shadow").addClass('show');	
	}

	function CloseSetting(){
	  $('.setting').removeClass('active');
	  $('.setting').addClass('hidden');
      $('#shadow').removeClass('show');
      //Очищение блока контента
      $('#opened').empty();
	}



	
	window.onload = function (){
			let menu = document.getElementById('vertical-menu');
			let inEl = document.createElement('a');
			let objBranch = document.getElementById('Branch');

			let inner = BrachTest.map((elem) =>{
			$('#Branch').append('<input type="checkbox" name="branchId"  id='+(elem.branchId)+' value = '+(elem.branchName)+' >'+(elem.branchName)+'<br>');
			
			});

			let inlin = CommTest.map((elem)=>{
			$('#cycleCommission').append('<input type="checkbox" name="cycleCommissionId" id='+(elem.cycleCommissionId)+' value = '+(elem.cycleCommissionName)+' >'+(elem.cycleCommissionName)+'<br>');
			
			});

			let innerelem = data_elem.map((elem) =>{
			$('#vertical-menu').append('<a id='+elem.id+' onClick="show_more('+(elem.id)+')" >'+(elem.name)+" "+elem.surname+" "+elem.fatherName+'</a>');
			});
	}


	let temp_name;

//при нажатии на елемент мы прорисовываем панель  данных препода
//внести изменения для прокрутки и размера дива

document.addEventListener('click', function(event) {

	let dis;
	// проблема radio с выключением значений
    if(event.target.type == "radio"){

    		if (event.target.value == "off") {
    			event.target.value = "on";
    		}else if(event.target.value == "on"){
    			event.target.value = "off";
    		}
   


     if(event.target.value == "on"){
    	event.target.checked = true;
    	
   	 } else if(event.target.value == "off") {
    		event.target.checked = false;
										    };



    dis = document.getElementsByName(event.target.name);

    if(dis[0].checked == true ){
     dis[1].value = "off"; 
    }else if(dis[1].checked == true){
    	dis[0].value = "off";
    }

     };

});


function fethset() {
	let start = "http://localhost:8080/lecturer?";
	let url_xmlhttp = "";
	let commi = document.getElementsByName("branchId");
	let branchio = document.getElementsByName("cycleCommissionId");

//остделения 
	for (var i = commi.length - 1; i >= 0; i--) {
		if(commi[i].checked == true){
			url_xmlhttp += "&"+commi[i].name + "="+commi[i].id;
		}
		
	}


//цикловые комисии 
	for (var i = branchio.length - 1; i >= 0; i--) {
		if(branchio[i].checked == true){
			url_xmlhttp += "&"+branchio[i].name + "="+branchio[i].id;
		}
		
	}


	let poss = document.getElementById("position");
	let rat = document.getElementById("rate");
	let ratml = document.getElementsByName("rate");
	let A_day = document.getElementById("lastOrderForPosition.admissionDate.day");
	let A_month = document.getElementById("lastOrderForPosition.admissionDate.month");
	let A_year = document.getElementById("lastOrderForPosition.admissionDate.year");
	

//должность 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}

//ставка 
	if(rat.value == "" || rat.value == null){
	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}


//Статус робочий 
 	let nm = document.getElementById("jobStatus").options.selectedIndex;
	let vali = document.getElementById("jobStatus").options[nm].value;
	url_xmlhttp += "&jobStatus="+vali;
				
//Стажи
rat = document.getElementById("experienceInfo.commonExp");
ratml = document.getElementsByName("experienceInfo.commonExp");

if(rat.value == "" || rat.value == null ){

	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}

rat = document.getElementById("experienceInfo.lectExp");
ratml = document.getElementsByName("experienceInfo.lectExp");

if(rat.value == "" || rat.value == null ){
	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}

rat = document.getElementById("experienceInfo.scienceLectExp");
ratml = document.getElementsByName("experienceInfo.scienceLectExp");

if(rat.value == "" || rat.value == null){
	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}

rat = document.getElementById("experienceInfo.scienceExp");
ratml = document.getElementsByName("experienceInfo.scienceExp");

if(rat.value == "" || rat == null){
	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}

//личный номер


ratml = document.getElementsByName("lecturerCard.educationDocuments$array1:grade");

		for (var i = ratml.length - 1; i >= 0; i--) {
		if(ratml[i].checked == true){
			url_xmlhttp += "&"+ratml[i].name + "="+ratml[i].value;
		}
		
	}


//год окончания по диплому
rat = document.getElementById("lecturerCard.educationDocuments$array1:endYear");
ratml = document.getElementsByName("lecturerCard.educationDocuments$array1:endYear");

if(rat.value == "" || rat.value == null){
	}else{
		url_xmlhttp +="&"+rat.id  ;
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
				    url_xmlhttp += "$lt";
				}
		url_xmlhttp += "="+rat.value;		
	}


//Код шифр специальности
poss = document.getElementById("lecturerCard.educationDocuments$array1:specialtyCode"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}

//Название специальности
poss = document.getElementById("lecturerCard.educationDocuments$array1:specialtyTitle"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}



//Lecturer.lecturerCard.advancedTrainings$array1:duration
poss = document.getElementById("lecturerCard.advancedTrainings$array1:duration"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}
//Lecturer.lecturerCard.advancedTrainings$array1:docType
poss = document.getElementById("lecturerCard.advancedTrainings$array1:docType"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}


	let n = document.getElementById("lecturerCard.qualifyCategory").options.selectedIndex;
	let val = document.getElementById("lecturerCard.qualifyCategory").options[n].value;
	url_xmlhttp += "&lecturerCard.qualifyCategory="+val;

//дата по повишения квалификации
     A_day = document.getElementById("lecturerCard.advancedTrainings$array1:issueDate.day");
	 A_month = document.getElementById("lecturerCard.advancedTrainings$array1:issueDate.month");
	 A_year = document.getElementById("lecturerCard.advancedTrainings$array1:issueDate.year");
	
ratml = document.getElementsByName("lecturerCard.advancedTrainings$array1:issueDate");

	if( A_day.value == "" || A_day.value == null){

	}else{
		url_xmlhttp += "&"+A_day.id;
		
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
					url_xmlhttp += "$lt";
				}
		

		url_xmlhttp += "="+A_day.value;
	}

	if( A_month.value == "" || A_month == null){

	}else{
		
				url_xmlhttp += "&"+A_month.id;
				
		
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
					url_xmlhttp += "$lt";
				}
		

		url_xmlhttp += "="+A_month.value;
	}

	if( A_year.value == "" || A_year.value == null){

	}else{

		
			url_xmlhttp +=  "&"+A_year.id;
		
				if(ratml[0].checked == true){
					url_xmlhttp += "$gt";
				}
				else if(ratml[1].checked == true){
					url_xmlhttp += "$lt";
				}
		

		url_xmlhttp += "="+A_year.value;
	}







//Lecturer.lecturerCard.scientificTitles$array1:title
poss = document.getElementById("lecturerCard.scientificTitles$array1:title"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}


//Lecturer.lecturerCard.scientificSteps$array1:title
poss = document.getElementById("lecturerCard.scientificSteps$array1:title"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}


//Lecturer.lecturerCard.honours$array1:honour
poss = document.getElementById("lecturerCard.honours$array1:honour"); 
	if(poss.value == "" || poss.value == null){
	}else{
		url_xmlhttp += "&"+poss.id + "="+poss.value ;
		
	}

//sentSett(url_xmlhttp);
localsett(url_xmlhttp)
CloseSetting();
//console.log(url_xmlhttp);

}


function lecturers(){
let req = new XMLHttpRequest();

req.open("GET","http://localhost:8080/lecturer");

req.setRequestHeader("Content-Type", "application/json");

req.send();

req.onload = function() {
	if(req.status == 200){
		LectTest = JSON.parse(req.response);	

	}
};

req.onerror = function() {
	alert('Connection error.');
};









}



function sentSett(text){	
	// Lecttest - переменная с преподавателями

let req = new XMLHttpRequest();

req.open("GET",text);

req.setRequestHeader("Content-Type", "application/json");

req.send();

req.onload = function() {
	if(req.status == 200){
		LectTest = JSON.parse(req.response);	

	}
};

req.onerror = function() {
	alert('Connection error.');
};


} 

function branches(){
let req = new XMLHttpRequest();

req.open("GET","http://localhost:8080/branch");

req.setRequestHeader("Content-Type", "application/json");

req.send();

req.onload = function() {
	if(req.status == 200){
		BrachTest = JSON.parse(req.response);	

	}
};

req.onerror = function() {
	alert('Connection error.');
};


}
function Cycles(){
let req = new XMLHttpRequest();

req.open("GET","http://localhost:8080/cycle-commission");

req.setRequestHeader("Content-Type", "application/json");

req.send();

req.onload = function() {
	if(req.status == 200){
		CommTest = JSON.parse(req.response);	

	}
};

req.onerror = function() {
	alert('Connection error.');
};

}






function showCheckboxes()
{
 var checkboxes = document.getElementById("Branch");

 if(!expanded)
 {
  checkboxes.style.display = "block";
  expanded = true;
 }
 else
 {
  checkboxes.style.display = "none";
  expanded = false;
 }
 
}

function showCycle()
{
	var checkit    = document.getElementById("cycleCommission");
 if(!expandedCycle)
 {
  checkit.style.display = "block";
  expandedCycle = true;
 }
 else
 {
  checkit.style.display = "none";
  expandedCycle = false;
 }
}









	function show_more(ids)
    {

    
     let temp_u = data_elem.filter((elem) =>{

     	///вытащить значение елемента по ид
     	if(elem.id === ids){ return elem.id;}
     });
       let  question = temp_u[0].name;

      
       $('#opened').append("<p onClick='hide()'>"+(question)+"</p>");

       $('#opened').append('<form action = "javascript:;"  onsubmit="sentChange()" id = "changeme" ></form>');

       $('#changeme').append('<input id="changePoss" type="text" value ='+(question)+' onChange="sentio(value)"  />');

       $('#changeme').append('<input type="submit" />');


      $('#opened').addClass('active').siblings().removeClass('active');

      $("#shadow").addClass('show');
    }





//Функция для того чтобы прятать блок с контентом
    function hide() 
    {
      $('#opened').removeClass('active');
      $('#shadow').removeClass('show');
      //Очищение блока контента
      $('#opened').empty();
      
    }

    function logout(){
    	window.location.href = "http://localhost/diploma/login.html"
    }

