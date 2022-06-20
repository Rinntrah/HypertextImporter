class FragmentHrefs{
	constructor(map){
		this.map=map;
	}
	
	map=null
	
	toString(){
		let clzname=this.constructor.name;
		return ""+clzname+"map="+map;
	}
	
}

//reprezentuje hrefy, które wcześniej znajdowały sie w stopce
var FRAGMENT_HREFS  = {
	//"TEST.html":{0:"something.html",1:"otherthings.html"},
	>{PLACE_TO_PASTE}<

};

