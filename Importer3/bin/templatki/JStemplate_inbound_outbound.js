class IOLink{
	constructor(href,rev,title,txt){
		this.href=href;
		this.rev_title=rev;
		this.title=title;
		this.txt_content=txt;
	}
	
	href=null
	rev_title=null
	title=null
	txt_content=null
	linkType=null
	
	toString(){
		let clzname=this.constructor.name;
		return clzname+"{"+ "href:" + this.href+",rev_title:"+this.rev_title+",title:"+this.title+",txt_content:"+this.txt_content+"}";
	}
	
}

class InLink extends IOLink{
	linkType="inbound";
}

class OutLink extends IOLink{
	linkType="outbound";
}


var INBOUND_OUTBOUND_MAP  = {
	//"EXAMPLE.html":[
	//new InLink("whetherreport.html","whether report",null,null),
	//new InLink("whetherreport.html","whether report",null,null),
	//new OutLink("whetherreport.html","whether report",null,null)],

	>{PLACE_TO_PASTE}<

};