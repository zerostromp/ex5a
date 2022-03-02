function validate(p){
	if(isNaN(pace)){
		msg = "Please verify that the pace you have entered is correct!!!";
		return {"status":0,"message":msg,"hour":0,"min":0};
	}
	if(!(pace >= 3 && pace <= 10)){
		msg = "Running pace must be between 3 and 10 min/km";
		return {"status":0,"message":msg,"hour":0,"min":0};
	}
}
function finishTime(p,d){
	var min = dist * pace;
	var hour = 0;
	if(min > 60){
		hour = Math.floor(min / 60);          
		min = min % 60;
	}
	return {"hour":hour,"min":min};
}		
		
function calculate(p,d){
		var msg = "";
		var pace = parseFloat(p);
		var dist = parseInt(d);
	//---------------------------
	    var chk = validate(pace);
		if(chk !=null)return chk;
	//---------------------------
		var ft = finishTime(pace,dist);
	//---------------------------
		msg = "successfully calculated!"
		return {"status":1,"message":msg,"hour":ft.hour,"min":ft.min};
}