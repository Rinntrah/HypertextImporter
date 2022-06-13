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

	"tokeeptheoutsideout.html":[
new OutLink("Rorschach.html", "Rorschach", null,null),new OutLink("Rorschach.html", "Rorschach", null,null),],
"Thisform.html":[
new OutLink("Random.html", "selected at random", null,null),new OutLink("Paths.html", "paths", null,null),new OutLink("Surprise.html", "The aim", null,null),new OutLink("Rorschach.html", "the production of meaning", null,null),new OutLink("Random.html", "selected at random", null,null),new OutLink("Paths.html", "paths", null,null),new OutLink("Random.html", "selected at random", null,null),new OutLink("Paths.html", "paths", null,null),new OutLink("Surprise.html", "The aim", null,null),new OutLink("Rorschach.html", "the production of meaning", null,null),new OutLink("Surprise.html", "The aim", null,null),new OutLink("Rorschach.html", "the production of meaning", null,null),],
"Thetexts.html":[
],
"Whiteman.html":[
new OutLink("Derrida.html", "Derrida", null,null),new OutLink("Derrida.html", "Derrida", null,null),],
"Siebert.html":[
new OutLink("Whiteman.html", "Whiteman", null,null),new OutLink("Whiteman.html", "Whiteman", null,null),],
"Schu╠łrmann.html":[
new OutLink("Whiteman.html", "Whiteman", null,null),new OutLink("Whiteman.html", "Whiteman", null,null),],
"Reyburn.html":[
new OutLink("Hegel_1.html", "Hegel_1", null,null),new OutLink("Hegel_1.html", "Hegel_1", null,null),],
"Portoghesi.html":[
],
"Norris.html":[
new OutLink("Crook.html", "Crook", null,null),new OutLink("Crook.html", "Crook", null,null),],
"Nancy.html":[
new OutLink("Kabat-Zinn.html", "Kabat-Zinn", null,null),new OutLink("Kabat-Zinn.html", "Kabat-Zinn", null,null),],
"Maruyama.html":[
],
"Kabat-Zinn.html":[
new OutLink("Berman.html", "Berman", null,null),new OutLink("Berman.html", "Berman", null,null),],
"Ho╠łderlin.html":[
new OutLink("Deleuze.html", "Deleuze", null,null),new OutLink("Deleuze.html", "Deleuze", null,null),],
"Hegel_2.html":[
new OutLink("Siebert.html", "Siebert", null,null),new OutLink("Siebert.html", "Siebert", null,null),],
"Hegel_1.html":[
new OutLink("Hegel_2.html", "Hegel_2", null,null),new OutLink("Hegel_2.html", "Hegel_2", null,null),],
"Fisher.html":[
new OutLink("Maruyama.html", "Maruyama", null,null),new OutLink("Maruyama.html", "Maruyama", null,null),],
"Dewey.html":[
],
"Derrida.html":[
],
"Deleuze.html":[
],
"Crook.html":[
],
"Cicero.html":[
],
"Brehier.html":[
],
"Berman.html":[
],
"Anderson.html":[
],
"Surprise.html":[
new OutLink("Random.html", "random selections, in order to see how meaning would be generated in the hypertext during different readings. I had planned", null,null),new OutLink("Rorschach.html", "about myself", null,null),new OutLink("Anoralculturehasno.html", "oddly personal", null,null),new OutLink("Immediatereactions.html", "some notes", null,null),new OutLink("Random.html", "random selections, in order to see how meaning would be generated in the hypertext during different readings. I had planned", null,null),new OutLink("Rorschach.html", "about myself", null,null),new OutLink("Anoralculturehasno.html", "oddly personal", null,null),new OutLink("Immediatereactions.html", "some notes", null,null),new OutLink("Random.html", "random selections, in order to see how meaning would be generated in the hypertext during different readings. I had planned", null,null),new OutLink("Rorschach.html", "about myself", null,null),new OutLink("Anoralculturehasno.html", "oddly personal", null,null),new OutLink("Immediatereactions.html", "some notes", null,null),],
"Rorschach.html":[
],
"Random.html":[
],
"Paths.html":[
new OutLink("Thetexts/Fisher.html", "-discovery-", null,null),new OutLink("Thetexts/Brehier.html", "-r1-", null,null),new OutLink("Thetexts/Kabat-Zinn.html", "-r2 -", null,null),new OutLink("Thetexts/Whiteman.html", "-r3-", null,null),new OutLink("Thetexts/Höderlin.html", "-r4-", null,null),new OutLink("Thetexts/Fisher.html", "-discovery-", null,null),new OutLink("Thetexts/Fisher.html", "-discovery-", null,null),new OutLink("Thetexts/Brehier.html", "-r1-", null,null),new OutLink("Thetexts/Kabat-Zinn.html", "-r2 -", null,null),new OutLink("Thetexts/Whiteman.html", "-r3-", null,null),new OutLink("Thetexts/Höderlin.html", "-r4-", null,null),new OutLink("Thetexts/Brehier.html", "-r1-", null,null),new OutLink("Thetexts/Kabat-Zinn.html", "-r2 -", null,null),new OutLink("Thetexts/Whiteman.html", "-r3-", null,null),new OutLink("Thetexts/Höderlin.html", "-r4-", null,null),new OutLink("Thetexts/Kabat-Zinn.html", "-r2 -", null,null),new OutLink("Thetexts/Whiteman.html", "-r3-", null,null),new OutLink("Thetexts/Höderlin.html", "-r4-", null,null),],
"Immediatereactions.html":[
],
"Anoralculturehasno.html":[
new OutLink("Anoralculturehasno/WalterOngOralityandLiteracy.html", "\"An oral culture has no vehicle so neutral as a list.\"", null,null),new OutLink("Anoralculturehasno/WalterOngOralityandLiteracy.html", "\"An oral culture has no vehicle so neutral as a list.\"", null,null),new OutLink("Anoralculturehasno/WalterOngOralityandLiteracy.html", "\"An oral culture has no vehicle so neutral as a list.\"", null,null),],
"WalterOngOralityandLiteracy.html":[
new OutLink("../Anoralculturehasno.html", "An oral culture has no}", null,null),new OutLink("../Anoralculturehasno.html", "An oral culture has no}", null,null),],


};