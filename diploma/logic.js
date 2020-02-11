
		let data_elem = [
			{name:"name1", id:"id1"},
			{name:"name2", id: "id2"},
			{name:"name3", id: "id3"},
			{name:"name4", id: "id4"},
			{name:"name5", id: "id5"},
			{name:"name6", id: "id6"},
			{name:"name7", id: "id7"},
			{name:"name4", id: "id8"},
			{name:"name5", id: "id9"},
			{name:"name6", id: "id10"},
			{name:"name7", id: "id11"}
		];

		let dump;

	function Show_settings(){
		var setchange = document.createElement("input");
		setchange.type = "text";
		setchange.value = "input please";
		setchange.id = "nam";
		let htmltext = '<input type="text" id ="nam">';
		$('#opened').append('<form id="setform" action="javascript:;" onsubmit ="callsetings()"></form>');
		$('#setform').append('<input type = "text" id ="nam"  onChange = "loaddump(this.value)"/><input type = "submit" value = "Click" onclick = "setchange(); hide();"/>');
		$('#opened').addClass('active').siblings().removeClass('active');
		$("#shadow").addClass('show');
	}

function loaddump(val){
	dump = val;

}

	function setchange(){
		$('#setform').submit();
		$('#setform').submit((event)=>{
			event.preventDefault();
			callsetings();
		});
	}

	function callsetings(){
		alert(dump);
	}

	window.onload = function (){
			let menu = document.getElementById('vertical-menu');
			let inEl = document.createElement('a');
			
			let innerelem = data_elem.map((elem) =>{

			//	console.log(elem.id);

			$('#vertical-menu').append('<a id='+(elem.id)+' value='+(elem.value)+' onClick="show_more(id, value)" >'+(elem.name)+'</a>');
			});
	}


	let temp_name;

//при нажатии на елемент мы прорисовываем панель инзменеия данных препода
	function show_more(ids, val)
    {

    
     let temp_u = data_elem.map((elem) =>{
     	if(elem.id === ids){return elem.name;}
     });
     let  question = val;

       $('#opened').append("<p onClick='hide()'>"+(question)+"</p>");

       $('#opened').append('<form action = "javascript:;"  onsubmit="sentChange()" id = "changeme" ></form>');

       $('#changeme').append('<input id="changePoss" type="text" value = '+(question)+' qest ='+(question)+' onChange="sentio(qest)"  />');

       $('#changeme').append('<input type="submit" />');

      $('#opened').addClass('active').siblings().removeClass('active');

      $("#shadow").addClass('show');
    }

    function sentChange()
    {

    }
    function sentio(val)
    {
    	console.log(val);
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

