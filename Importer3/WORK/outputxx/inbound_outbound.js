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

	
"__.html":[
new OutLink("-30-.html", "-30-", null, null),

],

"_.html":[

],

"yourstruly.html":[
new OutLink("roundususuallsuspects.html", "Round us, usuall suspects", null, null),
new InLink("interrogationinterra.html", "yours, truly", null, null),

],

"youllsees.html":[
new OutLink("hishopes.html", "his hopes", null, null),
new OutLink("fidelity.html", "fidelity", null, null),
new OutLink("1calliopeatmarathon.html", "1. Calliope at Marathon", "happy too", "who is happy to see men, especially seamen"),
new OutLink("failus.html", "fail us?", "short cut circum cision", "an old vaudeville joke: is that a carrot in your pocket"),
new InLink("livingstill.html", "", null, null),
new InLink("22shortfilmsrerpower.html", "you\'ll sees", "cement", "Or are you just harpy to semen?"),

],

"yoda.html":[
new OutLink("courting.html", "courting", null, null),
new OutLink("suspicions.html", "suspicions", null, null),
new OutLink("freshessai.html", "Fresh essai", null, null),
new OutLink("pandoralaura.html", "PandoraLaura", null, null),
new OutLink("worldnoises.html", "world noises", null, null),
new OutLink("caught--continued.html", "caught-- continued", null, null),
new OutLink("centmilledefacts.html", "Cent mille de facts", null, null),
new OutLink("scrimshawsalibi.html", "Scrimshaw\'s alibi", null, null),
new OutLink("heatwavechangeofpace.html", "Heat wave:change of pace", null, null),
new OutLink("pleasures.html", "pleasures", null, null),
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new OutLink("keywest.html", "Key West", null, null),
new OutLink("failus.html", "fail us?", null, null),
new OutLink("modernmanandbaby.html", "modern man and baby", null, null),
new OutLink("thekindofmanwho.html", "The kind of man who", null, null),
new OutLink("ohbravenewworld.html", "Oh brave new world", null, null),
new OutLink("easewhybother.html", "ease, why bother?", null, null),
new OutLink("tempofuggechetassonna.html", "tempo fugge che t\'assonna", null, null),
new OutLink("doeshenrysee.html", "Does Henry see?", "viz", "“Does Henry See?”"),
new OutLink("anotherhouse.html", "", "", "other sequences show themselves"),
new OutLink("http://www.world3.com/meme1/Mola/index.html", "", "", "http://www.world3.com/meme1/Mola/index.html"),
new OutLink("ourstorysofar.html", "our story so far", "O I see", "much as the one which follows inexorably here"),
new InLink("tiredofpomo.html", "yoda", "another pun!", "Boy with Spuddy Nose"),
new InLink("stories.html", "yoda", "yoda", "ota"),
new InLink("fidelity.html", "yoda", null, null),
new InLink("22shortfilmsrerpower.html", "yoda", "dint 0 Euclid", "Didn’t know you could yodel"),

],

"worldnoises.html":[
new OutLink("hewakes.html", "he wakes", null, null),
new InLink("yoda.html", "world noises", null, null),
new InLink("soon.html", "world noises", null, null),

],

"workplay.html":[
new OutLink("toher-perspective.html", "to her-perspective", null, null),
new OutLink("whetherreport.html", "whether report", null, null),
new InLink("ems.html", "work play", "inverted m", "and one family ended and another, more distributed, began."),
new InLink("22shortfilmsrerpower.html", "work play", "riddlememe", "in red sneaks"),

],

"wonders.html":[
new OutLink("theend.html", "the end", null, null),
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("echolalia.html", "echolalia", "poteen of the art is", "Hennessey one of the Wild Geese"),
new InLink("towersinair.html", "wonders", null, null),
new InLink("stories.html", "wonders", "exciting", "ich is exciting but only as a substitute"),
new InLink("son_2.html", "wonders", null, null),
new InLink("memory.html", "wonders", null, null),
new InLink("inwhichhe.html", "wonders", "there there", "there their mothers"),
new InLink("crossexamination.html", "wonders", "wondering", "my moon, mother"),
new InLink("adeath.html", "wonders", null, null),
new InLink("2timesgeometry.html", "wonders", null, null),

],

"wolflake.html":[
new OutLink("electric.html", "electric", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", null, null),
new OutLink("abeginning.html", "a beginning", null, null),
new OutLink("hi-pitchedvoices.html", "", "", "out => Hi Pitched Voices"),
new OutLink("cave.html", "", "", "cave => Anne’s Work Room"),
new OutLink("myfathersroom.html", "my father\'s room", "any man", "as much as I have any man"),
new InLink("eerjordan.html", "Wolf Lake", "Wolf Lake", "Eli eli lama sabbacthani"),
new InLink("cave.html", "Wolf Lake", "", "bemidji => Sherman\'s study"),
new InLink("ariddleman.html", "Wolf Lake", "mentor", "living in the slant light on a second floor of a prairie house across the street from my mentor’s older house and marriage"),

],

"wisdom.html":[
new OutLink("pianos.html", "pianos", null, null),
new OutLink("memory.html", "memory", null, null),
new OutLink("son.html", "Son", null, null),
new InLink("mechanicalquip.html", "wisdom", null, null),

],

"whosthestoolie.html":[
new OutLink("apoetafloat.html", "A poet, afloat", null, null),
new InLink("mickhammer.html", "Who\'s the stoolie?", "whoshe", "how Glenn Barrett knew I was a writer"),
new InLink("glennbarrett.html", "Who\'s the stoolie?", null, null),

],

"whosaidwhat.html":[
new OutLink("andwhere.html", "and where", null, null),
new InLink("mickhammer.html", "who said what", "whosd", "once he knew why he told our darling Polecat boy Scumsaw to ask me for help"),
new InLink("allhumanwisdom.html", "who said what", null, null),

],

"who.html":[
new OutLink("aswan.html", "A swan", null, null),

],

"whetherreport.html":[
new OutLink("nousnote.html", "nousnote", null, null),
new OutLink("5.html", "5", null, null),
new OutLink("1955.html", "1955", "rattledom", "rattle dem bones"),
new InLink("workplay.html", "whether report", null, null),
new InLink("mickhammer.html", "whether report", "fastforward", "how long it would be before the sheriff showed up at the door"),
new InLink("here.html", "whether report", null, null),
new InLink("aerver.html", "whether report", null, null),

],

"whether.html":[
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new OutLink("somefalseleads.html", "some false leads", "lost&", "from he (sic) lost notebook:"),
new OutLink("dautunno.html", "d\'autunno", "just deserts", "Desert of patience"),
new OutLink("sweaters.html", "sweaters", "iver du quais", "winter of keys"),
new OutLink("5worldsedge.html", "5. World\'s edge", "cold", "snow in geovalleys"),
new OutLink("reineofhearts.html", "Reine of hearts", "inclinations", "inclines and peaks overcast"),
new InLink("centmilledefacts.html", "whether", "in a yawn", "be"),
new InLink("aprilewaltera.html", "", null, null),
new InLink("aprilewaltera.html", "whether", "miniuziosa", "Eppezza: sentimento di soddisfazione dovuto all\'aver terminato un\'attivitê noiosa, minuziosa e totalmente inutile."),

],

"whereweeblong.html":[
new OutLink("heatwavechangeofpace.html", "Heat wave:change of pace", null, null),

],

"wheretheblacknesslaps.html":[
new OutLink("whatsinkswhatrises.html", "what sinks, what rises", null, null),
new InLink("sorrows.html", "Where the blackness laps", null, null),
new InLink("servicemarks.html", "Where the blackness laps", null, null),
new InLink("eveningstar.html", "Where the blackness laps", null, null),

],

"whatthesailorsays.html":[
new OutLink("justlikelife.html", "just like life", null, null),
new InLink("operatingsystem.html", "what the sailor says", null, null),

],

"whatsinkswhatrises.html":[
new OutLink("nightswork.html", "night\'s work", null, null),
new InLink("wheretheblacknesslaps.html", "what sinks, what rises", null, null),

],

"whathappens.html":[
new OutLink("certaincertainties.html", "certain certainties", null, null),
new InLink("howthingshappen-guns.html", "what happens", null, null),
new InLink("anescaperoute.html", "what happens", null, null),

],

"whathappenedtous.html":[
new OutLink("history.html", "History", null, null),
new InLink("command_002.html", "()", null, null),

],

"weoftenfelt.html":[
new OutLink("sometimesdawn.html", "sometimes dawn", null, null),
new OutLink("11.html", "11", null, null),
new OutLink("asiflightspoke.html", "as if light spoke", null, null),
new OutLink("concealedbirds.html", "concealed birds", null, null),
new OutLink("riding.html", "riding", null, null),
new InLink("twos.html", "We often felt", null, null),
new InLink("repaying.html", "We often felt", "Hudson", "that broad expansion of the music"),
new InLink("pleasures.html", "We often felt", null, null),
new InLink("fifthekphrastic.html", "We often felt", null, null),
new InLink("biomass.html", "We often felt", null, null),
new InLink("1calliopeatmarathon.html", "We often felt", null, null),
new InLink("1calliopeatmarathon.html", "", "", ""),
new InLink("1.html", "We often felt", null, null),

],

"waterglinting.html":[
new OutLink("onpineneedles.html", "on pine needles", null, null),
new InLink("sleepy.html", "water glinting", null, null),
new InLink("concealedbirds.html", "water glinting", null, null),

],

"vivailpapa.html":[
new OutLink("tempofuggechetassonna.html", "tempo fugge che t\'assonna", null, null),
new InLink("theoldmanandthesee.html", "", "", "what will happen"),

],

"versusthetermination.html":[
new OutLink("seizethedj.html", "seize the DJ", null, null),
new OutLink("seizethedj.html", "zeize the DJ", "", "End_Of_File forced"),
new InLink("freewill.html", "", "", ">screw up"),

],

"uponoppositeshores.html":[
new OutLink("asiflightspoke.html", "as if light spoke", null, null),
new InLink("inlightonlight.html", "upon opposite shores", null, null),

],

"twos.html":[
new OutLink("scent.html", "scent", null, null),
new OutLink("suspicions.html", "suspicions", null, null),
new OutLink("weoftenfelt.html", "We often felt", null, null),
new OutLink("aloversdiscourse.html", "a lovers\' discourse", "mix", "thoroughly disconcerting to him and would, he thought, remain ever so, this mix of guile and innocence, of sensuality and the politic, shifting from moment to moment"),
new InLink("two.html", "twos", "how two divides", ""),
new InLink("courses.html", "twos", null, null),

],

"twom.html":[
new OutLink("seven.html", "seven", null, null),
new OutLink("cosifantutte.html", "Cosi fan tutte", null, null),
new OutLink("housahoser.html", "Housa Hoser", "pants", "Perhaps begin to wear old suits? pleat-fronted gabardines with trousers that sail in the breeze."),
new InLink("morning.html", "Two m", null, null),
new InLink("elkid.html", "Two m", "initially", "RIP:JL"),
new InLink("andwhere.html", "Two m", null, null),

],

"two.html":[
new OutLink("newday.html", "new day", "how time passes", ""),
new OutLink("mouths-world.html", "mouths-world", "how he learned the world", ""),
new OutLink("howhesleeps.html", "how he sleeps", "how he sleeps", ""),
new OutLink("twos.html", "twos", "how two divides", ""),
new OutLink("command_001.html", "command", "how memory functions", ""),
new OutLink("hj.html", "H & J", "how the world once was", ""),
new OutLink("obieswathed.html", "Obie swathed", "how he wraps the child", ""),
new OutLink("aloversdiscourse.html", "a lovers discourse", "how we talk of us", ""),
new InLink("itbeginssomewhere.html", "", "", "two"),
new InLink("endone.html", "two", null, null),

],

"twilight.html":[
new OutLink("ourstorysofar.html", "our story so far", null, null),
new OutLink("....html", "...", null, null),
new OutLink("readingstoryspaces.html", "", "", "click here for reading instructions"),
new OutLink("ourstorysofar.html", "our story so far", "libretto", "click here to skip credits"),

],

"transubstantiate.html":[
new OutLink("seesee.html", "see see", null, null),
new OutLink("realm.html", "realm", null, null),
new OutLink("abeginning.html", "a beginning", "relics", "When we were children we knew the system of relics. First class was bone, hair or other body part of a saint or virgin; second class the cloak or handkerchief; third class was something the holy one had touched"),
new InLink("wonders.html", "transubstantiate", null, null),
new InLink("suitcasememory.html", "transubstantiate", null, null),
new InLink("suit.html", "transubstantiate", "incarnate", "incarnate–"),
new InLink("shadowhappiness.html", "transubstantiate", null, null),
new InLink("severity.html", "transubstantiate", "marking", "marking what was gone"),
new InLink("protector.html", "transubstantiate", null, null),
new InLink("protector.html", "transubstantiate", "father & son", ""),
new InLink("housahoser.html", "transubstantiate", "cryptic", "“That just takes the cake.”"),
new InLink("hi-pitchedvoices.html", "transubstantiate", null, null),
new InLink("fidelity.html", "transubstantiate", null, null),
new InLink("couplet.html", "transubstantiate", null, null),
new InLink("couplet.html", "", "", "away"),

],

"transmogrifikey.html":[
new OutLink("acallfrombelow.html", "a call from below ", null, null),
new OutLink("towersinair.html", "towers in air", "Pisa", "World Trade Towers"),
new InLink("hj.html", "transmogrifikey ", null, null),

],

"transformation.html":[
new OutLink("4.html", "4", null, null),
new OutLink("scent.html", "scent", null, null),
new OutLink("theend.html", "the end", null, null),
new OutLink("lacrise.html", "La Crise", "ma cina", "a hypothetical machine"),
new OutLink("actionandpassion.html", "Action and Passion", "A&P", "When the need to act comes, will thought do?"),
new InLink("stories.html", "transformation", "bawdy yard", "his is Baud"),
new InLink("sonata.html", "transformation", null, null),
new InLink("postcardtoher.html", "transformation", null, null),
new InLink("oreallyo.html", "transformation", "anew", "no one seemed to notice the error in the transcription"),
new InLink("drowsy.html", "transformation", "disappeard", "a disappeard"),

],

"towhatend.html":[
new OutLink("areporterreflects.html", "a reporter reflects", null, null),
new InLink("command004.html", "to what end", null, null),
new InLink("command003.html", "to what end", null, null),

],

"towersinair.html":[
new OutLink("anotherhouse.html", "another house", null, null),
new OutLink("wonders.html", "wonders", null, null),
new OutLink("shadowhappiness.html", "shadow happiness", null, null),
new OutLink("anthem.html", "anthem", "Sara Bond\'s song", "“Your life flashes by,” he says to her, “or so they say...”"),
new OutLink("memory.html", "memory", "mother", "My mother he thinks anna m. you my love; not a freckle but the faint pebbled aureole of someone’s nipple from long ago or the efflorescent, otherworldly pink along a trout’s flank."),
new OutLink("prophet.html", "prophet", "satis facts", "I had no satisfactory explanation, even for me..."),
new OutLink("eveningstar.html", "Evening Star", "fathers&sons", "Fathers and sons she thinks conflicting about the size of the apparent world."),
new InLink("transmogrifikey.html", "towers in air", "Pisa", "World Trade Towers"),
new InLink("servicemarks.html", "towers in air", null, null),
new InLink("september.html", "towers in air", "in the higher air", "Forms begin to show themselves."),
new InLink("seesee.html", "towers in air", "oyo obi", "“Why do they call it a tab?” Jeremiah asks. (We call him electronic boy.)"),
new InLink("node.html", "towers in air", null, null),
new InLink("newday.html", "towers in air", null, null),
new InLink("14.html", "towers in air", null, null),

],

"totheleftof.html":[
new OutLink("thesailorread.html", "The Sailor read", null, null),
new InLink("noonecared.html", "to the left of", null, null),

],

"toher-perspective.html":[
new OutLink("greyday.html", "grey day", null, null),
new InLink("workplay.html", "to her-perspective", null, null),
new InLink("postcardtoher.html", "to her-perspective", null, null),
new InLink("couplet_1.html", "to her-perspective", null, null),

],

"tiredofpomo.html":[
new OutLink("spelt.html", "spelt", null, null),
new OutLink("failus.html", "failed us?", "pmc", "There are several levels of word play here, each of them fairly obscure and likely only to appeal to professors of a certain"),
new OutLink("failus.html", "failed us?", "pmc", "(passing, postmodern)"),
new OutLink("yoda.html", "yoda", "another pun!", "Boy with Spuddy Nose"),
new InLink("spelt.html", "tired of pomo?", "retired", "name that tome: “What is ‘what condition my condition is in?”"),
new InLink("portraitoftheartist.html", "tired of pomo?", "postfato", "all very post-modern"),

],

"times.html":[
new OutLink("stories.html", "stories", null, null),
new InLink("stories.html", "times", "()", "Saturday’s Times “Critic’s Notebook”"),

],

"thiscomputer.html":[
new OutLink("drowsy.html", "drowsy", null, null),
new OutLink("operatingsystem.html", "operating system", null, null),
new InLink("input.html", "this computer", null, null),

],

"thirdekphrastic.html":[
new OutLink("fourthekphrastic.html", "fourth ekphrastic", null, null),
new OutLink("after.html", "after", "after", "Sweetly screaming: this is how it will be to die."),
new InLink("realm.html", "third ekphrastic", null, null),
new InLink("7.html", "third ekphrastic", null, null),
new InLink("4annam.html", "third ekphrastic", null, null),

],

"thetruth.html":[
new OutLink("command_002.html", "command", null, null),
new InLink("certaincertainties.html", "", "", "smelled my estranged wife’s panties"),

],

"thesailorread.html":[
new OutLink("iwasntevenguiltyof.html", "I wasn\'t even guilty of ", null, null),
new InLink("totheleftof.html", "The Sailor read", null, null),

],

"there.html":[
new OutLink("sleepy.html", "Sleepy", null, null),
new OutLink("caring.html", "caring", null, null),
new OutLink("september.html", "September", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new OutLink("theendofthecoldwar.html", "The End of the Cold War", "to what purpose", "to what purpose all this intricate care and mindless passing of time alike"),
new InLink("sleepy.html", "there", null, null),
new InLink("parable.html", "there", null, null),
new InLink("ourstorysofar.html", "there", null, null),
new InLink("obieswathed.html", "there", null, null),
new InLink("belowanoldmountain.html", "there", null, null),
new InLink("1.html", "there", null, null),

],

"theoldmanandthesee.html":[
new OutLink("reignsinadrytime.html", "reigns in a dry time", null, null),
new OutLink("vivailpapa.html", "", "", "what will happen"),
new InLink("nuclearfishing.html", "The Old Man and the see", null, null),

],

"themeaning.html":[
new OutLink("oulipo.html", "oulipo", null, null),
new InLink("oulipo.html", "The meaning", null, null),

],

"thekindofmanwho.html":[
new OutLink("aswan.html", "A swan", null, null),
new OutLink("...who.html", "...who", null, null),
new InLink("yoda.html", "The kind of man who", null, null),
new InLink("anchoringdevices.html", "The kind of man who", null, null),

],

"theendofthecoldwar.html":[
new OutLink("2.html", "2", null, null),
new InLink("there.html", "The End of the Cold War", "to what purpose", "to what purpose all this intricate care and mindless passing of time alike"),
new InLink("ourstorysofar.html", "The End of the Cold War", null, null),
new InLink("francoisgirards.html", "The End of the Cold War", "histamine", "In the control room of a recording studio, the engineers discuss the merits of taking cream in their coffee, only half-noticing the enraptured figure behind the soundproof glass"),
new InLink("eerjordan.html", "the End of the Cold War", "a boy in the bubble", "A pope in high places"),
new InLink("anthem.html", "The End of the Cold War", null, null),

],

"theend.html":[
new OutLink("distanttenderness.html", "distant tenderness", null, null),
new OutLink("9.html", "9", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", "~", ". She swam far beyond this window and began to drown, her troubled breaths pulling it tighter and tighter"),
new InLink("wonders.html", "the end", null, null),
new InLink("transformation.html", "the end", null, null),
new InLink("speech.html", "the end", null, null),
new InLink("sleepysong.html", "the end", null, null),
new InLink("naturaleloquence.html", "the end", "water of life", "a scant half-bottle of counterfeit Hennessey"),
new InLink("here.html", "the end", null, null),
new InLink("archangel.html", "the end", "angel", "with beautiful hair one had never quite seen"),

],

"tempsvierge.html":[
new OutLink("couplet.html", "couplet", null, null),
new OutLink("8.html", "8", null, null),
new InLink("eveningstar.html", "temps vierge", "a weight", "And yet I sit and wait for something,"),
new InLink("6.html", "temps vierge", null, null),

],

"tempofuggechetassonna.html":[
new OutLink("reignsinadrytime.html", "reigns in a dry time", null, null),
new InLink("yoda.html", "tempo fugge che t\'assonna", null, null),
new InLink("vivailpapa.html", "tempo fugge che t\'assonna", null, null),

],

"tegvara.html":[
new OutLink("che.html", "Che", null, null),
new OutLink("che.html", "", "", ""),
new OutLink("che.html", "", "", "tegvara"),
new InLink("elorgua.html", "tegvara", null, null),
new InLink("elorgua.html", "", "", ""),
new InLink("elorgua.html", "", "", "el OrGua"),

],

"tapes56.html":[
new OutLink("idyllicthey.html", "Idyllic, they", "One year made you clowns", "(Tapes five and six, July 1981)"),
new InLink("memory.html", "Tapes 5&6", null, null),
new InLink("-30-.html", "Tapes 5&6", null, null),

],

"takenbythecontinual.html":[
new OutLink("eyes.html", "eyes", null, null),
new OutLink("actionandpassion.html", "Action and Passion", null, null),
new OutLink("5worldsedge.html", "5. World\'s edge", "rising", "the nub of your nipple in my mouth, caught (gently) in my teeth, tongued over, glistening. so quick a feeling that i am confused, then know—"),
new InLink("stories.html", "taken by the continual", "taken by the continual", "imagine her breasts"),
new InLink("sorrows.html", "taken by the continual", "mouther", "the space where the freckled Indies lay."),
new InLink("hensandchicks.html", "taken by the continual", null, null),
new InLink("garments.html", "taken by the continual", "flimsy", "flimsy garments to give him an opportunity"),
new InLink("drowsy.html", "taken by the continual", "these women", "Oh, these women!"),
new InLink("centmilledefacts.html", "taken by the continual", "light itself assigned", "this"),
new InLink("actionandpassion.html", "", "", "taken by that continual, womanly grace, even at this distance"),

],

"sweaters.html":[
new OutLink("myfathersroom.html", "my father\'s room", null, null),
new OutLink("12.html", "12", null, null),
new OutLink("reignsinadrytime.html", "reigns in a dry time", "gutting", "head, blood, liver, lung, and muscle"),
new InLink("whether.html", "sweaters", "iver du quais", "winter of keys"),
new InLink("butter.html", "sweaters", null, null),

],

"suspicions.html":[
new OutLink("surrender.html", "surrender", null, null),
new OutLink("dazeofthewoke.html", "daze of the woke", null, null),
new InLink("yoda.html", "suspicions", null, null),
new InLink("twos.html", "suspicions", null, null),
new InLink("severity.html", "suspicions", null, null),

],

"surrender.html":[
new OutLink("speech.html", "speech", null, null),
new OutLink("roundususuallsuspects.html", "Round us, usuall suspects", null, null),
new InLink("suspicions.html", "surrender", null, null),

],

"suitcasememory.html":[
new OutLink("howhesleeps.html", "how he sleeps", null, null),
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("operatingsystem.html", "operating system", "or", "Each microcassette like a suitcase full of dreams, the machine bleating on my lap as I boot the editor again."),
new OutLink("mouths-world.html", "", "", "I recalled, as clearly as a dream, you saying once, “They learn the world with their mouths.”"),
new InLink("outofmemory.html", "suitcase memory", null, null),
new InLink("outofmemory.html", "recursus", "suitcase memory", ""),

],

"suit.html":[
new OutLink("boat.html", "boat", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("transubstantiate.html", "transubstantiate", "incarnate", "incarnate–"),
new InLink("speech.html", "suit", null, null),
new InLink("meaning.html", "suit", null, null),
new InLink("hensandchicks.html", "suit", null, null),
new InLink("ghislaineguertin.html", "suit", "()", "worked out conceptual branching"),

],

"stories.html":[
new OutLink("sleepy.html", "sleepy", null, null),
new OutLink("yoda.html", "yoda", "yoda", "ota"),
new OutLink("caring.html", "caring", "caring", "outside of any history but the buzz-daze, the quotidian stream"),
new OutLink("takenbythecontinual.html", "taken by the continual", "taken by the continual", "imagine her breasts"),
new OutLink("outerspace.html", "outerspace", "the idea of love", "“I love the idea of east of the sun"),
new OutLink("history.html", "history", "himself", "Scrimshaw"),
new OutLink("soon.html", "soon", "ringlets", "cherub with golden ringlets"),
new OutLink("hishopes.html", "his hopes", "", "imagine my penis"),
new OutLink("cave.html", "cave", "official words", "cavernous—"),
new OutLink("seesee.html", "see see", "caro", "Caro writes"),
new OutLink("hensandchicks", "cave", "see gar", "shallow cigar box"),
new OutLink("outerspace.html", "outer space", "water color", "watercolor"),
new OutLink("aphoto.html", "a photo", "burnish", "old photos"),
new OutLink("times.html", "times", "()", "Saturday’s Times “Critic’s Notebook”"),
new OutLink("fustytu.html", "fusty tu", "foist ever", "first ever"),
new OutLink("here.html", "here", "real life, or if not", "when reality is not available"),
new OutLink("chronicle.html", "chronicle", "", "Tom Boyle says"),
new OutLink("Cixous.html", "Cixous", "", "what the French critics might say"),
new OutLink("history.html", "history", "access something", "bringing yourself out of that world to access something"),
new OutLink("after.html", "after", "ab origine", "__"),
new OutLink("lacrise.html", "La Crise", "some one", "Strauss or someone writes elsewhere"),
new OutLink("andshouldhavewonit.html", "and should have won it", "Icthus bod", "dayglo scarecrow"),
new OutLink("songs.html", "songs.html", "desert", "once crossing the great salt desert"),
new OutLink("6continental.html", "6 continental", "further prospects", "The Twilight Doctor looks back"),
new OutLink("pianos.html", "pianos", "love letters", "loveletters, yellow pages,"),
new OutLink("4annam.html", "4 anna m", "tender offer", "find a way to be very tender"),
new OutLink("wonders.html", "wonders", "exciting", "ich is exciting but only as a substitute"),
new OutLink("transformation.html", "transformation", "bawdy yard", "his is Baud"),
new OutLink("noons.html", "noons", "()", "ry.)"),
new OutLink("noons.html", "noons", "()", "Josh is talking"),
new OutLink("notsomuch.html", "not so much", "distant eros", "believe these names, Josh and Jane"),
new OutLink("adeath.html", "a death", "red", "iver. The wine sheets slowly down the glass orb, her sad sweet face is ruby, bloody, rose."),
new OutLink("elf.html", "elf", "grass", "ks a tuft of grass which he twists"),
new OutLink("secondekphrastic.html", "noons", "old seeress", "d to the old syntax of linear sequ"),
new OutLink("gs.html", "g\'s", "", "s.”"),
new OutLink("gs.html", "g\'s", "", "“Toronto was full of them"),
new InLink("times.html", "stories", null, null),
new InLink("servicemarks.html", "stories", null, null),
new InLink("servicemarks.html", "", "", "©"),
new InLink("september.html", "stories", null, null),
new InLink("riddle.html", "stories", null, null),
new InLink("prophet.html", "stories", null, null),
new InLink("pasadena.html", "stories", "Lil O\'Lady", "the crypt is unveiled"),
new InLink("notsomuch.html", "stories", null, null),
new InLink("motherlandfathertongue.html", "stories", null, null),
new InLink("everyones.html", "stories", null, null),
new InLink("courting.html", "stories", "elm", "giant above piazza, gossiping over former times"),
new InLink("courses.html", "stories", null, null),
new InLink("chronicle.html", "stories", null, null),
new InLink("biomass.html", "stories", null, null),
new InLink("6continental.html", "stories", null, null),
new InLink("5worldsedge.html", "stories", null, null),
new InLink("1955.html", "stories", null, null),
new InLink("1.html", "stories", null, null),

],

"stepone.html":[
new OutLink("1calliopeatmarathon.html", "1. Calliope at Marathon", null, null),
new OutLink("2.html", "2", null, null),
new InLink("phaedrus.html", "step one", null, null),

],

"springsprung.html":[
new OutLink("protagonistes.html", "Protagonistes", null, null),
new InLink("manofaction.html", "spring sprung", null, null),

],

"spelt.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("tiredofpomo.html", "tired of pomo?", "retired", "name that tome: “What is ‘what condition my condition is in?”"),
new InLink("tiredofpomo.html", "spelt", null, null),
new InLink("22shortfilmsrerpower.html", "spelt", "the son\'s fleece", "(sheep for 400, Alex)"),

],

"speech.html":[
new OutLink("suit.html", "suit", null, null),
new OutLink("5worldsedge.html", "5. World\'s edge", null, null),
new OutLink("theend.html", "the end", null, null),
new OutLink("eyes.html", "eyes", "speech", "“A pretty speech"),
new InLink("surrender.html", "speech", null, null),
new InLink("iceman.html", "cherry", "charry", "Notes on the Cherry Orchard"),

],

"sosinkstheday-star.html":[
new OutLink("sleepy.html", "Sleepy", null, null),
new InLink("cosifantutte.html", "So sinks the day-star", null, null),

],

"sorrows.html":[
new OutLink("severity.html", "severity", null, null),
new OutLink("wheretheblacknesslaps.html", "Where the blackness laps", null, null),
new OutLink("takenbythecontinual.html", "taken by the continual", "mouther", "the space where the freckled Indies lay."),
new InLink("scent.html", "sorrows", null, null),
new InLink("hi-pitchedvoices.html", "sorrows", null, null),

],

"soon.html":[
new OutLink("worldnoises.html", "world noises", null, null),
new InLink("stories.html", "soon", "ringlets", "cherub with golden ringlets"),
new InLink("howhesleeps.html", "soon", null, null),

],

"son_2.html":[
new OutLink("wonders.html", "wonders", null, null),

],

"son_1.html":[
new OutLink("father_1.html", "father", null, null),

],

"songs.html":[
new OutLink("1calliopeatmarathon.html", "1. Calliope at Marathon", null, null),
new OutLink("saltorchopinin6.html", "salt or Chopin in 6", null, null),
new OutLink("2timesgeometry.html", "2. Time\'s geometry", null, null),
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new InLink("there.html", "Songs", null, null),
new InLink("suit.html", "Songs", null, null),
new InLink("stories.html", "songs.html", "desert", "once crossing the great salt desert"),
new InLink("shadowhappiness.html", "Songs", null, null),
new InLink("piano.html", "", "", ""),
new InLink("piano.html", "", "", "Once my brothers (but not the one who is a professional comic) began telling the punchlines of jokes. They were able to list what seemed like hundreds of them in turn. My brother Tom’s wife, Linda, laughed and laughed and Carolyn was amazed. I could not keep up with my brothers and recalled few of the jokes they quoted punchlines for. None of us brothers play the piano, though my father taught himself to do so. Brian does play the guitar and harmonica and all three of the others can sing, though I cannot. Io parlo poco Italiano."),
new InLink("outofrhythm.html", "Songs", null, null),
new InLink("ourstorysofar.html", "Songs", null, null),
new InLink("meaning.html", "Songs", "way round", "They know their way around"),
new InLink("intimenightall.html", "Songs", null, null),
new InLink("father.html", "Songs", null, null),
new InLink("caring.html", "Songs", null, null),

],

"sonata.html":[
new OutLink("anthem.html", "anthem", null, null),
new OutLink("node.html", "node", null, null),
new OutLink("transformation.html", "transformation", null, null),
new InLink("shadowhappiness.html", "(son)ata", null, null),
new InLink("saltorchopinin6.html", "(son)ata", "sonata", "parlour pee-annie"),
new InLink("motherlandfathertongue.html", "(son)ata", "son\'s seequence", "c"),
new InLink("motherlandfathertongue.html", "", "", "c"),
new InLink("howhesleeps.html", "(son)ata", null, null),

],

"son.html":[
new OutLink("father.html", "Father", null, null),
new InLink("wisdom.html", "Son", null, null),
new InLink("riddle.html", "Son", "Riddle", "Obie’s Riddle:"),
new InLink("gnosis.html", "Son", null, null),
new InLink("father.html", "Son", null, null),
new InLink("essencily.html", "Son", null, null),

],

"sometimesdawn.html":[
new OutLink("etcheditself.html", "etched itself", null, null),
new InLink("weoftenfelt.html", "sometimes dawn", null, null),

],

"somesay.html":[
new OutLink("andshouldhavewonit.html", "and should have won it", null, null),
new OutLink("aloversdiscourse.html", "a lovers\' discourse", "touch", "disdain touch like easily conquered adversaries"),
new InLink("inwhichhe.html", "some say", null, null),
new InLink("backstory.html", "some say", null, null),

],

"somefalseleads.html":[
new OutLink("dateline.html", "dataline", "dateline", "<dateline>"),
new OutLink("dateline_1.html", "dataline", "dateline", "Lunetta Waits sits and watches, but her boy will not come home ..."),
new InLink("whether.html", "some false leads", "lost&", "from he (sic) lost notebook:"),
new InLink("areporterreflects.html", "", "", "stringbook"),

],

"soiwroteacolumn.html":[
new OutLink("noonecared.html", "No one cared. ", null, null),
new InLink("acallfrombelow.html", "So I wrote a column.  ", null, null),

],

"sleepysong.html":[
new OutLink("pleasantlake.html", "Pleasant Lake", null, null),
new OutLink("theend.html", "the end", null, null),
new OutLink("adeath.html", "A: death", null, null),
new OutLink("adeath.html", "", "", ""),
new InLink("littlegedditing.html", "sleepy song", "in joke", "There was an editor by this name, Herman his, as they used to say, Christian name, though he was Jewish; and we used to correspond about my fiction. I think he wanted to publish me; I know I wanted him to publish me. The letters were witty and wise and I suppose I should have paid more mind. It was often hard to sleep in those days. I ate no cabbages."),
new InLink("centmilledefacts.html", "sleepy song", "agony away", "da"),

],

"sleepy.html":[
new OutLink("drowsy.html", "drowsy", null, null),
new OutLink("there.html", "there", null, null),
new OutLink("waterglinting.html", "water glinting", null, null),
new OutLink("dautunno.html", "d\'autunno", "great tree", "the great tree where"),
new InLink("there.html", "Sleepy", null, null),
new InLink("stories.html", "sleepy", null, null),
new InLink("sosinkstheday-star.html", "Sleepy", null, null),
new InLink("shadowhappiness.html", "Sleepy", null, null),
new InLink("ourstorysofar.html", "Sleepy", null, null),
new InLink("michael.html", "sleepy", null, null),
new InLink("aretreatingfigure.html", "Sleepy", "heedless", "The headless horseman, but tall and skinny as Ichabod from what I could see in his retreat"),
new InLink("alaxalasalass.html", "Sleepy", null, null),

],

"six.html":[
new OutLink("", "Two m", "", "out of memory"),
new InLink("shid.html", "", "", "“For this job,” said Scrimshaw, “is shid. Scums only, lazy bastard... But makes me lazy repudation with Polish is around.”"),

],

"shid.html":[
new OutLink("six.html", "", "", "“For this job,” said Scrimshaw, “is shid. Scums only, lazy bastard... But makes me lazy repudation with Polish is around.”"),
new InLink("naturaleloquence.html", "", "", "Which of course made him unfitted for work, had there been some. But there was none, save a counter job at the drugstore which the Employment people admitted already had two hundred applicants for; and—surprise, surprise—a little off-the-books deal that Wart-dumbski suggested, involving occupying a shack he owned along Route 12 and selling marital aids, love creams, and stroke books to cretins."),

],

"shadowhappiness.html":[
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("noons.html", "noons", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("sleepy.html", "Sleepy", null, null),
new OutLink("sonata.html", "(son)ata", null, null),
new InLink("towersinair.html", "shadow happiness", null, null),
new InLink("ourstorysofar.html", "shadow happiness", null, null),
new InLink("boat.html", "shadow happiness", null, null),

],

"severity.html":[
new OutLink("suspicions.html", "suspicions", null, null),
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("transubstantiate.html", "transubstantiate", "marking", "marking what was gone"),
new InLink("sorrows.html", "severity", null, null),
new InLink("notsomuch.html", "severity", null, null),
new InLink("courses.html", "severity", null, null),

],

"seven.html":[
new OutLink("eveningstar.html", "Evening Star", null, null),
new InLink("twom.html", "seven", null, null),
new InLink("dazeofthewoke.html", "seven", null, null),

],

"servicemarks.html":[
new OutLink("wheretheblacknesslaps.html", "Where the blackness laps", null, null),
new OutLink("towersinair.html", "towers in air", null, null),
new OutLink("stories.html", "stories", null, null),
new OutLink("stories.html", "", "", "©"),
new InLink("meaning.html", "service marks", "end of the road", "There is no end to meaning."),
new InLink("22shortfilmsrerpower.html", "service marks", "surface marks", "A: Oshkosh b’gosh,"),

],

"september.html":[
new OutLink("noons.html", "noons", null, null),
new OutLink("stories.html", "stories", null, null),
new OutLink("history.html", "History", null, null),
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new OutLink("towersinair.html", "towers in air", "in the higher air", "Forms begin to show themselves."),
new OutLink("laundrydonebeautiful.html", "", "", "Laundry done. Beautiful soup. Jewel autumn afternoon."),
new InLink("there.html", "September", null, null),
new InLink("savaissabrett.html", "September", "what de seize", "for instance plenitude and its connection to sexuality, viz."),
new InLink("ourstorysofar.html", "September", null, null),
new InLink("memory.html", "September", "mother\'s eyes", "my mother’s eyes"),
new InLink("caring.html", "September", null, null),

],

"seizethedj.html":[
new OutLink("nuclearfishing.html", "nuclear fishing", null, null),
new OutLink("inthehigherair.html", "in the higher air", "AER lingus", "“It’s one thirty-five,” the generic announcer says. He has no connection to this time, this tape they play was made months ago in California."),
new InLink("versusthetermination.html", "seize the DJ", null, null),
new InLink("versusthetermination.html", "zeize the DJ", "", "End_Of_File forced"),
new InLink("command_002.html", "seize the DJ", null, null),

],

"seeside.html":[
new OutLink("prospects.html", "Prospects", null, null),
new OutLink("birdsweave.html", "birds weave", "pre-sumptuous", "These maps of consciousness"),
new OutLink("michael.html", "Michael", "()", "Michael was talking about"),
new OutLink("blueboat-city.html", "Blue boat city", "mer metaforico", "It would also be nice to have a map where the relations are more metaphorical"),
new OutLink("oreallyo.html", "o really o", "()", "I felt that whoever designed the parts that popped up was mistaken, that there were other ways of having things pop up."),
new OutLink("francoisgirards.html", "Francois Girard\'s", "()", "think the moral cusp of the question"),
new OutLink("failus.html", "fail us?", "more el phallure", "is in Henry’s lap"),
new OutLink("prospects.html", "Prospects", "()", "I interpreted the two essays that I was given in the same spirit I felt Glenn Gould would interpret something. I don’t claim that this map is any better than anyone else’s."),
new InLink("oreallyo.html", "SEE side", null, null),
new InLink("oreallyo.html", "SEE side", "()", "Ironically for all this talk about mistakes and erring"),
new InLink("doeshenrysee.html", "SEE side", "()", "Henry See, designer/author"),

],

"seesee.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", null, null),
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", "chemise tree", "A lost gesture. We are the last race of the carbon copy, the generation before the migration into light"),
new OutLink("towersinair.html", "towers in air", "oyo obi", "“Why do they call it a tab?” Jeremiah asks. (We call him electronic boy.)"),
new OutLink("cosifantutte.html", "Cosi fan tutte", "emoticon", "an emoticon, a usage I am never used to"),
new OutLink("ours.html", "ours", "caro", "caro"),
new OutLink("realm.html", "realm", "i", "meo"),
new OutLink("fiveelements.html", "five elements", "teorama", "teo"),
new OutLink("6continental.html", "Continental", "aye aye", "oyo"),
new InLink("transubstantiate.html", "see see", null, null),
new InLink("stories.html", "see see", "caro", "Caro writes"),
new InLink("rest-s.html", "see see", null, null),
new InLink("rest-s.html", "", "", ""),
new InLink("motherlandfathertongue.html", "see see", "o sea", "w"),
new InLink("motherlandfathertongue.html", "", "", "w"),
new InLink("ems.html", "", "", ""),
new InLink("ems.html", "see see", "oui we", "[(We wooed each other with small m’s and c’s]"),
new InLink("22shortfilmsrerpower.html", "see see", "seizure (seashore)", "cc:"),

],

"secondekphrastic.html":[
new OutLink("7.html", "7", null, null),
new OutLink("after.html", "after", "after", "Sweetly dreaming: this is how it will be to die."),
new InLink("stories.html", "noons", "old seeress", "d to the old syntax of linear sequ"),
new InLink("firstekphrastic.html", "second ekphrastic", null, null),
new InLink("essencily.html", "second ekphrastic", null, null),

],

"seaside.html":[
new OutLink("readingstoryspaces.html", "Reading Storyspaces", null, null),

],

"seas.html":[
new OutLink("command_1b.html", "command ?", null, null),
new InLink("iknownotsees.html", "seas", null, null),

],

"scrimshawsalibi.html":[
new OutLink("apositiveid.html", "a positive ID!", null, null),
new InLink("yoda.html", "Scrimshaw\'s alibi", null, null),
new InLink("andwatson.html", "Scrimshaw\'s alibi", null, null),

],

"scrimshaw.html":[
new OutLink("q.html", "Q", null, null),
new InLink("ja.html", "", "", "“Ja!”"),

],

"scent.html":[
new OutLink("sorrows.html", "sorrows", null, null),
new InLink("twos.html", "scent", null, null),
new InLink("transformation.html", "scent", null, null),
new InLink("mouths-world.html", "scent", "marked this gap", "Remembered details long beyond recall. Your plump tit bulging from the oxford cloth blouse, sweet and globe-like and inviting, full with milk and as sour sometimes as the ham rind,"),
new InLink("butter.html", "scent", null, null),
new InLink("aloversdiscourse.html", "scent", null, null),
new InLink("1982.html", "scent", null, null),

],

"savaissabrett.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", null, null),
new OutLink("moredogons.html", "more dogons", "dojo", ""),
new OutLink("moredogons.html", "more dogons", "dojo", "He walks up to the cart and says, “Make me one with everything.”"),
new OutLink("mother.html", "mother", "fearful dark decent", "Rather on account of her relative proximity to death she may have been concerned with different things"),
new OutLink("september.html", "September", "what de seize", "for instance plenitude and its connection to sexuality, viz."),
new InLink("dickshunairy.html", "Savais sabrett?", "Est\'ce que vous", "Although one I am able to remember emphasizes wholeness (albeit got up in a Lacanian sausage)."),
new InLink("dalaiinthesky.html", "Savais sabrett?", "a sign", "Dalai in the sky"),

],

"sam.html":[
new OutLink("here.html", "here", null, null),
new InLink("here.html", "sam", null, null),
new InLink("here.html", "", "", ""),

],

"saltorchopinin6.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("1955.html", "1955", null, null),
new OutLink("history.html", "History", "poles", "he or anyone should know how I feel about the polack fop—"),
new OutLink("sonata.html", "(son)ata", "sonata", "parlour pee-annie"),
new OutLink("2timesgeometry.html", "2. Time\'s geometry", "sweet spinet", "or the taproom spinet, so sweetly"),
new InLink("songs.html", "salt or Chopin in 6", null, null),
new InLink("fiveelements.html", "salt or Chopin in 6", null, null),
new InLink("eerjordan.html", "salt or Chopin", "on pole stars", "although this one involves a Polish lad"),

],

"roundususuallsuspects.html":[
new OutLink("glennbarrett.html", "Glenn Barrett", null, null),
new InLink("yourstruly.html", "Round us, usuall suspects", null, null),
new InLink("surrender.html", "Round us, usuall suspects", null, null),

],

"river.html":[
new OutLink("distanttenderness.html", "distant tenderness", null, null),
new InLink("outofrhythm.html", "River", null, null),

],

"riding.html":[
new OutLink("repaying.html", "repaying", null, null),
new OutLink("dautunno.html", "d\'autunno", "neer fearful", "he never fearful tree"),
new OutLink("5worldsedge.html", "5. World\'s edge", "he her hero", "mere terrors of the night, phantoms himself. The greater part of the time he my hero and his steed."),
new InLink("weoftenfelt.html", "riding", null, null),
new InLink("housahoser.html", "riding", "Housatonic", "A gently flowing river in the Berkshires through Connecticut?"),
new InLink("dalaiinthesky.html", "riding", null, null),

],

"riddle.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("fidelity.html", "fidelity", null, null),
new OutLink("son.html", "Son", "Riddle", "Obie’s Riddle:"),
new OutLink("adeath.html", "A: death", "answer death", "Answer: Death"),
new InLink("prophet.html", "Riddle", null, null),
new InLink("prophet.html", "Riddle", "return", "whose riddle ends in death and Shakespeare"),
new InLink("4.html", "Riddle", null, null),

],

"rest-s.html":[
new OutLink("iceman.html", "ice man", null, null),
new OutLink("seesee.html", "see see", null, null),
new OutLink("seesee.html", "", "", ""),
new InLink("centmilledefacts.html", "rest-s", "to go on", "so"),

],

"repaying.html":[
new OutLink("courting.html", "courting", null, null),
new OutLink("weoftenfelt.html", "We often felt", "Hudson", "that broad expansion of the music"),
new InLink("riding.html", "repaying", null, null),
new InLink("elkid.html", "repaying", "treed", "Did you have a tree?"),

],

"reineofhearts.html":[
new OutLink("courses.html", "courses", null, null),
new InLink("wolflake.html", "Reine of hearts", null, null),
new InLink("whether.html", "Reine of hearts", "inclinations", "inclines and peaks overcast"),
new InLink("theend.html", "Reine of hearts", "~", ". She swam far beyond this window and began to drown, her troubled breaths pulling it tighter and tighter"),
new InLink("myself.html", "Reine of hearts", null, null),
new InLink("inwhichhe.html", "Reine of hearts", "Reine", "ever an object of superstitious awe"),
new InLink("housahoser.html", "Reine of hearts", "viz", "opening its domestic space into a complex terrain of social and sexual significance"),
new InLink("couplet_1.html", "Reine of hearts", null, null),
new InLink("caught--continued.html", "Reine of hearts", null, null),
new InLink("1calliopeatmarathon.html", "Reine of hearts", "birds far", "O listen. Birds far from shore. Who can know?"),

],

"reignsinadrytime.html":[
new OutLink("mars.html", "Mars", null, null),
new InLink("theoldmanandthesee.html", "reigns in a dry time", null, null),
new InLink("tempofuggechetassonna.html", "reigns in a dry time", null, null),
new InLink("sweaters.html", "reigns in a dry time", "gutting", "head, blood, liver, lung, and muscle"),

],

"realm.html":[
new OutLink("hishopes.html", "his hopes", null, null),
new OutLink("electric.html", "electric", null, null),
new OutLink("thirdekphrastic.html", "third ekphrastic", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", "stone cellars", "about funeral trains, and moor of preserved plums, and peaches"),
new InLink("transubstantiate.html", "realm", null, null),
new InLink("seesee.html", "realm", "i", "meo"),
new InLink("elf.html", "realm", null, null),

],

"readingstoryspaces.html":[
new OutLink("here.html", "here", null, null),
new OutLink("index.html", "", "()", "click here."),
new InLink("twilight.html", "", "", "click here for reading instructions"),
new InLink("seaside.html", "Reading Storyspaces", null, null),

],

"query.html":[
new OutLink("dialectic.html", "dialectic", null, null),
new InLink("parry.html", "", "", ">No"),

],

"q.html":[
new OutLink("a.html", "A", null, null),
new InLink("scrimshaw.html", "Q", null, null),

],

"protector.html":[
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("transubstantiate.html", "transubstantiate", "father & son", ""),
new InLink("chryalis.html", "protector", "one son", "Eamon"),
new InLink("autumnalwalkings.html", "protector", "prayer", "my son and I made our pact"),
new InLink("22shortfilmsrerpower.html", "protector", "one son", "eamon."),

],

"protagonistes.html":[
new OutLink("genesis.html", "Genesis?", null, null),
new InLink("springsprung.html", "Protagonistes", null, null),

],

"prospects.html":[
new OutLink("6continental.html", "6. Continental", null, null),
new OutLink("eveningstar.html", "Evening Star", null, null),
new InLink("seeside.html", "Prospects", null, null),
new InLink("seeside.html", "Prospects", "()", "I interpreted the two essays that I was given in the same spirit I felt Glenn Gould would interpret something. I don’t claim that this map is any better than anyone else’s."),

],

"prophet.html":[
new OutLink("riddle.html", "Riddle", null, null),
new OutLink("autumnalwalkings.html", "autumnal walking", null, null),
new OutLink("stories.html", "stories", null, null),
new OutLink("1982.html", "1982", "aborning", "He"),
new OutLink("riddle.html", "Riddle", "return", "whose riddle ends in death and Shakespeare"),
new OutLink("essencily.html", "essencily", "essence son", "sweetest son and the loneliest"),
new OutLink("hestirs-obie.html", "He stirs Obie", "unriddled", "its own riddle here"),
new OutLink("1982.html", "1982", "aborning", ""),
new OutLink("1982.html", "1982", "aborning", "For my sister’s chair (a Mayanist) but also for a German ear (my grandfather’s for instance) the way we say it: chaiir-moany, far away from the vatter land, nicht wahr."),
new InLink("towersinair.html", "prophet", "satis facts", "I had no satisfactory explanation, even for me..."),
new InLink("chryalis.html", "prophet", "drum son", "Jeremiah"),
new InLink("belowanoldmountain.html", "prophet", null, null),
new InLink("22shortfilmsrerpower.html", "prophet", "drum son", "(Chair o’ maya)"),

],

"postcardtoher.html":[
new OutLink("transformation.html", "transformation", null, null),
new OutLink("toher-perspective.html", "to her-perspective", null, null),
new OutLink("meaning.html", "Meaning", null, null),
new OutLink("bloor.html", "damndearbloombloor", null, null),
new InLink("hestirs-obie.html", "postcard to her", null, null),

],

"portraitoftheartist.html":[
new OutLink("lifeinabox.html", "life in a box", null, null),
new OutLink("asasillyman.html", "as a silly man.", null, null),
new OutLink("tiredofpomo.html", "tired of pomo?", "postfato", "all very post-modern"),
new InLink("dateline_2.html", "portrait of the artist", null, null),
new InLink("backstory.html", "portret of the artist", "backstory", "Yale computer scientist and author"),
new InLink("areporterreflects.html", "portrait of the artist", null, null),

],

"pleasures.html":[
new OutLink("pasadena.html", "Pasadena", null, null),
new OutLink("weoftenfelt.html", "We often felt", null, null),
new InLink("yoda.html", "pleasures", null, null),
new InLink("eveningstar.html", "pleasures", "Mrs White\'s Party", "“It’s time for Mrs. White’s party"),
new InLink("centmilledefacts.html", "pleasures", "cold dream of contempt", "day’s"),

],

"pleasantlake.html":[
new OutLink("itbeginssomewhere.html", "It begins somewhere", null, null),
new InLink("sleepysong.html", "Pleasant Lake", null, null),
new InLink("ourstorysofar.html", "Pleasant Lake", null, null),
new InLink("motherlandfathertongue.html", "", "", "get on with the story?"),
new InLink("moredogons.html", "Pleasant Lake", "10 years after", "It was 10 years ago.."),
new InLink("dalaiinthesky.html", "Pleasant Lake", null, null),
new InLink("biomass.html", "Pleasant Lake", null, null),

],

"pianos.html":[
new OutLink("occidental.html", "occidental", null, null),
new InLink("wisdom.html", "pianos", null, null),
new InLink("stories.html", "pianos", "love letters", "loveletters, yellow pages,"),
new InLink("centmilledefacts.html", "pianos", "exile of the swan", "passing"),

],

"piano.html":[
new OutLink("songs.html", "", "", ""),
new OutLink("songs.html", "", "", "Once my brothers (but not the one who is a professional comic) began telling the punchlines of jokes. They were able to list what seemed like hundreds of them in turn. My brother Tom’s wife, Linda, laughed and laughed and Carolyn was amazed. I could not keep up with my brothers and recalled few of the jokes they quoted punchlines for. None of us brothers play the piano, though my father taught himself to do so. Brian does play the guitar and harmonica and all three of the others can sing, though I cannot. Io parlo poco Italiano."),
new InLink("fourhorsemen.html", "piano", "a further note", "three legged horse?"),

],

"phantom.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new InLink("iceman.html", "phantom", null, null),
new InLink("centmilledefacts.html", "phantom", "glacial ice", "l"),

],

"phaedrus.html":[
new OutLink("stepone.html", "step one", null, null),
new OutLink("after.html", "after", null, null),
new OutLink("ikons.html", "ikons", null, null),
new InLink("aswan.html", "Phaedrus", null, null),

],

"passages.html":[
new OutLink("ghislaineguertin.html", "", "", "Number 3, June 1989"),
new InLink("ghislaineguertin.html", "Pasages", "", "Passages"),

],

"pasadena.html":[
new OutLink("garments.html", "garments", null, null),
new OutLink("myfathersroom.html", "my father\'s room", null, null),
new OutLink("history.html", "History", "mean nonce sans", "how thin the membrane between meaning and nonsense"),
new OutLink("1982.html", "1982", "herstory", "Magdalena and the mother here"),
new OutLink("stories.html", "stories", "Lil O\'Lady", "the crypt is unveiled"),
new OutLink("centmilledefacts.html", "Cent mille de facts", "Who\'s he when she\'s at ho", "fragments of meaning and a missing author"),
new InLink("pleasures.html", "Pasadena", null, null),
new InLink("22shortfilmsrerpower.html", "Pasadena", "twinny questions", "“Little old lady who”)"),

],

"partfour.html":[
new OutLink("", "", "", "new"),
new InLink("obieswathed.html", "part four", null, null),

],

"parry.html":[
new OutLink("query.html", "", "", ">No"),

],

"parable.html":[
new OutLink("there.html", "there", null, null),
new OutLink("couplet.html", "couplet", "quatrain Coltrane", "about living in the moment, a frenzy"),
new InLink("centmilledefacts.html", "parable", "mere memory", "i"),

],

"pandoralaura.html":[
new OutLink("housahoser.html", "", null, null),
new InLink("yoda.html", "PandoraLaura", null, null),
new InLink("housahoser.html", "PandoraLaura", "stares", "Laura Mulvey:"),

],

"outofrhythm.html":[
new OutLink("ours.html", "ours", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("river.html", "River", null, null),
new OutLink("anotherhouse.html", "another house", null, null),
new OutLink("myself.html", "myself", "in short", "What am I looking for here at the river?"),
new InLink("fustytu.html", "out of rhythm", null, null),
new InLink("couplet_1.html", "out of rhythm", null, null),
new InLink("archangel.html", "out of rhythm", null, null),

],

"outofmemory.html":[
new OutLink("suitcasememory.html", "suitcase memory", null, null),
new OutLink("", "", "", "out of memory"),
new OutLink("suitcasememory.html", "recursus", "suitcase memory", ""),
new OutLink("command_001.html", "", "wondering", ""),
new InLink("newday.html", "out of memory", null, null),
new InLink("modernmanandbaby.html", "out of memory", null, null),

],

"outerspace.html":[
new OutLink("here.html", "here", null, null),
new InLink("stories.html", "outerspace", "the idea of love", "“I love the idea of east of the sun"),
new InLink("stories.html", "outer space", "water color", "watercolor"),
new InLink("22shortfilmsrerpower.html", "outer space", "ricurso", "maestro outside San Marino"),
new InLink("14.html", "outer space", null, null),
new InLink("14.html", "", "", ""),

],

"ourstorysofar.html":[
new OutLink("here.html", "here", null, null),
new OutLink("there.html", "there", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("theendofthecoldwar.html", "The End of the Cold War", null, null),
new OutLink("pleasantlake.html", "Pleasant Lake", null, null),
new OutLink("sleepy.html", "Sleepy", null, null),
new OutLink("shadowhappiness.html", "shadow happiness", null, null),
new OutLink("september.html", "September", null, null),
new OutLink("ikons.html", "ikons", null, null),
new OutLink("anotherhouse.html", "another house", null, null),
new InLink("yoda.html", "our story so far", "O I see", "much as the one which follows inexorably here"),
new InLink("twilight.html", "our story so far", null, null),
new InLink("twilight.html", "our story so far", "libretto", "click here to skip credits"),
new InLink("index.html", "co już wiadomo o naszej historii", null, null),
new InLink("credits.html", "co już wiadomo o naszej historii", null, null),

],

"ours.html":[
new OutLink("birdsweave.html", "birds weave", null, null),
new OutLink("myself.html", "myself", null, null),
new InLink("seesee.html", "ours", "caro", "caro"),
new InLink("outofrhythm.html", "ours", null, null),
new InLink("everyones.html", "ours", null, null),
new InLink("awayout.html", "", "", "Air travel, electronic mail, word processing, sexual reveries, I gave you fantasy as well as your beloved H&J...”"),

],

"oulipo.html":[
new OutLink("backstory.html", "backstory", null, null),
new OutLink("themeaning.html", "The meaning", null, null),
new InLink("themeaning.html", "oulipo", null, null),
new InLink("multilingual.html", "oulipo", null, null),

],

"oreallyo.html":[
new OutLink("seeside.html", "SEE side", null, null),
new OutLink("seeside.html", "SEE side", "()", "Ironically for all this talk about mistakes and erring"),
new OutLink("blue.html", "blue", "extra vagant", "I think of Thoreau’s errant"),
new OutLink("transformation.html", "transformation", "anew", "no one seemed to notice the error in the transcription"),
new OutLink("occidental.html", "occidental", "", "new type of accident"),
new InLink("seeside.html", "o really o", "()", "I felt that whoever designed the parts that popped up was mistaken, that there were other ways of having things pop up."),

],

"operatingsystem.html":[
new OutLink("whatthesailorsays.html", "what the sailor says", null, null),
new InLink("thiscomputer.html", "operating system", null, null),
new InLink("suitcasememory.html", "operating system", "or", "Each microcassette like a suitcase full of dreams, the machine bleating on my lap as I boot the editor again."),
new InLink("chryalis.html", "operating system", "sails", "Odysseus"),

],

"onpineneedles.html":[
new OutLink("justwheretheriver.html", "just where the river", null, null),
new InLink("waterglinting.html", "on pine needles", null, null),

],

"ohbravenewworld.html":[
new OutLink("itistothee.html", "It is to thee...", null, null),
new InLink("yoda.html", "Oh brave new world", null, null),
new InLink("asylum.html", "Oh brave new world", null, null),

],

"occidental.html":[
new OutLink("seven", "seven", null, null),
new InLink("pianos.html", "occidental", null, null),
new InLink("oreallyo.html", "occidental", "", "new type of accident"),

],

"observatory.html":[
new OutLink("node.html", "", "", "Dissolve to the analog"),
new InLink("mars.html", "Observatory", null, null),

],

"obieswathed.html":[
new OutLink("partfour.html", "part four", null, null),
new OutLink("there.html", "there", null, null),
new InLink("two.html", "Obie swathed", "how he wraps the child", ""),
new InLink("hewakes.html", "Obie swathed", null, null),
new InLink("elf.html", "Obie swathed", null, null),
new InLink("command.html", "command", null, null),

],

"obiesmouth-truth.html":[
new OutLink("howhesleeps.html", "how he sleeps", null, null),
new InLink("mouths-world.html", "Obie\'s mouth-truth", null, null),

],

"nuclearfishing.html":[
new OutLink("theoldmanandthesee.html", "The Old Man and the see", null, null),
new InLink("seizethedj.html", "nuclear fishing", null, null),

],

"nousnote.html":[
new OutLink("node.html", "node", null, null),
new InLink("whetherreport.html", "nousnote", null, null),
new InLink("comingtowriting.html", "á nous note", null, null),
new InLink("comingtowriting.html", "", "", "“Who is the Superuncle who hasn’t prevented a girl from flying, the flight of the thief, who has not bound her, who has not bandaged the feet of his little darling, so that they might be exquisitely petite, who hasn’t mummified her into prettiness?”"),
new InLink("14.html", "nousnote", null, null),

],

"notsomuch.html":[
new OutLink("severity.html", "severity", null, null),
new OutLink("stories.html", "stories", null, null),
new OutLink("nightswork.html", "night\'s work", null, null),
new InLink("stories.html", "not so much", "distant eros", "believe these names, Josh and Jane"),
new InLink("distanttenderness.html", "not so much", null, null),

],

"notes.html":[

],

"noons.html":[
new OutLink("ikons.html", "ikons", null, null),
new InLink("stories.html", "noons", "()", "ry.)"),
new InLink("stories.html", "noons", "()", "Josh is talking"),
new InLink("shadowhappiness.html", "noons", null, null),
new InLink("september.html", "noons", null, null),
new InLink("gs.html", "noons", null, null),
new InLink("22shortfilmsrerpower.html", "noons", null, null),
new InLink("22shortfilmsrerpower.html", "", "", ""),

],

"noonecared.html":[
new OutLink("totheleftof.html", "to the left of", null, null),
new InLink("soiwroteacolumn.html", "No one cared. ", null, null),

],

"node.html":[
new OutLink("towersinair.html", "towers in air", null, null),
new OutLink("biomass.html", "biomass", null, null),
new InLink("sonata.html", "node", null, null),
new InLink("observatory.html", "", "", "Dissolve to the analog"),
new InLink("nousnote.html", "node", null, null),
new InLink("moredogons.html", "node", "second feature", "girls"),
new InLink("lacrise.html", "node", null, null),
new InLink("lacrise.html", "node", "La Crise continued", "(the cursor ticks like a clock) “In a weekly magazine recently I happened to read an interview with a famous novelist (I won’t mention his name because, on the one hand, the phrase was only attributed to him, and on the other I am reconstructing it from memory, and I don’t want to attribute to someone a thing he may not have said; but if he didn’t say it others are saying the same thing); he declared that reason can no longer explain the world in which we live and so we have to rely on other instruments.”"),
new InLink("lacrise.html", "node", "La Crise continued", ""),
new InLink("lacrise.html", "node", "La Crise continue", "@1986 Harcourt Brace Jovanovich."),

],

"nightswork.html":[
new OutLink("intimenightall.html", "in time, night, all", null, null),
new InLink("whatsinkswhatrises.html", "night\'s work", null, null),
new InLink("notsomuch.html", "night\'s work", null, null),

],

"newday.html":[
new OutLink("outofmemory.html", "out of memory", null, null),
new OutLink("lesheurs.html", "Les Heurs", null, null),
new OutLink("towersinair.html", "towers in air", null, null),
new InLink("two.html", "new day", "how time passes", ""),
new InLink("laundrydonebeautiful.html", "New day.", null, null),

],

"nearly.html":[
new OutLink("ghislaineguertin.html", "", "", "First typing this I wrote “very early,” an apt typo."),
new InLink("ghislaineguertin.html", "nearly", "", "nearly"),

],

"naturaleloquence.html":[
new OutLink("theend.html", "the end", "water of life", "a scant half-bottle of counterfeit Hennessey"),
new OutLink("shid.html", "", "", "Which of course made him unfitted for work, had there been some. But there was none, save a counter job at the drugstore which the Employment people admitted already had two hundred applicants for; and—surprise, surprise—a little off-the-books deal that Wart-dumbski suggested, involving occupying a shack he owned along Route 12 and selling marital aids, love creams, and stroke books to cretins."),

],

"myself.html":[
new OutLink("reineofhearts.html", "Reine of hearts", null, null),
new OutLink("after.html", "after", null, null),
new OutLink("centmilledefacts.html", "Cent mille de facts", "frozen form", "like Mallarmé’s swan"),
new InLink("outofrhythm.html", "myself", "in short", "What am I looking for here at the river?"),
new InLink("ours.html", "myself", null, null),
new InLink("housahoser.html", "myself", "am", "who\'s there"),
new InLink("autumnalwalkings.html", "myself", null, null),

],

"myfathersroom.html":[
new OutLink("aerver.html", "VER", null, null),
new InLink("wolflake.html", "my father\'s room", "any man", "as much as I have any man"),
new InLink("sweaters.html", "my father\'s room", null, null),
new InLink("pasadena.html", "my father\'s room", null, null),
new InLink("housahoser.html", "my father\'s room", "lifting the roof", "lifting the roof off the American home, like the lid off a casket"),
new InLink("housahoser.html", "my father\'s room", "left Hugh", "“Who died and left you boss?”"),

],

"multilingual.html":[
new OutLink("oulipo.html", "oulipo", null, null),
new InLink("ghislaineguertin.html", "multilingual", "", "Frenchness"),

],

"mouths-world.html":[
new OutLink("obiesmouth-truth.html", "Obie\'s mouth-truth", null, null),
new OutLink("scent.html", "scent", "marked this gap", "Remembered details long beyond recall. Your plump tit bulging from the oxford cloth blouse, sweet and globe-like and inviting, full with milk and as sour sometimes as the ham rind,"),
new InLink("two.html", "mouths-world", "how he learned the world", ""),
new InLink("suitcasememory.html", "", "", "I recalled, as clearly as a dream, you saying once, “They learn the world with their mouths.”"),
new InLink("hi-pitchedvoices.html", "mouths-world", null, null),

],

"motherlandfathertongue.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("seesee.html", "see see", "o sea", "w"),
new OutLink("sonata.html", "(son)ata", "son\'s seequence", "c"),
new OutLink("seesee.html", "", "", "w"),
new OutLink("sonata.html", "", "", "c"),
new OutLink("pleasantlake.html", "", "", "get on with the story?"),
new InLink("lacrise.html", "motherlandfathertongue", "on woven", "Umberto Eco, \"On the Crisis of the Crisis of Reason, (1980)\" Travels in Hyperreality, translated from the Italian by William Weaver,"),
new InLink("22shortfilmsrerpower.html", "motherland fathertongue", "whocalls whatcheer", "Quotha: w/c,"),

],

"mother.html":[
new OutLink("elf.html", "elf", null, null),
new OutLink("abeginning.html", "a beginning", "favor", "found favor in the eyes of the mother"),
new InLink("savaissabrett.html", "mother", "fearful dark decent", "Rather on account of her relative proximity to death she may have been concerned with different things"),
new InLink("drowsy.html", "mother", null, null),

],

"morning.html":[
new OutLink("twom.html", "Two m", null, null),
new InLink("damndearbloombloor.html", "morning", null, null),
new InLink("certaincertainties.html", "morning", "memory\'s fragrance", "her scent"),
new InLink("centmilledefacts.html", "morning", "day\'s passing", "W"),

],

"moredogons.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power.html", null, null),
new OutLink("alaxalasalass.html", "test", "test", ""),
new OutLink("pleasantlake.html", "Pleasant Lake", "10 years after", "It was 10 years ago.."),
new OutLink("node.html", "node", "second feature", "girls"),
new InLink("savaissabrett.html", "more dogons", "dojo", ""),
new InLink("savaissabrett.html", "more dogons", "dojo", "He walks up to the cart and says, “Make me one with everything.”"),

],

"modernmanandbaby.html":[
new OutLink("outofmemory.html", "out of memory", null, null),
new InLink("yoda.html", "modern man and baby", null, null),
new InLink("lesheurs.html", "modern man and baby", null, null),

],

"mickhammer.html":[
new OutLink("asuspect.html", "a suspect!", null, null),
new OutLink("apositiveid.html", "a positive ID!", "whohe", "who he looked like"),
new OutLink("whosthestoolie.html", "Who\'s the stoolie?", "whoshe", "how Glenn Barrett knew I was a writer"),
new OutLink("whosaidwhat.html", "who said what", "whosd", "once he knew why he told our darling Polecat boy Scumsaw to ask me for help"),
new OutLink("whetherreport.html", "whether report", "fastforward", "how long it would be before the sheriff showed up at the door"),
new InLink("leeryabandonnedchild.html", "Mick Hammer", null, null),

],

"michaelcentury.html":[
new OutLink("doeshenrysee.html", "does henry see?", null, null),
new InLink("doeshenrysee.html", "Michael Century", "()", "Michael Century (a name which seemed an omen then"),

],

"michael.html":[
new OutLink("sleepy.html", "sleepy", null, null),
new InLink("seeside.html", "Michael", "()", "Michael was talking about"),

],

"memory.html":[
new OutLink("tapes56.html", "Tapes 5&6", null, null),
new OutLink("wonders.html", "wonders", null, null),
new OutLink("-30-.html", "", "", "What features differentiate the species?"),
new OutLink(".html", "", "", "What light was in"),
new OutLink("september.html", "September", "mother\'s eyes", "my mother’s eyes"),
new InLink("wisdom.html", "memory", null, null),
new InLink("towersinair.html", "memory", "mother", "My mother he thinks anna m. you my love; not a freckle but the faint pebbled aureole of someone’s nipple from long ago or the efflorescent, otherworldly pink along a trout’s flank."),
new InLink("housahoser.html", "memory", "in our last episode", "What happened to the story"),
new InLink("aswan.html", "memory", null, null),

],

"mechanicalquip.html":[
new OutLink("wisdom.html", "wisdom", null, null),
new InLink("dialectic.html", "", "", ">add to forgetting"),

],

"meaning.html":[
new OutLink("suit.html", "suit", null, null),
new OutLink("butter.html", "Butter", null, null),
new OutLink("servicemarks.html", "service marks", "end of the road", "There is no end to meaning."),
new OutLink("songs.html", "Songs", "way round", "They know their way around"),
new InLink("postcardtoher.html", "Meaning", null, null),
new InLink("2.html", "Meaning", null, null),

],

"mars.html":[
new OutLink("cosifantutte.html", "Cosi fan tutte", null, null),
new OutLink("observatory.html", "Observatory", null, null),
new InLink("reignsinadrytime.html", "Mars", null, null),

],

"manofaction.html":[
new OutLink("springsprung.html", "spring sprung", null, null),
new InLink("immigranttothisshore.html", "man of action", null, null),

],

"lurchesfromitsmouth.html":[
new OutLink("inahalf-hiddencave.html", "in a half-hidden cave", null, null),
new InLink("justwheretheriver.html", "lurches from its mouth", null, null),

],

"looknow--obie.html":[
new OutLink("lake-memory.html", "Lake-memory", null, null),
new InLink("blueboat-city.html", "Look now--Obie", null, null),

],

"livingstill.html":[
new OutLink("youllsees.html", "", null, null),
new OutLink("cave.html", "cave", "sparsos congregavit", "Anne Johnstone is here."),
new InLink("dautunno.html", "living still", "stillness of my lost love", "She lives still by a river with her mother who has come over the sea where she is looked in upon by women newly acquainted who have taken on her"),

],

"littlegedditing.html":[
new OutLink("sleepysong.html", "sleepy song", "in joke", "There was an editor by this name, Herman his, as they used to say, Christian name, though he was Jewish; and we used to correspond about my fiction. I think he wanted to publish me; I know I wanted him to publish me. The letters were witty and wise and I suppose I should have paid more mind. It was often hard to sleep in those days. I ate no cabbages."),
new InLink("goldbugs.html", "Little Gedditing", "g spot", "Golubs"),

],

"lights.html":[
new OutLink("command003.html", "command", null, null),
new InLink("aretreatingfigure.html", "lights", null, null),

],

"lifeinabox.html":[
new OutLink("awayout.html", "a way out", null, null),
new OutLink("inthehigherair.html", "", "", "I offer to remove you from linear life and transport you to a world of orbiting molecules and magnetic dimensions, but you prefer not to..."),
new InLink("portraitoftheartist.html", "life in a box", null, null),
new InLink("asasillyman.html", "life in a box", null, null),

],

"lettureimpalpabili.html":[
new OutLink("fourhorsemen.html", "four horsemen", null, null),
new InLink("fourhorsemen.html", "letture impalpabili", "", "the article about afternoon from Il Sole"),

],

"lesheurs.html":[
new OutLink("modernmanandbaby.html", "modern man and baby", null, null),
new InLink("newday.html", "Les Heurs", null, null),
new InLink("biomass.html", "Les Heurs", null, null),

],

"leeryabandonnedchild.html":[
new OutLink("mickhammer.html", "Mick Hammer", null, null),
new InLink("fredandbarney.html", "leery, abandonned child", null, null),

],

"laundrydonebeautiful.html":[
new OutLink("cixous.html", "Cixous", null, null),
new OutLink("elf.html", "elf", null, null),
new OutLink("newday.html", "New day.", null, null),
new InLink("september.html", "", "", "Laundry done. Beautiful soup. Jewel autumn afternoon."),

],

"lake-memory.html":[
new OutLink("hestirs-obie.html", "He stirs-Obie", null, null),
new InLink("looknow--obie.html", "Lake-memory", null, null),

],

"lacrise.html":[
new OutLink("node.html", "node", null, null),
new OutLink("node.html", "node", "La Crise continued", "(the cursor ticks like a clock) “In a weekly magazine recently I happened to read an interview with a famous novelist (I won’t mention his name because, on the one hand, the phrase was only attributed to him, and on the other I am reconstructing it from memory, and I don’t want to attribute to someone a thing he may not have said; but if he didn’t say it others are saying the same thing); he declared that reason can no longer explain the world in which we live and so we have to rely on other instruments.”"),
new OutLink("node.html", "node", "La Crise continued", ""),
new OutLink("motherlandfathertongue.html", "motherlandfathertongue", "on woven", "Umberto Eco, \"On the Crisis of the Crisis of Reason, (1980)\" Travels in Hyperreality, translated from the Italian by William Weaver,"),
new OutLink("node.html", "node", "La Crise continue", "@1986 Harcourt Brace Jovanovich."),
new InLink("transformation.html", "La Crise", "ma cina", "a hypothetical machine"),
new InLink("stories.html", "La Crise", "some one", "Strauss or someone writes elsewhere"),

],

"keywest.html":[
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new InLink("yoda.html", "Key West", null, null),
new InLink("immigranttothisshore.html", "Key West", "riddle", "considering Wallace Stevens"),

],

"justwheretheriver.html":[
new OutLink("lurchesfromitsmouth.html", "lurches from its mouth", null, null),
new InLink("onpineneedles.html", "just where the river", null, null),

],

"justus.html":[
new OutLink("iknownotsees.html", "I know not see\'s", null, null),
new InLink("crossexamination.html", "just us", null, null),

],

"justlikelife.html":[
new OutLink("asinisteract.html", "a sinister act ", null, null),
new InLink("whatthesailorsays.html", "just like life", null, null),

],

"ja.html":[
new OutLink("scrimshaw.html", "", "", "“Ja!”"),
new InLink("inpursuitofyo.html", "Ja!", null, null),

],

"iwasntevenguiltyof.html":[
new OutLink("hj2.html", ">H&J", null, null),
new OutLink("elf.html", "elf", "ire", ""),
new OutLink("elf.html", "elf", "ire", "Shit Face Ireland yes"),
new OutLink("butter.html", "Butter", "smear", "Solidarinosc yup"),
new InLink("thesailorread.html", "I wasn\'t even guilty of ", null, null),

],

"itistothee.html":[
new OutLink("immigranttothisshore.html", "immigrant to this shore", null, null),
new InLink("ohbravenewworld.html", "It is to thee...", null, null),

],

"itbeginssomewhere.html":[
new OutLink("blueboat-city.html", "Blue boat-city", null, null),
new OutLink("blueboat-city.html", "", "", "one"),
new OutLink("two.html", "", "", "two"),
new InLink("pleasantlake.html", "It begins somewhere", null, null),

],

"inwhichhe.html":[
new OutLink("somesay.html", "some say", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", "Reine", "ever an object of superstitious awe"),
new OutLink("wonders.html", "wonders", "there there", "there their mothers"),
new InLink("garments.html", "in which he", null, null),
new InLink("fidelity.html", "in which he", null, null),
new InLink("asong.html", "in which he", null, null),
new InLink("asong.html", "in which he", "in which he", "There is an Irish jig to which the following lyrics have been put:"),

],

"intimenightall.html":[
new OutLink("distanttenderness.html", "distant tenderness", null, null),
new OutLink("fustytu.html", "fusty tu", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("command_002.html", "command", null, null),
new InLink("nightswork.html", "in time, night, all", null, null),

],

"inthehigherair.html":[
new OutLink("3johan.html", "3. Johan", null, null),
new OutLink("aerver.html", "VER", null, null),
new OutLink("aerver.html", "", "", "You are listening to AER: aural entertainment retransmission"),
new InLink("seizethedj.html", "in the higher air", "AER lingus", "“It’s one thirty-five,” the generic announcer says. He has no connection to this time, this tape they play was made months ago in California."),
new InLink("lifeinabox.html", "", "", "I offer to remove you from linear life and transport you to a world of orbiting molecules and magnetic dimensions, but you prefer not to..."),
new InLink("fredandbarney.html", "in the higher air", null, null),
new InLink("fiveelements.html", "in the higher air", null, null),
new InLink("anchoringdevices.html", "in the higher air", "AER lingus", "on the air"),
new InLink("actionandpassion.html", "in the higher air", "BEMs invade earth", "the books his father read—sci-fi and whathaveyou,"),
new InLink("5worldsedge.html", "", "", "marked by passing satellites and spy planes of decades past"),
new InLink("3johan.html", "in the higher air", "aer", "a plane high above"),

],

"inthedisclosuresof.html":[
new OutLink("concealedbirds.html", "concealed birds", null, null),
new InLink("asiflightspoke.html", "in the disclosures of", null, null),

],

"interrogationinterra.html":[
new OutLink("yourstruly.html", "yours, truly", null, null),
new InLink("aspittinimage.html", "interrogation, in terra", null, null),
new InLink("akeyquestion.html", "interrogation, in terra", null, null),

],

"input.html":[
new OutLink("thiscomputer.html", "this computer", null, null),
new InLink("command_1.html", "input", null, null),

],

"inpursuitofyo.html":[
new OutLink("ja.html", "Ja!", null, null),
new InLink("blacktalk.html", "", "", "\"Yo!\" I shouted to the rain."),

],

"inlightonlight.html":[
new OutLink("uponoppositeshores.html", "upon opposite shores", null, null),
new InLink("etcheditself.html", "in light on light", null, null),

],

"index.html":[
new OutLink("ourstorysofar.html", "co już wiadomo o naszej historii", null, null),
new OutLink("http://www.techsty.art.pl/hipertekst/tworcy/mjoyce.htm", "", "nota od autora", "Michael Joyce"),
new InLink("readingstoryspaces.html", "", "()", "click here."),

],

"inahalf-hiddencave.html":[
new OutLink("belowanoldmountain.html", "below an old mountain", null, null),
new InLink("lurchesfromitsmouth.html", "in a half-hidden cave", null, null),

],

"immigranttothisshore.html":[
new OutLink("manofaction.html", "man of action", null, null),
new OutLink("keywest.html", "Key West", "riddle", "considering Wallace Stevens"),
new InLink("itistothee.html", "immigrant to this shore", null, null),
new InLink("butter.html", "immigrant to this shore", "Columbus, or the dove", "Lódz"),

],

"illegalthey.html":[
new OutLink("dazeofthewoke.html", "daze of the woke", null, null),
new InLink("idyllicthey.html", "illegal they", null, null),

],

"ikons.html":[
new OutLink("1.html", "1", null, null),
new InLink("phaedrus.html", "ikons", null, null),
new InLink("ourstorysofar.html", "ikons", null, null),
new InLink("noons.html", "ikons", null, null),
new InLink("eyes.html", "ikons", null, null),

],

"iknownotsees.html":[
new OutLink("seas.html", "seas", null, null),
new InLink("justus.html", "I know not see\'s", null, null),

],

"idyllicthey.html":[
new OutLink("illegalthey.html", "illegal they", null, null),
new OutLink("essencily.html", "essencily", null, null),
new InLink("tapes56.html", "Idyllic, they", "One year made you clowns", "(Tapes five and six, July 1981)"),

],

"ideograms.html":[
new OutLink("fiveelements.html", "five elements", null, null),
new OutLink("4annam.html", "4. Anna M.", null, null),
new InLink("electric.html", "ideograms", null, null),
new InLink("centmilledefacts.html", "ideograms", "swan", "What once was a swan"),
new InLink("ariddleman.html", "ideograms", "married", "living there, as now (a latter Irish farmhouse, two old marrieds in a new apartment and an old house) sheltered by the branches of old trees."),

],

"iceman.html":[
new OutLink("phantom.html", "phantom", null, null),
new OutLink("speech.html", "cherry", "charry", "Notes on the Cherry Orchard"),
new OutLink("asong.html", "a song", "on knitted erse", "\" A people united"),
new InLink("rest-s.html", "ice man", null, null),
new InLink("centmilledefacts.html", "ice man", "snow hunted", "l"),

],

"huh.html":[
new OutLink("gettingitdown.html", "getting it down", null, null),
new InLink("boytake.html", "", "", "Woytek Szejmcaj."),

],

"howthingshappen-guns.html":[
new OutLink("whathappens.html", "what happens", null, null),
new OutLink("3johan.html", "3. Johan", "brandish", "I look at them now with different eyes, understand the mind which might buy one and, cornered, think to brandish it."),
new OutLink("andshouldhavewonit.html", "and should have won it", "master\'s dreams", "not nightmares but meta-dreams, all abstract patterns, geometry, music or algebra, the shifting tiles within kaleidoscopes. What chess masters must dream, or the odd men who carve wood into intertwined links of a chain, or boats in bottles."),
new InLink("caught.html", "how things happen with guns", null, null),

],

"howhesleeps.html":[
new OutLink("sonata.html", "(son)ata", null, null),
new OutLink("soon.html", "soon", null, null),
new OutLink("command_001.html", "command", null, null),
new InLink("two.html", "how he sleeps", "how he sleeps", ""),
new InLink("suitcasememory.html", "how he sleeps", null, null),
new InLink("obiesmouth-truth.html", "how he sleeps", null, null),
new InLink("adeath.html", "how he sleeps", "chrysalis", "chrysalis"),

],

"housahoser.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("pandoralaura.html", "PandoraLaura", "stares", "Laura Mulvey:"),
new OutLink("myfathersroom.html", "my father\'s room", "lifting the roof", "lifting the roof off the American home, like the lid off a casket"),
new OutLink("reineofhearts.html", "Reine of hearts", "viz", "opening its domestic space into a complex terrain of social and sexual significance"),
new OutLink("memory.html", "memory", "in our last episode", "What happened to the story"),
new OutLink("couplet.html", "couplet", "stairs", "the connotations of stairs"),
new OutLink("echolalia.html", "echolalia", "acsendere", "opera aperta) Umberto discende"),
new OutLink("riding.html", "riding", "Housatonic", "A gently flowing river in the Berkshires through Connecticut?"),
new OutLink("aphoto.html", "a photo", "else where", "the milky look of the rotogravured photographs, the men in fedoras and wide trousers."),
new OutLink("myfathersroom.html", "my father\'s room", "left Hugh", "“Who died and left you boss?”"),
new OutLink("transubstantiate.html", "transubstantiate", "cryptic", "“That just takes the cake.”"),
new OutLink("myself.html", "myself", "am", "who\'s there"),
new InLink("twom.html", "Housa Hoser", "pants", "Perhaps begin to wear old suits? pleat-fronted gabardines with trousers that sail in the breeze."),
new InLink("pandoralaura.html", "", null, null),
new InLink("doeshenrysee.html", "Housa Hoser", "on whatsa easy", "psychic remnant of an old ethnic joke"),
new InLink("22shortfilmsrerpower.html", "Housa Hoser", "Umberto\'s Claim House", "(Knocka knock who’sa there?"),

],

"hj2.html":[
new OutLink("command.html", "command", null, null),
new InLink("iwasntevenguiltyof.html", ">H&J", null, null),

],

"hj.html":[
new OutLink("transmogrifikey.html", "transmogrifikey ", null, null),
new InLink("two.html", "H & J", "how the world once was", ""),
new InLink("fustytu.html", "H&J", null, null),
new InLink("asinisteract.html", "H&J", null, null),

],

"history.html":[
new OutLink("after.html", "after", null, null),
new InLink("whathappenedtous.html", "History", null, null),
new InLink("stories.html", "history", "himself", "Scrimshaw"),
new InLink("stories.html", "history", "access something", "bringing yourself out of that world to access something"),
new InLink("september.html", "History", null, null),
new InLink("saltorchopinin6.html", "History", "poles", "he or anyone should know how I feel about the polack fop—"),
new InLink("pasadena.html", "History", "mean nonce sans", "how thin the membrane between meaning and nonsense"),
new InLink("freshessai.html", "être dans le solitude Revue de Psychanalyse", null, null),
new InLink("freshessai.html", "historia", "", "Être dans la solitude, Nouvelle Revue de Psychanalyse, Numéro 36, Automne 1987 “La solitude a mille visages. A une extrême: exclusion, anéantissment. A un autre: retrait voluntaire, chambre à soi, vie contemplative.”"),
new InLink("1955.html", "History", null, null),

],

"hishopes.html":[
new OutLink("dalaiinthesky.html", "Dalai in the sky", null, null),
new OutLink("1955.html", "1955", "heiress", "he entered the heiress"),
new InLink("youllsees.html", "his hopes", null, null),
new InLink("stories.html", "his hopes", "", "imagine my penis"),
new InLink("realm.html", "his hopes", null, null),

],

"hi-pitchedvoices.html":[
new OutLink("centmilledefacts.html", "Cent mille de facts", null, null),
new OutLink("caring.html", "caring", null, null),
new OutLink("sorrows.html", "sorrows", null, null),
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("archangel.html", "archangel", null, null),
new OutLink("mouths-world.html", "mouths-world", null, null),
new InLink("wolflake.html", "", "", "out => Hi Pitched Voices"),
new InLink("cave.html", "high pitched voices", "", "out => Hi Pitched Voices"),

],

"hewakes.html":[
new OutLink("obieswathed.html", "Obie swathed", null, null),
new InLink("worldnoises.html", "he wakes", null, null),

],

"hestirs-obie.html":[
new OutLink("postcardtoher.html", "postcard to her", null, null),
new InLink("prophet.html", "He stirs Obie", "unriddled", "its own riddle here"),
new InLink("lake-memory.html", "He stirs-Obie", null, null),
new InLink("dautunno.html", "He stirs-Obie", null, null),
new InLink("butter.html", "He stirs-Obie", "the day she dies", "April 10th"),

],

"here.html":[
new OutLink("1.html", "1", null, null),
new OutLink("whetherreport.html", "whether report", null, null),
new OutLink("theend.html", "the end", null, null),
new OutLink("sam.html", "sam", null, null),
new OutLink("sam.html", "", "", ""),
new InLink("stories.html", "here", "real life, or if not", "when reality is not available"),
new InLink("sam.html", "here", null, null),
new InLink("readingstoryspaces.html", "here", null, null),
new InLink("outerspace.html", "here", null, null),
new InLink("ourstorysofar.html", "here", null, null),
new InLink("eveningstar.html", "here", null, null),
new InLink("cave.html", "here again", null, null),
new InLink("cave.html", "", "", ""),
new InLink("6continental.html", "here", "Zauberberg", "a symposium on death upon a royal mountain"),
new InLink("1982.html", "here", null, null),

],

"heprotesteth.html":[
new OutLink("anchoringdevices.html", "Anchoring devices", null, null),
new InLink("awayout.html", "he protesteth", null, null),

],

"hensandchicks.html":[
new OutLink("dickshunairy.html", "dick shun airy", null, null),
new OutLink("takenbythecontinual.html", "taken by the continual", null, null),
new OutLink("suit.html", "suit", null, null),
new InLink("22shortfilmsrerpower.html", "", "", "or is that a cigar?"),

],

"heights.html":[
new OutLink("failus.html", "fail us?", null, null),
new OutLink("failus.html", "fail us?", "crossing Brooklyn ferry", "somehow linked"),
new OutLink("22shortfilmsrerpower.html", "fail us?", "is that a lotus?", "other instances of penile humor"),
new OutLink("biomass", "biomass", "biomass", "Like everyone I am trying to understand death."),
new OutLink("720.html", "720", "intervals", "So far the clearest quantitative measure of anyone’s understanding of death is the twelve minute difference between Glenn Gould’s"),
new OutLink("1955.html", "1955", "ML5060", "two recordings of the Goldberg Variations."),
new InLink("failus.html", "Heights", "quantitative measures", "Heights"),
new InLink("720.html", "Heights", "interval", "“Indeed all the music that has ever been can now become a background against which the impulse to make listener-supplied connections is the new foreground.”“The Prospects of Recording” (1966)"),

],

"heatwavechangeofpace.html":[
new OutLink("anaside.html", " an aside", null, null),
new InLink("yoda.html", "Heat wave:change of pace", null, null),
new InLink("whereweeblong.html", "Heat wave:change of pace", null, null),

],

"heaintheavy.html":[
new OutLink("easewhybother.html", "ease, why bother?", null, null),
new InLink("byitscover.html", "he ain\'t heavy", null, null),

],

"gs.html":[
new OutLink("noons.html", "noons", null, null),
new InLink("stories.html", "g\'s", "", "s.”"),
new InLink("stories.html", "g\'s", "", "“Toronto was full of them"),
new InLink("goldbugs.html", "g\'s", "goyims", "Golems"),

],

"greyday.html":[
new OutLink("endone.html", "end one", null, null),
new InLink("toher-perspective.html", "grey day", null, null),

],

"goldbugs.html":[
new OutLink("bazaar.html", "bazar", null, null),
new OutLink("gs.html", "g\'s", "goyims", "Golems"),
new OutLink("littlegedditing.html", "Little Gedditing", "g spot", "Golubs"),
new OutLink("ems.html", "ems", "block m", "Gold EMs"),
new OutLink("1982.html", "ems", "flirt", "still"),
new OutLink("1982.html", "1982", "flirt", "flirt with"),
new InLink("bazaar.html", "goldbugs", "", "Goldbug"),

],

"gnosis.html":[
new OutLink("son.html", "Son", null, null),
new InLink("father_1.html", "gnosis", null, null),

],

"glennbarrett.html":[
new OutLink("whosthestoolie.html", "Who\'s the stoolie?", null, null),
new InLink("roundususuallsuspects.html", "Glenn Barrett", null, null),

],

"ghislaineguertin.html":[
new OutLink("doeshenrysee.html", "", null, null),
new OutLink("nearly.html", "nearly", "", "nearly"),
new OutLink("editedout.html", "edited out", "", "edited out"),
new OutLink("doeshenrysee.html", "Does Henry see?", "()", "issue"),
new OutLink("passages.html", "Pasages", "", "Passages"),
new OutLink("centmilledefacts.html", "cen mille de facts", "ma nouvelle method", "These cards have very specific technical references built into them, but used a manual method"),
new OutLink("suit.html", "suit", "()", "worked out conceptual branching"),
new OutLink("couplet.html", "couplet", "", "of"),
new OutLink("multilingual.html", "multilingual", "", "Frenchness"),
new InLink("passages.html", "", "", "Number 3, June 1989"),
new InLink("nearly.html", "", "", "First typing this I wrote “very early,” an apt typo."),
new InLink("editedout.html", "Ghislaine Guertin", null, null),
new InLink("doeshenrysee.html", "()", "()", "French text by Ghislaine Guertin"),
new InLink("anotherhouse.html", "Ghislaine Guertin", "sous rapture", "consciously puts the phrase ‘she is dying to know’ under erasure"),

],

"gettingitdown.html":[
new OutLink("asylum.html", "asylum", null, null),
new InLink("huh.html", "getting it down", null, null),

],

"genesis.html":[
new OutLink("fredandbarney.html", "Fred and Barney", null, null),
new InLink("protagonistes.html", "Genesis?", null, null),

],

"garments.html":[
new OutLink("inwhichhe.html", "in which he", null, null),
new OutLink("takenbythecontinual.html", "taken by the continual", "flimsy", "flimsy garments to give him an opportunity"),
new OutLink("cosifantutte.html", "Cosi fan tutte", "something so lovely", "he loved his daughter better even"),
new InLink("pasadena.html", "garments", null, null),
new InLink("courting.html", "garments", null, null),

],

"fustytu.html":[
new OutLink("hj.html", "H&J", null, null),
new OutLink("outofrhythm.html", "out of rhythm", null, null),
new OutLink("aerver.html", "VER", null, null),
new InLink("stories.html", "fusty tu", "foist ever", "first ever"),
new InLink("intimenightall.html", "fusty tu", null, null),
new InLink("failus.html", "fusty tu", null, null),
new InLink("AERVER.html", "", "", "a New York minute"),

],

"freshessai.html":[
new OutLink("history.html", "être dans le solitude Revue de Psychanalyse", null, null),
new OutLink("history.html", "historia", "", "Être dans la solitude, Nouvelle Revue de Psychanalyse, Numéro 36, Automne 1987 “La solitude a mille visages. A une extrême: exclusion, anéantissment. A un autre: retrait voluntaire, chambre à soi, vie contemplative.”"),
new InLink("yoda.html", "Fresh essai", null, null),
new InLink("doeshenrysee.html", "Fresh essai", "()", "a French essay by Michel Schneider in the form of an aria and trente variations"),

],

"freewill.html":[
new OutLink("versusthetermination.html", "", "", ">screw up"),
new InLink("command_1b.html", "free will", null, null),

],

"fredandbarney.html":[
new OutLink("leeryabandonnedchild.html", "leery, abandonned child", null, null),
new OutLink("inthehigherair.html", "in the higher air", null, null),
new InLink("genesis.html", "Fred and Barney", null, null),

],

"francoisgirards.html":[
new OutLink("theendofthecoldwar.html", "The End of the Cold War", "histamine", "In the control room of a recording studio, the engineers discuss the merits of taking cream in their coffee, only half-noticing the enraptured figure behind the soundproof glass"),
new OutLink("doeshenrysee.html", "", "", "There, Glenn Gould (Colm Feore) begins by casually testing his blood pressure, then listens to a playback of his recording of Bach. To the sounds of the English Suite No. 2, he begins swaying and floating in the throes of esthetic ecstasy, his white shirt billowing in gravity-defying slow motion. Far removed from the engineers\' prosaic talk, he seems truly to have passed into another dimension. The audience for “Thirty-Two Short Films About Glenn Gould,” a brilliant and transfixing cinematic portrait by Francois Girard, can look forward to enjoying much the same sensation. For an hour and a half, without repeating himself or resorting to tactics that are even slightly familiar, Mr. Girard, whose film opens today at the Lincoln Plaza Cinemas, thoughtfully holds the viewer in thrall. Though it glancingly incorporates a great deal of biographical information, this carefully measured film does not choose to describe Gould in ordinary terms. Suffused as it is with the artist’s musical sensibility, it doesn’t even have to show him playing the piano. Instead, Mr. Girard explores and replicates his subject’s eccentric thought processes in a remarkably visceral way, drawing the audience palpably into Gould’s state of mind. This film works hypnotically, with great subtlety and grace, in ways that are gratifyingly consistent with Gould’s own thoughts about his music and his life. Mr. Girard\'s film is indeed a compilation of 32 glimpses, each of them instantly intelligible, some of them strung together in supremely delicate ways. The format makes dependable sense: this is hardly the first time the variations motif has been brought to bear in describing Gould. More than an homage to his triumphant recordings of Bach’s “Goldberg” Variations, this multifaceted structure seems the only possible means of approaching such a complex individual. If it sounds defiantly arty, that suits the subject and his “academic owlishness” (in the words of his biographer Otto Friedrich) perfectly. If it sounds obscure and daunting, it most certainly is not. If anything, “Thirty-Two Short Films About Glenn Gould” should prove even more mesmerizing to those who know little about Gould’s life than to those aware that he really did have tastes for ketchup, tranquilizers, arrowroot cookies and Petula Clark (not necessarily in that order). In its own quirky way, it assembles a surprisingly rigorous and illuminating portrait of the man. Defying any usual constraints of narrative or chronology, Mr. Girard can leap freely from Gould\'s boyhood to his mature work, from the hotel room to the concert stage, from the raptures of the music to silly questions asked by the press. The individual fragments are so meticulously realized that the whole becomes much greater than the sum of its parts. Typically fascinating is “L.A. Concert,” a fine example of how cannily Mr. Girard can present the facts of Gould’s life. We first see the pianist backstage, poised over a sink, soaking his arms in steaming water five minutes before a concert is to begin. Pill bottles are conspicuously arrayed in front of him. Called to the stage, he next appears dressed and ready, maintaining a serene detachment as an aide tries to instruct him about the irritating show-business realities of the evening. Just before reaching the stage, he pauses to talk with a stagehand and winds up signing a program for the man. Only when the stagehand examines the autograph does he learn that Mr. Gould has decided to make this 1964 concert performance his last. It would be difficult to think of a more adroit, economical way to convey all this information in a such relatively brief time. “Thirty-Two Short Films About Glenn Gould,” which was written by Mr. Girard with Don McKellar, is also able to fuse the informative with the poetic, particularly in the passages that deal hauntingly with Gould’s final days. (He died at 50, in 1982.) One of the film’s last images is of a Voyager satellite that went into space carrying aural souvenirs of Earth’s culture, including Gould’s recording of Bach’s “Well-Tempered Clavier.” The film’s announcement that the two Voyager spacecraft left our solar system in 1987 and 1989, respectively, suits its lingering impression that Gould was never quite of this world. Mr. Feore, a Canadian stage actor, does not overwhelmingly resemble Gould, but he becomes a commanding and believable presence all the same. With a voice that has been made to sound strangely disembodied, and with the ability to project brooding, playful intelligence, Mr. Feore enhances the film’s sense of deep mystery. Equally lulling and seductive are Mr. Girard’s fluid camera movements, which enable the film to prowl and survey with uncommon ease. In the end, his methods induce a complete and satisfying immersion into his many-faceted subject. Among the individual glimpses that must be mentioned here: “Practice,” in which Gould resonates to his own thrilling impression of Beethoven’s “Tempest” Sonata without ever touching a keyboard; “Truck Stop,” in which he hears and seems to orchestrate the voices of people around him; “Personal Ad,” in which he toys with the language of the lovelorn, then chuckles at the thought of ever representing himself in that way; “Diary of One Day,” a stunning compilation of formulas, medical notations, heartbeats and detailed X-rays of a person playing the piano. Even before the film reaches this last juncture, you will know that the heart and blood of the pianist have been captured on screen. Also worth noting: some significant omissions. Mr. Girard knew better than to mention Gould’s intense admiration for Barbra Streisand, or to use those sections of the “Goldberg” Variations that have powerfully evoked Dr. Hannibal Lecter ever since they were used to shocking effect in “The Silence of the Lambs.”32 SHORT FILMS ABOUT GLENN GOULD Directed by Francois Girard; written by Mr. Girard and Don McKellar; director of photography, Alain Dostie; edited by Gaetan Huot; music by various composers; produced by Niv Fichman; released by Samuel Goldwyn Company. At the Lincoln Plaza Cinemas, Broadway and 63d Street. Running time: 94 minutes. This film is not rated. WITH: Colm Feore as Glenn GouldCopyright 1994 The New York TimesTransmitted: 94-06-07 16:42:42"),
new InLink("seeside.html", "Francois Girard\'s", "()", "think the moral cusp of the question"),
new InLink("doeshenrysee.html", "Francois Girard", "()", "Francois Girard’s (hypertextual) collection of films about Glenn Gould"),

],

"fourthekphrastic.html":[
new OutLink("fifthekphrastic.html", "fifth ekphrastic", null, null),
new InLink("thirdekphrastic.html", "fourth ekphrastic", null, null),
new InLink("3johan.html", "fourth ekphrastic", null, null),

],

"fourhorsemen.html":[
new OutLink("piano.html", "piano", "a further note", "three legged horse?"),
new OutLink("lettureimpalpabili.html", "letture impalpabili", "", "the article about afternoon from Il Sole"),
new OutLink("dautunno.html", "d\'autunno", "a second chance at", "I know a joke about an Italian man"),
new OutLink("dickshunairy.html", "d\'autunno", "continuing explanation", "I do not tell jokes well, even in real life, nor do I remember them well. (It is curious that the above jokes involve the piano, which plays an important part here—no pun intended—and Italian men.)"),
new InLink("lettureimpalpabili.html", "four horsemen", null, null),

],

"fiveelements.html":[
new OutLink("inthehigherair.html", "in the higher air", null, null),
new OutLink("saltorchopinin6.html", "salt or Chopin in 6", null, null),
new InLink("seesee.html", "five elements", "teorama", "teo"),
new InLink("ideograms.html", "five elements", null, null),
new InLink("15.html", "five elements", null, null),
new InLink("1.html", "five elements", null, null),

],

"firstekphrastic.html":[
new OutLink("secondekphrastic.html", "second ekphrastic", null, null),
new OutLink("after.html", "after", "after", "Surrendering: this is how it will be to die."),
new InLink("there.html", "first ekphrastic", null, null),
new InLink("realm.html", "first ekphrastic", "stone cellars", "about funeral trains, and moor of preserved plums, and peaches"),
new InLink("caught--continued.html", "first ekphrastic", null, null),
new InLink("caring.html", "first ekphrastic", null, null),
new InLink("bazaar.html", "first ekphrastic", "ekphrastic", "ekphrastic"),
new InLink("8.html", "first ekphrastic", null, null),
new InLink("6continental.html", "first ekphrastic", null, null),
new InLink("1calliopeatmarathon.html", "first ekphrastic", null, null),

],

"fifthekphrastic.html":[
new OutLink("anotherhouse.html", "another house", null, null),
new OutLink("weoftenfelt.html", "We often felt", null, null),
new InLink("fourthekphrastic.html", "fifth ekphrastic", null, null),
new InLink("5worldsedge.html", "fifth ekphrastic", null, null),

],

"fidelity.html":[
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("yoda.html", "yoda", null, null),
new OutLink("inwhichhe.html", "in which he", null, null),
new OutLink("actionandpassion.html", "Action and Passion", "who we love", "the death of those we love"),
new InLink("youllsees.html", "fidelity", null, null),
new InLink("riddle.html", "fidelity", null, null),

],

"father_1.html":[
new OutLink("gnosis.html", "gnosis", null, null),
new InLink("son_1.html", "father", null, null),

],

"father.html":[
new OutLink("son.html", "Son", null, null),
new OutLink("songs.html", "Songs", null, null),
new InLink("son.html", "Father", null, null),

],

"failus.html":[
new OutLink("fustytu.html", "fusty tu", null, null),
new OutLink("everyonetriesnottobe.html", "Everyone tries not to be", "in her own way", "Everyone tries not to be a dick."),
new OutLink("heights.html", "Heights", "quantitative measures", "Heights"),
new OutLink("backstory.html", "backstory", "higher gelernting", "He had been asking about back-story, though not by name–the phallus is not the penis, and wondered whether there was any principle of selection in hyperfiction. “You just seem to leave everything in, where great art would select,” he said."),
new OutLink("eyes.html", "eyes", "self", "merely self-gratification"),
new OutLink("chryalis.html", "Chryalis", "a very thing", "had the notion of linking everything"),
new InLink("youllsees.html", "fail us?", "short cut circum cision", "an old vaudeville joke: is that a carrot in your pocket"),
new InLink("yoda.html", "fail us?", null, null),
new InLink("tiredofpomo.html", "failed us?", "pmc", "There are several levels of word play here, each of them fairly obscure and likely only to appeal to professors of a certain"),
new InLink("tiredofpomo.html", "failed us?", "pmc", "(passing, postmodern)"),
new InLink("seeside.html", "fail us?", "more el phallure", "is in Henry’s lap"),
new InLink("heights.html", "fail us?", null, null),
new InLink("heights.html", "fail us?", "crossing Brooklyn ferry", "somehow linked"),
new InLink("everyonetriesnottobe.html", "fail us?", "morpho", "“What this implies is that the female body is not to remain the object of men’s discourse or their various arts but it is to become the object of a female subjectivity experiencing and identifying itself. Such research attempts to suggest to women a morpho-logic that is appropriate to their bodies. It’s aimed at the male subject, too, inviting him to redefine himself as a body with a view to exchanges between sexed subjects.” Luce Irigaray, “Writing”"),
new InLink("bazaar.html", "fail us?", "la Caen", "alone"),
new InLink("backstory.html", "fail us?\n", " Freud on the ice", "blow away as soon as the next good fad kicks up.”"),

],

"eyes.html":[
new OutLink("ikons.html", "ikons", null, null),
new OutLink("6continental.html", "6. Continental", null, null),
new OutLink("anotherhouse.html", "another house", null, null),
new InLink("takenbythecontinual.html", "eyes", null, null),
new InLink("speech.html", "eyes", "speech", "“A pretty speech"),
new InLink("failus.html", "eyes", "self", "merely self-gratification"),
new InLink("eddornseyes.html", "eyes", null, null),
new InLink("chryalis.html", "eyes", "dragonfly", "What is left when every surface is tongued?"),
new InLink("centmilledefacts.html", "eyes", "indifference", "t"),
new InLink("caring.html", "eyes", null, null),

],

"everyonetriesnottobe.html":[
new OutLink("failus.html", "fail us?", "morpho", "“What this implies is that the female body is not to remain the object of men’s discourse or their various arts but it is to become the object of a female subjectivity experiencing and identifying itself. Such research attempts to suggest to women a morpho-logic that is appropriate to their bodies. It’s aimed at the male subject, too, inviting him to redefine himself as a body with a view to exchanges between sexed subjects.” Luce Irigaray, “Writing”"),
new InLink("failus.html", "Everyone tries not to be", "in her own way", "Everyone tries not to be a dick."),

],

"everyones.html":[
new OutLink("ours.html", "ours", null, null),
new OutLink("stories.html", "stories", null, null),
new OutLink("15.html", "15", "lightless", "without light his eyes now"),

],

"eveningstar.html":[
new OutLink("wheretheblacknesslaps.html", "Where the blackness laps", null, null),
new OutLink("here.html", "here", null, null),
new OutLink("pleasures.html", "pleasures", "Mrs White\'s Party", "“It’s time for Mrs. White’s party"),
new OutLink("tempsvierge.html", "temps vierge", "a weight", "And yet I sit and wait for something,"),
new InLink("towersinair.html", "Evening Star", "fathers&sons", "Fathers and sons she thinks conflicting about the size of the apparent world."),
new InLink("seven.html", "Evening Star", null, null),
new InLink("prospects.html", "Evening Star", null, null),
new InLink("adeath.html", "Evening Star", null, null),

],

"etcheditself.html":[
new OutLink("inlightonlight.html", "in light on light", null, null),
new InLink("sometimesdawn.html", "etched itself", null, null),

],

"essencily.html":[
new OutLink("secondekphrastic.html", "second ekphrastic", null, null),
new OutLink("son.html", "Son", null, null),
new OutLink("1982.html", "1982", null, null),
new InLink("prophet.html", "essencily", "essence son", "sweetest son and the loneliest"),
new InLink("idyllicthey.html", "essencily", null, null),

],

"englishtextbybruce.html":[
new OutLink("doeshenrysee.html", "", "", "“I keep returning to Glenn Gould as though I missed something the first time I wrote about him”"),
new InLink("doeshenrysee.html", "English text by Bruce", "()", "English text by Bruce Powe;"),

],

"endone.html":[
new OutLink("two.html", "two", null, null),
new InLink("greyday.html", "end one", null, null),

],

"ems.html":[
new OutLink("seesee.html", "", "", ""),
new OutLink("seesee.html", "see see", "oui we", "[(We wooed each other with small m’s and c’s]"),
new OutLink("workplay.html", "work play", "inverted m", "and one family ended and another, more distributed, began."),
new OutLink("cosifantutte.html", "Cosi fan tutte", "mmeme", "These are private facts: in the fiction you know my daughter, Emily, also called em."),
new InLink("goldbugs.html", "ems", "block m", "Gold EMs"),

],

"elorgua.html":[
new OutLink("tegvara.html", "tegvara", null, null),
new OutLink("tegvara.html", "", "", ""),
new OutLink("tegvara.html", "", "", "el OrGua"),
new InLink("daniche.html", " el OrGua", null, null),
new InLink("daniche.html", "", "", ""),
new InLink("daniche.html", "", "", "DaniChe"),

],

"elkid.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("twom.html", "Two m", "initially", "RIP:JL"),
new OutLink("abeginning.html", "a beginning", "keed no longer", "no longer strangers"),
new OutLink("repaying.html", "repaying", "treed", "Did you have a tree?"),
new InLink("22shortfilmsrerpower.html", "el kid", "matinee", "(Si si Senor)"),

],

"elf.html":[
new OutLink("realm.html", "realm", null, null),
new OutLink("obieswathed.html", "Obie swathed", null, null),
new OutLink("1982.html", "1982", "his scholars", "laying it on those of the ears after, and from whom this inflicted, for his scholars were a musket-ball with a small-sword, beneath the slightest pressure"),
new InLink("stories.html", "elf", "grass", "ks a tuft of grass which he twists"),
new InLink("mother.html", "elf", null, null),
new InLink("laundrydonebeautiful.html", "elf", null, null),
new InLink("iwasntevenguiltyof.html", "elf", "ire", ""),
new InLink("iwasntevenguiltyof.html", "elf", "ire", "Shit Face Ireland yes"),

],

"electric.html":[
new OutLink("ideograms.html", "ideograms", null, null),
new OutLink("centmilledefacts.html", "Cent mille de facts", "wings", "the girl’s jutting wings"),
new InLink("wolflake.html", "electric", null, null),
new InLink("realm.html", "electric", null, null),
new InLink("distanttenderness.html", "electric", null, null),

],

"eerjordan.html":[
new OutLink("dalaiinthesky.html", "Dalai in the sky", null, null),
new OutLink("theendofthecoldwar.html", "the End of the Cold War", "a boy in the bubble", "A pope in high places"),
new OutLink("saltorchopinin6.html", "salt or Chopin", "on pole stars", "although this one involves a Polish lad"),
new OutLink("wolflake.html", "Wolf Lake", "Wolf Lake", "Eli eli lama sabbacthani"),
new InLink("22shortfilmsrerpower.html", "", "", "(nope with gold laces)"),

],

"editedout.html":[
new OutLink("ghislaineguertin.html", "Ghislaine Guertin", null, null),
new OutLink("ghislaineGuertin.html", "Ghislaine Guertin", "", ""),
new InLink("ghislaineguertin.html", "edited out", "", "edited out"),

],

"eddornseyes.html":[
new OutLink("eyes.html", "eyes", null, null),
new InLink("asylum.html", "", "", "very Apache"),

],

"echolalia.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", "", ""),
new InLink("wonders.html", "echolalia", "poteen of the art is", "Hennessey one of the Wild Geese"),
new InLink("housahoser.html", "echolalia", "acsendere", "opera aperta) Umberto discende"),
new InLink("22shortfilmsrerpower.html", "", "", "or what Senor Eco said"),

],

"easewhybother.html":[
new OutLink("allhumanwisdom.html", "all human wisdom", null, null),
new InLink("yoda.html", "ease, why bother?", null, null),
new InLink("heaintheavy.html", "ease, why bother?", null, null),

],

"duringthehypertext198.html":[
new OutLink("doeshenrysee.html", "does Henry see?", null, null),
new InLink("doeshenrysee.html", "during Hypertext 1989", "()", "during the Hypertext 1989 meeting"),

],

"drowsy.html":[
new OutLink("mother.html", "mother", null, null),
new OutLink("takenbythecontinual.html", "taken by the continual", "these women", "Oh, these women!"),
new OutLink("transformation.html", "transformation", "disappeard", "a disappeard"),
new InLink("thiscomputer.html", "drowsy", null, null),
new InLink("sleepy.html", "drowsy", null, null),

],

"doeshenrysee.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", null, null),
new OutLink("seeside.html", "SEE side", "()", "Henry See, designer/author"),
new OutLink("englishtextbybruce.html", "English text by Bruce", "()", "English text by Bruce Powe;"),
new OutLink("ghislaineguertin.html", "()", "()", "French text by Ghislaine Guertin"),
new OutLink("michaelcentury.html", "Michael Century", "()", "Michael Century (a name which seemed an omen then"),
new OutLink("duringthehypertext198.html", "during Hypertext 1989", "()", "during the Hypertext 1989 meeting"),
new OutLink("backstory.html", "backstory", "on fly away home", "I was working on a hypertext fiction (this one) (then) about Glenn Gould"),
new OutLink("housahoser.html", "Housa Hoser", "on whatsa easy", "psychic remnant of an old ethnic joke"),
new OutLink("francoisgirards.html", "Francois Girard", "()", "Francois Girard’s (hypertextual) collection of films about Glenn Gould"),
new OutLink("freshessai.html", "Fresh essai", "()", "a French essay by Michel Schneider in the form of an aria and trente variations"),
new InLink("yoda.html", "Does Henry see?", "viz", "“Does Henry See?”"),
new InLink("michaelcentury.html", "does henry see?", null, null),
new InLink("ghislaineguertin.html", "", null, null),
new InLink("ghislaineguertin.html", "Does Henry see?", "()", "issue"),
new InLink("francoisgirards.html", "", "", "There, Glenn Gould (Colm Feore) begins by casually testing his blood pressure, then listens to a playback of his recording of Bach. To the sounds of the English Suite No. 2, he begins swaying and floating in the throes of esthetic ecstasy, his white shirt billowing in gravity-defying slow motion. Far removed from the engineers\' prosaic talk, he seems truly to have passed into another dimension. The audience for “Thirty-Two Short Films About Glenn Gould,” a brilliant and transfixing cinematic portrait by Francois Girard, can look forward to enjoying much the same sensation. For an hour and a half, without repeating himself or resorting to tactics that are even slightly familiar, Mr. Girard, whose film opens today at the Lincoln Plaza Cinemas, thoughtfully holds the viewer in thrall. Though it glancingly incorporates a great deal of biographical information, this carefully measured film does not choose to describe Gould in ordinary terms. Suffused as it is with the artist’s musical sensibility, it doesn’t even have to show him playing the piano. Instead, Mr. Girard explores and replicates his subject’s eccentric thought processes in a remarkably visceral way, drawing the audience palpably into Gould’s state of mind. This film works hypnotically, with great subtlety and grace, in ways that are gratifyingly consistent with Gould’s own thoughts about his music and his life. Mr. Girard\'s film is indeed a compilation of 32 glimpses, each of them instantly intelligible, some of them strung together in supremely delicate ways. The format makes dependable sense: this is hardly the first time the variations motif has been brought to bear in describing Gould. More than an homage to his triumphant recordings of Bach’s “Goldberg” Variations, this multifaceted structure seems the only possible means of approaching such a complex individual. If it sounds defiantly arty, that suits the subject and his “academic owlishness” (in the words of his biographer Otto Friedrich) perfectly. If it sounds obscure and daunting, it most certainly is not. If anything, “Thirty-Two Short Films About Glenn Gould” should prove even more mesmerizing to those who know little about Gould’s life than to those aware that he really did have tastes for ketchup, tranquilizers, arrowroot cookies and Petula Clark (not necessarily in that order). In its own quirky way, it assembles a surprisingly rigorous and illuminating portrait of the man. Defying any usual constraints of narrative or chronology, Mr. Girard can leap freely from Gould\'s boyhood to his mature work, from the hotel room to the concert stage, from the raptures of the music to silly questions asked by the press. The individual fragments are so meticulously realized that the whole becomes much greater than the sum of its parts. Typically fascinating is “L.A. Concert,” a fine example of how cannily Mr. Girard can present the facts of Gould’s life. We first see the pianist backstage, poised over a sink, soaking his arms in steaming water five minutes before a concert is to begin. Pill bottles are conspicuously arrayed in front of him. Called to the stage, he next appears dressed and ready, maintaining a serene detachment as an aide tries to instruct him about the irritating show-business realities of the evening. Just before reaching the stage, he pauses to talk with a stagehand and winds up signing a program for the man. Only when the stagehand examines the autograph does he learn that Mr. Gould has decided to make this 1964 concert performance his last. It would be difficult to think of a more adroit, economical way to convey all this information in a such relatively brief time. “Thirty-Two Short Films About Glenn Gould,” which was written by Mr. Girard with Don McKellar, is also able to fuse the informative with the poetic, particularly in the passages that deal hauntingly with Gould’s final days. (He died at 50, in 1982.) One of the film’s last images is of a Voyager satellite that went into space carrying aural souvenirs of Earth’s culture, including Gould’s recording of Bach’s “Well-Tempered Clavier.” The film’s announcement that the two Voyager spacecraft left our solar system in 1987 and 1989, respectively, suits its lingering impression that Gould was never quite of this world. Mr. Feore, a Canadian stage actor, does not overwhelmingly resemble Gould, but he becomes a commanding and believable presence all the same. With a voice that has been made to sound strangely disembodied, and with the ability to project brooding, playful intelligence, Mr. Feore enhances the film’s sense of deep mystery. Equally lulling and seductive are Mr. Girard’s fluid camera movements, which enable the film to prowl and survey with uncommon ease. In the end, his methods induce a complete and satisfying immersion into his many-faceted subject. Among the individual glimpses that must be mentioned here: “Practice,” in which Gould resonates to his own thrilling impression of Beethoven’s “Tempest” Sonata without ever touching a keyboard; “Truck Stop,” in which he hears and seems to orchestrate the voices of people around him; “Personal Ad,” in which he toys with the language of the lovelorn, then chuckles at the thought of ever representing himself in that way; “Diary of One Day,” a stunning compilation of formulas, medical notations, heartbeats and detailed X-rays of a person playing the piano. Even before the film reaches this last juncture, you will know that the heart and blood of the pianist have been captured on screen. Also worth noting: some significant omissions. Mr. Girard knew better than to mention Gould’s intense admiration for Barbra Streisand, or to use those sections of the “Goldberg” Variations that have powerfully evoked Dr. Hannibal Lecter ever since they were used to shocking effect in “The Silence of the Lambs.”32 SHORT FILMS ABOUT GLENN GOULD Directed by Francois Girard; written by Mr. Girard and Don McKellar; director of photography, Alain Dostie; edited by Gaetan Huot; music by various composers; produced by Niv Fichman; released by Samuel Goldwyn Company. At the Lincoln Plaza Cinemas, Broadway and 63d Street. Running time: 94 minutes. This film is not rated. WITH: Colm Feore as Glenn GouldCopyright 1994 The New York TimesTransmitted: 94-06-07 16:42:42"),
new InLink("englishtextbybruce.html", "", "", "“I keep returning to Glenn Gould as though I missed something the first time I wrote about him”"),
new InLink("duringthehypertext198.html", "does Henry see?", null, null),
new InLink("22shortfilmsrerpower.html", "", "", "Does Henry see?"),

],

"distanttenderness.html":[
new OutLink("electric.html", "electric", null, null),
new OutLink("notsomuch.html", "not so much", null, null),
new InLink("theend.html", "distant tenderness", null, null),
new InLink("river.html", "distant tenderness", null, null),
new InLink("intimenightall.html", "distant tenderness", null, null),

],

"dickshunairy.html":[
new OutLink("aprilewaltera.html", "Aprile, Walter A", "wan that", "prompted by the English-Italian dictionary"),
new OutLink("dautunno.html", "d\'autunno", "poetry", "my tourist Italian,"),
new OutLink("savaissabrett.html", "Savais sabrett?", "Est\'ce que vous", "Although one I am able to remember emphasizes wholeness (albeit got up in a Lacanian sausage)."),
new InLink("hensandchicks.html", "dick shun airy", null, null),
new InLink("fourhorsemen.html", "d\'autunno", "continuing explanation", "I do not tell jokes well, even in real life, nor do I remember them well. (It is curious that the above jokes involve the piano, which plays an important part here—no pun intended—and Italian men.)"),
new InLink("22shortfilmsrerpower.html", "", "", "(colloq: “an angle to your _____”)"),

],

"dialectic.html":[
new OutLink("mechanicalquip.html", "", "", ">add to forgetting"),
new InLink("query.html", "dialectic", null, null),

],

"dazeofthewoke.html":[
new OutLink("seven.html", "seven", null, null),
new OutLink("caughtagain.html", "caught (again)", null, null),
new InLink("suspicions.html", "daze of the woke", null, null),
new InLink("illegalthey.html", "daze of the woke", null, null),

],

"dautunno.html":[
new OutLink("hestirs-obie.html", "He stirs-Obie", null, null),
new OutLink("livingstill.html", "living still", "stillness of my lost love", "She lives still by a river with her mother who has come over the sea where she is looked in upon by women newly acquainted who have taken on her"),
new InLink("whether.html", "d\'autunno", "just deserts", "Desert of patience"),
new InLink("sleepy.html", "d\'autunno", "great tree", "the great tree where"),
new InLink("riding.html", "d\'autunno", "neer fearful", "he never fearful tree"),
new InLink("fourhorsemen.html", "d\'autunno", "a second chance at", "I know a joke about an Italian man"),
new InLink("dickshunairy.html", "d\'autunno", "poetry", "my tourist Italian,"),

],

"dateline_2.html":[
new OutLink("portraitoftheartist.html", "portrait of the artist", null, null),
new InLink("dateline_1.html", "dateline", null, null),
new InLink("and.html", "dateline:", null, null),

],

"dateline_1.html":[
new OutLink("dateline_2.html", "dateline", null, null),
new OutLink("and.html", "", "", "two kinds of people"),
new InLink("somefalseleads.html", "dataline", "dateline", "Lunetta Waits sits and watches, but her boy will not come home ..."),

],

"dateline.html":[
new OutLink("dateline.html", "dateline:", null, null),
new InLink("somefalseleads.html", "dataline", "dateline", "<dateline>"),

],

"daniel.html":[
new OutLink("daniche.html", "", null, null),
new OutLink("daniche.html", "", "", ""),
new OutLink("daniche.html", "", "", "DaniChe el OrGua tegvara!"),
new InLink("apositiveid.html", "Daniel", null, null),
new InLink("apositiveid.html", "Daniel", "wired series", "like the two were wired together in series"),

],

"daniche.html":[
new OutLink("elorgua.html", " el OrGua", null, null),
new OutLink("elorgua.html", "", "", ""),
new OutLink("elorgua.html", "", "", "DaniChe"),
new InLink("daniel.html", "", null, null),
new InLink("daniel.html", "", "", ""),
new InLink("daniel.html", "", "", "DaniChe el OrGua tegvara!"),

],

"damndearbloombloor.html":[
new OutLink("morning.html", "morning", null, null),
new OutLink("1955.html", "1955", null, null),
new InLink("centmilledefacts.html", "damn/dear? Bloom/Bloor?", "won\'t say", "rling"),

],

"dalaiinthesky.html":[
new OutLink("pleasantlake.html", "Pleasant Lake", null, null),
new OutLink("riding.html", "riding", null, null),
new OutLink("savaissabrett.html", "Savais sabrett?", "a sign", "Dalai in the sky"),
new InLink("hishopes.html", "Dalai in the sky", null, null),
new InLink("eerjordan.html", "Dalai in the sky", null, null),

],

"crossexamination.html":[
new OutLink("justus.html", "just us", null, null),
new OutLink("wonders.html", "wonders", "wondering", "my moon, mother"),
new InLink("anaside.html", "Cross Examination", null, null),

],

"credits.html":[
new OutLink("ourstorysofar.html", "co już wiadomo o naszej historii", null, null),
new OutLink("http://www.techsty.art.pl/hipertekst/tworcy/mjoyce.htm", "", "nota od autora", "Michael Joyce"),
new OutLink("wersja_polska.html", "Kilka słów o demo \"Zmroku\"", "o wersji polskiej", "online version by Mariusz Pisarski"),
new OutLink("wersja_polska.html", "Kilka słów o demo \"Zmroku\"", "o wersji polskiej", "programming by Jakub Jagiełło and Michał Furgał"),
new OutLink("wersja_polska.html", "Kilka słów o demo \"Zmroku\"", "o wersji polskiej", "graphics: Łukasz Podgórni"),

],

"courting.html":[
new OutLink("garments.html", "garments", null, null),
new OutLink("stories.html", "stories", "elm", "giant above piazza, gossiping over former times"),
new InLink("yoda.html", "courting", null, null),
new InLink("repaying.html", "courting", null, null),

],

"courses.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("severity.html", "severity", null, null),
new OutLink("twos.html", "twos", null, null),
new InLink("reineofhearts.html", "courses", null, null),

],

"couplet_1.html":[
new OutLink("toher-perspective.html", "to her-perspective", null, null),
new OutLink("outofrhythm.html", "out of rhythm", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", null, null),
new OutLink("4annam.html", "4. Anna M.", null, null),

],

"couplet.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", null, null),
new OutLink("transubstantiate.html", "transubstantiate", null, null),
new OutLink("transubstantiate.html", "", "", "away"),
new InLink("tempsvierge.html", "couplet", null, null),
new InLink("parable.html", "couplet", "quatrain Coltrane", "about living in the moment, a frenzy"),
new InLink("housahoser.html", "couplet", "stairs", "the connotations of stairs"),
new InLink("ghislaineguertin.html", "couplet", "", "of"),
new InLink("centmilledefacts.html", "couplet", "can\'t shake", ","),

],

"cosifantutte.html":[
new OutLink("sosinkstheday-star.html", "So sinks the day-star", null, null),
new OutLink("4annam.html", "4. Anna M.", null, null),
new InLink("twom.html", "Cosi fan tutte", null, null),
new InLink("seesee.html", "Cosi fan tutte", "emoticon", "an emoticon, a usage I am never used to"),
new InLink("mars.html", "Cosi fan tutte", null, null),
new InLink("garments.html", "Cosi fan tutte", "something so lovely", "he loved his daughter better even"),
new InLink("ems.html", "Cosi fan tutte", "mmeme", "These are private facts: in the fiction you know my daughter, Emily, also called em."),

],

"concealedbirds.html":[
new OutLink("waterglinting.html", "water glinting", null, null),
new InLink("weoftenfelt.html", "concealed birds", null, null),
new InLink("inthedisclosuresof.html", "concealed birds", null, null),

],

"command_3.html":[
new OutLink("command_1.html", "command", null, null),
new InLink("command_2.html", "komenda", null, null),
new InLink("command_001.html", "komenda", null, null),

],

"command_2.html":[
new OutLink("command_3.html", "komenda", null, null),

],

"command_1b.html":[
new OutLink("freewill.html", "free will", null, null),
new InLink("seas.html", "command ?", null, null),

],

"command_1.html":[
new OutLink("input.html", "input", null, null),
new InLink("command_3.html", "command", null, null),

],

"command_002.html":[
new OutLink("seizethedj.html", "seize the DJ", null, null),
new OutLink("whathappenedtous.html", "()", null, null),
new InLink("thetruth.html", "command", null, null),
new InLink("intimenightall.html", "command", null, null),

],

"command_001.html":[
new OutLink("command_3.html", "komenda", null, null),
new InLink("two.html", "command", "how memory functions", ""),
new InLink("outofmemory.html", "", "wondering", ""),
new InLink("howhesleeps.html", "command", null, null),

],

"command004.html":[
new OutLink("towhatend.html", "to what end", null, null),

],

"command003.html":[
new OutLink("towhatend.html", "to what end", null, null),
new InLink("lights.html", "command", null, null),

],

"command.html":[
new OutLink("obieswathed.html", "command", null, null),
new InLink("hj2.html", "command", null, null),

],

"comingtowriting.html":[
new OutLink("nousnote.html", "á nous note", null, null),
new OutLink("nousnote.html", "", "", "“Who is the Superuncle who hasn’t prevented a girl from flying, the flight of the thief, who has not bound her, who has not bandaged the feet of his little darling, so that they might be exquisitely petite, who hasn’t mummified her into prettiness?”"),

],

"cixous.html":[
new OutLink("6.html", "6", null, null),
new InLink("laundrydonebeautiful.html", "Cixous", null, null),

],

"chryalis.html":[
new OutLink("ourstorysofar.html", "", null, null),
new OutLink("alaxalasalass.html", "A lax, alas, a lass", "on heim hold", "Alex"),
new OutLink("backstory.html", "backstory", "OD", "O David!"),
new OutLink("protector.html", "protector", "one son", "Eamon"),
new OutLink("prophet.html", "prophet", "drum son", "Jeremiah"),
new OutLink("operatingsystem.html", "operating system", "sails", "Odysseus"),
new OutLink("eyes.html", "eyes", "dragonfly", "What is left when every surface is tongued?"),
new InLink("failus.html", "Chryalis", "a very thing", "had the notion of linking everything"),
new InLink("22shortfilmsrerpower.html", "Chryalis", "nose", "Chris knows Best"),

],

"chronicle.html":[
new OutLink("stories.html", "stories", null, null),
new InLink("stories.html", "chronicle", "", "Tom Boyle says"),

],

"che.html":[
new OutLink("aspittinimage.html", "a spittin im age", null, null),
new OutLink("aspittinimage.html", "", "", "DaniChe el OrGua tegvara"),
new InLink("tegvara.html", "Che", null, null),
new InLink("tegvara.html", "", "", ""),
new InLink("tegvara.html", "", "", "tegvara"),

],

"certaincertainties.html":[
new OutLink("caught--continued.html", "caught-- continued", null, null),
new OutLink("morning.html", "morning", "memory\'s fragrance", "her scent"),
new OutLink("thetruth.html", "", "", "smelled my estranged wife’s panties"),
new InLink("whathappens.html", "certain certainties", null, null),

],

"centmilledefacts.html":[
new OutLink("morning.html", "morning", "day\'s passing", "W"),
new OutLink("anthem.html", "anthem", "sweep away", "i"),
new OutLink("iceman.html", "ice man", "snow hunted", "l"),
new OutLink("anthem.html", "anthem", "sweep away", ""),
new OutLink("phantom.html", "phantom", "glacial ice", "l"),
new OutLink("parable.html", "parable", "mere memory", "i"),
new OutLink("eyes.html", "eyes", "indifference", "t"),
new OutLink("whether.html", "whether", "in a yawn", "be"),
new OutLink("rest-s.html", "rest-s", "to go on", "so"),
new OutLink("sleepysong.html", "sleepy song", "agony away", "da"),
new OutLink("damndearbloombloor.html", "damn/dear? Bloom/Bloor?", "won\'t say", "rling"),
new OutLink("couplet.html", "couplet", "can\'t shake", ","),
new OutLink("takenbythecontinual.html", "taken by the continual", "light itself assigned", "this"),
new OutLink("pleasures.html", "pleasures", "cold dream of contempt", "day’s"),
new OutLink("pianos.html", "pianos", "exile of the swan", "passing"),
new OutLink("ideograms.html", "ideograms", "swan", "What once was a swan"),
new InLink("yoda.html", "Cent mille de facts", null, null),
new InLink("pasadena.html", "Cent mille de facts", "Who\'s he when she\'s at ho", "fragments of meaning and a missing author"),
new InLink("myself.html", "Cent mille de facts", "frozen form", "like Mallarmé’s swan"),
new InLink("hi-pitchedvoices.html", "Cent mille de facts", null, null),
new InLink("ghislaineguertin.html", "cen mille de facts", "ma nouvelle method", "These cards have very specific technical references built into them, but used a manual method"),
new InLink("electric.html", "Cent mille de facts", "wings", "the girl’s jutting wings"),
new InLink("11.html", "Cent mille de facts", null, null),

],

"cave.html":[
new OutLink("here.html", "here again", null, null),
new OutLink("here.html", "", "", ""),
new OutLink("hi-pitchedvoices.html", "high pitched voices", "", "out => Hi Pitched Voices"),
new OutLink("wolflake.html", "Wolf Lake", "", "bemidji => Sherman\'s study"),
new InLink("wolflake.html", "", "", "cave => Anne’s Work Room"),
new InLink("stories.html", "cave", "official words", "cavernous—"),
new InLink("livingstill.html", "cave", "sparsos congregavit", "Anne Johnstone is here."),
new InLink("6continental.html", "cave", null, null),

],

"caughtagain.html":[
new OutLink("blacktalk.html", "black talk", null, null),
new InLink("dazeofthewoke.html", "caught (again)", null, null),

],

"caught.html":[
new OutLink("howthingshappen-guns.html", "how things happen with guns", null, null),
new OutLink("anescaperoute.html", "an escape route", "fugitive", ". Ten thirty at night, rain whipping over the lake, Obie down for the count, his hands already weaving their way through the fern jungles of his sweet dreams, and without warning comes this blam-blam-blam knocking on the plank door of the cottage, so hard the dishes rattle and the hanging bulb over the sink blinks in the socket."),
new OutLink("anescaperoute.html", "an escape route", "fugitive", "Never heard the bastards drive up, I thought, and my throat went numb and my bladder ached, but the knocking came again."),

],

"caught--continued.html":[
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new OutLink("aretreatingfigure.html", "a retreating figure", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", null, null),
new InLink("yoda.html", "caught-- continued", null, null),
new InLink("certaincertainties.html", "caught-- continued", null, null),

],

"caring.html":[
new OutLink("eyes.html", "eyes", null, null),
new OutLink("september.html", "September", null, null),
new OutLink("songs.html", "Songs", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new InLink("there.html", "caring", null, null),
new InLink("stories.html", "caring", "caring", "outside of any history but the buzz-daze, the quotidian stream"),
new InLink("hi-pitchedvoices.html", "caring", null, null),
new InLink("6continental.html", "caring", null, null),

],

"byitscover.html":[
new OutLink("heaintheavy.html", "he ain\'t heavy", null, null),
new InLink("apoetafloat.html", "By its cover", null, null),

],

"butter.html":[
new OutLink("sweaters.html", "sweaters", null, null),
new OutLink("scent.html", "scent", null, null),
new OutLink("1982.html", "1982", null, null),
new OutLink("hestirs-obie.html", "He stirs-Obie", "the day she dies", "April 10th"),
new OutLink("immigranttothisshore.html", "immigrant to this shore", "Columbus, or the dove", "Lódz"),
new InLink("meaning.html", "Butter", null, null),
new InLink("iwasntevenguiltyof.html", "Butter", "smear", "Solidarinosc yup"),

],

"boytake.html":[
new OutLink("asylum.html", "asylum", null, null),
new OutLink("huh.html", "", "", "Woytek Szejmcaj."),
new InLink("aleagueofnations.html", "Boy take?", null, null),

],

"boat.html":[
new OutLink("shadowhappiness.html", "shadow happiness", null, null),
new InLink("suit.html", "boat", null, null),

],

"blueboat-city.html":[
new OutLink("looknow--obie.html", "Look now--Obie", null, null),
new InLink("seeside.html", "Blue boat city", "mer metaforico", "It would also be nice to have a map where the relations are more metaphorical"),
new InLink("itbeginssomewhere.html", "Blue boat-city", null, null),
new InLink("itbeginssomewhere.html", "", "", "one"),
new InLink("1982.html", "Blue boat-city", null, null),

],

"blue.html":[
new OutLink("backstory.html", "backstory", null, null),
new InLink("oreallyo.html", "blue", "extra vagant", "I think of Thoreau’s errant"),

],

"blacktalk.html":[
new OutLink("inpursuitofyo.html", "", "", "\"Yo!\" I shouted to the rain."),
new InLink("caughtagain.html", "black talk", null, null),

],

"birdsweave.html":[
new OutLink("14.html", "14", null, null),
new OutLink("aloversdiscourse.html", "a lovers\' discourse", "talks", "So she says and yet she talks so."),
new InLink("seeside.html", "birds weave", "pre-sumptuous", "These maps of consciousness"),
new InLink("ours.html", "birds weave", null, null),
new InLink("4annam.html", "birds weave", null, null),
new InLink("13.html", "birds weave", null, null),

],

"biomass.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("pleasantlake.html", "Pleasant Lake", null, null),
new OutLink("weoftenfelt.html", "We often felt", null, null),
new OutLink("lesheurs.html", "Les Heurs", null, null),
new InLink("node.html", "biomass", null, null),
new InLink("1955.html", "biomass", null, null),

],

"belowanoldmountain.html":[
new OutLink("there.html", "there", null, null),
new OutLink("prophet.html", "prophet", null, null),
new OutLink("abeginning.html", "a beginning", null, null),
new OutLink("belowanoldmountain.html", "", "", ""),
new InLink("inahalf-hiddencave.html", "below an old mountain", null, null),

],

"bazaar.html":[
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", null, null),
new OutLink("alone.html", "alone", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", "ekphrastic", "ekphrastic"),
new OutLink("goldbugs.html", "goldbugs", "", "Goldbug"),
new OutLink("22shortfilmsrerpower.html", "22 short films re R Power", "pain of ekprasis", "Variations"),
new OutLink("failus.html", "fail us?", "la Caen", "alone"),
new InLink("goldbugs.html", "bazar", null, null),
new InLink("alone.html", "", "", "aloe"),
new InLink("22shortfilmsrerpower.html", "", "", "The scarabs dangle"),

],

"backstory.html":[
new OutLink("somesay.html", "some say", null, null),
new OutLink("portraitoftheartist.html", "portret of the artist", "backstory", "Yale computer scientist and author"),
new OutLink("failus.html", "fail us?\n", " Freud on the ice", "blow away as soon as the next good fad kicks up.”"),
new InLink("oulipo.html", "backstory", null, null),
new InLink("failus.html", "backstory", "higher gelernting", "He had been asking about back-story, though not by name–the phallus is not the penis, and wondered whether there was any principle of selection in hyperfiction. “You just seem to leave everything in, where great art would select,” he said."),
new InLink("doeshenrysee.html", "backstory", "on fly away home", "I was working on a hypertext fiction (this one) (then) about Glenn Gould"),
new InLink("chryalis.html", "backstory", "OD", "O David!"),
new InLink("blue.html", "backstory", null, null),

],

"A_.html":[
new OutLink("a.html", "@", null, null),

],

"awayout.html":[
new OutLink("heprotesteth.html", "he protesteth", null, null),
new OutLink("ours.html", "", "", "Air travel, electronic mail, word processing, sexual reveries, I gave you fantasy as well as your beloved H&J...”"),
new InLink("lifeinabox.html", "a way out", null, null),

],

"autumnalwalkings.html":[
new OutLink("myself.html", "myself", null, null),
new OutLink("protector.html", "protector", "prayer", "my son and I made our pact"),
new InLink("yoda.html", "autumnal walkings", null, null),
new InLink("whether.html", "autumnal walkings", null, null),
new InLink("songs.html", "autumnal walkings", null, null),
new InLink("september.html", "autumnal walkings", null, null),
new InLink("prophet.html", "autumnal walking", null, null),
new InLink("keywest.html", "autumnal walkings", null, null),
new InLink("aphoto.html", "autumnal walkings", null, null),

],

"asylum.html":[
new OutLink("ohbravenewworld.html", "Oh brave new world", null, null),
new OutLink("eddornseyes.html", "", "", "very Apache"),
new InLink("gettingitdown.html", "asylum", null, null),
new InLink("boytake.html", "asylum", null, null),

],

"aswan.html":[
new OutLink("phaedrus.html", "Phaedrus", null, null),
new OutLink("memory.html", "memory", null, null),
new InLink("who.html", "A swan", null, null),
new InLink("thekindofmanwho.html", "A swan", null, null),
new InLink("4annam.html", "A swan", null, null),

],

"asuspect.html":[
new OutLink("andwatson.html", "and Wat, son?", null, null),
new InLink("mickhammer.html", "a suspect!", null, null),

],

"aspittinimage.html":[
new OutLink("interrogationinterra.html", "interrogation, in terra", null, null),
new OutLink("akeyquestion.html", "", "", "who had them"),
new InLink("che.html", "a spittin im age", null, null),
new InLink("che.html", "", "", "DaniChe el OrGua tegvara"),
new InLink("apositiveid.html", "A spittin im age", null, null),

],

"asong.html":[
new OutLink("inwhichhe.html", "in which he", null, null),
new OutLink("inwhichhe.html", "in which he", "in which he", "There is an Irish jig to which the following lyrics have been put:"),
new OutLink("aphoto.html", "a photo", "from a song to a photo", "There is a photo of the three old men in shirts and ties and broad trousers, one wears a straw fedora."),
new InLink("iceman.html", "a song", "on knitted erse", "\" A people united"),

],

"asinisteract.html":[
new OutLink("hj.html", "H&J", null, null),
new InLink("justlikelife.html", "a sinister act ", null, null),

],

"asiflightspoke.html":[
new OutLink("inthedisclosuresof.html", "in the disclosures of", null, null),
new InLink("weoftenfelt.html", "as if light spoke", null, null),
new InLink("uponoppositeshores.html", "as if light spoke", null, null),

],

"asasillyman.html":[
new OutLink("lifeinabox.html", "life in a box", null, null),
new InLink("portraitoftheartist.html", "as a silly man.", null, null),

],

"ariddleman.html":[
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", "riddleme", "Pun on “riddle, man” and reddleman (ruddleman), the character who appears in the first pages of the Hardy novel we read each other in the idyllic few first days of marriage before the call to Michigan, days (daze) when we thought it would be possible to make a marriage so: reading to one another"),
new OutLink("wolflake.html", "Wolf Lake", "mentor", "living in the slant light on a second floor of a prairie house across the street from my mentor’s older house and marriage"),
new OutLink("ideograms.html", "ideograms", "married", "living there, as now (a latter Irish farmhouse, two old marrieds in a new apartment and an old house) sheltered by the branches of old trees."),
new InLink("22shortfilmsrerpower.html", "A Riddleman", "red L man", "A Riddleman"),

],

"aretreatingfigure.html":[
new OutLink("lights.html", "lights", null, null),
new OutLink("sleepy.html", "Sleepy", "heedless", "The headless horseman, but tall and skinny as Ichabod from what I could see in his retreat"),
new InLink("caught--continued.html", "a retreating figure", null, null),

],

"areporterreflects.html":[
new OutLink("portraitoftheartist.html", "portrait of the artist", null, null),
new OutLink("somefalseleads.html", "", "", "stringbook"),
new InLink("towhatend.html", "a reporter reflects", null, null),

],

"archangel.html":[
new OutLink("outofrhythm.html", "out of rhythm", null, null),
new OutLink("theend.html", "the end", "angel", "with beautiful hair one had never quite seen"),
new InLink("hi-pitchedvoices.html", "archangel", null, null),
new InLink("actionandpassion.html", "archangel", null, null),

],

"aprilewaltera.html":[
new OutLink("whether.html", "", null, null),
new OutLink("whether.html", "whether", "miniuziosa", "Eppezza: sentimento di soddisfazione dovuto all\'aver terminato un\'attivitê noiosa, minuziosa e totalmente inutile."),
new InLink("dickshunairy.html", "Aprile, Walter A", "wan that", "prompted by the English-Italian dictionary"),

],

"apositiveid.html":[
new OutLink("aspittinimage.html", "A spittin im age", null, null),
new OutLink("daniel.html", "Daniel", null, null),
new OutLink("daniel.html", "Daniel", "wired series", "like the two were wired together in series"),
new InLink("scrimshawsalibi.html", "a positive ID!", null, null),
new InLink("mickhammer.html", "a positive ID!", "whohe", "who he looked like"),

],

"apoetafloat.html":[
new OutLink("byitscover.html", "By its cover", null, null),
new InLink("whosthestoolie.html", "A poet, afloat", null, null),

],

"aphoto.html":[
new OutLink("autumnalwalkings.html", "autumnal walkings", null, null),
new InLink("stories.html", "a photo", "burnish", "old photos"),
new InLink("housahoser.html", "a photo", "else where", "the milky look of the rotogravured photographs, the men in fedoras and wide trousers."),
new InLink("asong.html", "a photo", "from a song to a photo", "There is a photo of the three old men in shirts and ties and broad trousers, one wears a straw fedora."),
new InLink("6continental.html", "a photo", "literally", "the “facts” of the story– history if you will"),

],

"anthem.html":[
new OutLink("theendofthecoldwar.html", "The End of the Cold War", null, null),
new InLink("towersinair.html", "anthem", "Sara Bond\'s song", "“Your life flashes by,” he says to her, “or so they say...”"),
new InLink("sonata.html", "anthem", null, null),
new InLink("centmilledefacts.html", "anthem", "sweep away", "i"),
new InLink("centmilledefacts.html", "anthem", "sweep away", ""),

],

"anotherhouse.html":[
new OutLink("11.html", "11", null, null),
new OutLink("ghislaineguertin.html", "Ghislaine Guertin", "sous rapture", "consciously puts the phrase ‘she is dying to know’ under erasure"),
new OutLink("adeath.html", "A: death", "act", "I will actually die."),
new InLink("yoda.html", "", "", "other sequences show themselves"),
new InLink("towersinair.html", "another house", null, null),
new InLink("outofrhythm.html", "another house", null, null),
new InLink("ourstorysofar.html", "another house", null, null),
new InLink("fifthekphrastic.html", "another house", null, null),
new InLink("eyes.html", "another house", null, null),
new InLink("6continental.html", "another house", null, null),

],

"anescaperoute.html":[
new OutLink("whathappens.html", "what happens", null, null),
new OutLink("5worldsedge.html", "5. World\'s edge", "an escape route to", "You do one stupid thing, you see, and you change your life in ways unimaginable before. A whole life of dreams explains itself, those recurring nightmares where someone’s chasing you, and you try to decide whether to keep running or slide behind the rock and hide and hope they pass, but whatever way you do decide you get caught."),
new InLink("caught.html", "an escape route", "fugitive", ". Ten thirty at night, rain whipping over the lake, Obie down for the count, his hands already weaving their way through the fern jungles of his sweet dreams, and without warning comes this blam-blam-blam knocking on the plank door of the cottage, so hard the dishes rattle and the hanging bulb over the sink blinks in the socket."),
new InLink("caught.html", "an escape route", "fugitive", "Never heard the bastards drive up, I thought, and my throat went numb and my bladder ached, but the knocking came again."),

],

"andwhere.html":[
new OutLink("twom.html", "Two m", null, null),
new InLink("whosaidwhat.html", "and where", null, null),

],

"andwatson.html":[
new OutLink("scrimshawsalibi.html", "Scrimshaw\'s alibi", null, null),
new InLink("asuspect.html", "and Wat, son?", null, null),

],

"andshouldhavewonit.html":[
new OutLink("13.html", "13", null, null),
new InLink("stories.html", "and should have won it", "Icthus bod", "dayglo scarecrow"),
new InLink("somesay.html", "and should have won it", null, null),
new InLink("howthingshappen-guns.html", "and should have won it", "master\'s dreams", "not nightmares but meta-dreams, all abstract patterns, geometry, music or algebra, the shifting tiles within kaleidoscopes. What chess masters must dream, or the odd men who carve wood into intertwined links of a chain, or boats in bottles."),

],

"and.html":[
new OutLink("dateline_2.html", "dateline:", null, null),
new InLink("dateline_1.html", "", "", "two kinds of people"),

],

"anchoringdevices.html":[
new OutLink("thekindofmanwho.html", "The kind of man who", null, null),
new OutLink("inthehigherair.html", "in the higher air", "AER lingus", "on the air"),
new InLink("heprotesteth.html", "Anchoring devices", null, null),

],

"anaside.html":[
new OutLink("crossexamination.html", "Cross Examination", null, null),
new InLink("heatwavechangeofpace.html", " an aside", null, null),

],

"aloversdiscourse.html":[
new OutLink("5worldsedge.html", "5. World\'s edge", null, null),
new OutLink("scent.html", "scent", null, null),
new InLink("twos.html", "a lovers\' discourse", "mix", "thoroughly disconcerting to him and would, he thought, remain ever so, this mix of guile and innocence, of sensuality and the politic, shifting from moment to moment"),
new InLink("two.html", "a lovers discourse", "how we talk of us", ""),
new InLink("somesay.html", "a lovers\' discourse", "touch", "disdain touch like easily conquered adversaries"),
new InLink("birdsweave.html", "a lovers\' discourse", "talks", "So she says and yet she talks so."),

],

"alone.html":[
new OutLink("bazaar.html", "", "", "aloe"),
new InLink("bazaar.html", "alone", null, null),

],

"allhumanwisdom.html":[
new OutLink("whosaidwhat.html", "who said what", null, null),
new InLink("easewhybother.html", "all human wisdom", null, null),

],

"aleagueofnations.html":[
new OutLink("boytake.html", "Boy take?", null, null),
new InLink("a.html", "a League of Nations", null, null),

],

"alaxalasalass.html":[
new OutLink("sleepy.html", "Sleepy", null, null),
new InLink("moredogons.html", "test", "test", ""),
new InLink("chryalis.html", "A lax, alas, a lass", "on heim hold", "Alex"),

],

"akeyquestion.html":[
new OutLink("interrogationinterra.html", "interrogation, in terra", null, null),
new InLink("aspittinimage.html", "", "", "who had them"),

],

"after.html":[
new OutLink("#", "", null, null),
new InLink("thirdekphrastic.html", "after", "after", "Sweetly screaming: this is how it will be to die."),
new InLink("stories.html", "after", "ab origine", "__"),
new InLink("secondekphrastic.html", "after", "after", "Sweetly dreaming: this is how it will be to die."),
new InLink("phaedrus.html", "after", null, null),
new InLink("myself.html", "after", null, null),
new InLink("history.html", "after", null, null),
new InLink("firstekphrastic.html", "after", "after", "Surrendering: this is how it will be to die."),

],

"aerver.html":[
new OutLink("whetherreport.html", "whether report", null, null),
new OutLink("fustytu.html", "", "", "a New York minute"),

],

"adeath.html":[
new OutLink("eveningstar.html", "Evening Star", null, null),
new OutLink("wonders.html", "wonders", null, null),
new OutLink("1955.html", "1955", "Mike", "Mike Nichols in an air conditioned trailer gazes through an unfocused lens on the sea, sips gin and tonic with a splash of Rose’s lime."),
new OutLink("howhesleeps.html", "how he sleeps", "chrysalis", "chrysalis"),
new InLink("stories.html", "a death", "red", "iver. The wine sheets slowly down the glass orb, her sad sweet face is ruby, bloody, rose."),
new InLink("sleepysong.html", "A: death", null, null),
new InLink("sleepysong.html", "", "", ""),
new InLink("riddle.html", "A: death", "answer death", "Answer: Death"),
new InLink("anotherhouse.html", "A: death", "act", "I will actually die."),
new InLink("5worldsedge.html", "A: death", null, null),

],

"actionandpassion.html":[
new OutLink("archangel.html", "archangel", null, null),
new OutLink("takenbythecontinual.html", "", "", "taken by that continual, womanly grace, even at this distance"),
new OutLink("inthehigherair.html", "in the higher air", "BEMs invade earth", "the books his father read—sci-fi and whathaveyou,"),
new InLink("transformation.html", "Action and Passion", "A&P", "When the need to act comes, will thought do?"),
new InLink("takenbythecontinual.html", "Action and Passion", null, null),
new InLink("fidelity.html", "Action and Passion", "who we love", "the death of those we love"),
new InLink("12.html", "Action and Passion", null, null),

],

"acallfrombelow.html":[
new OutLink("soiwroteacolumn.html", "So I wrote a column.  ", null, null),
new InLink("transmogrifikey.html", "a call from below ", null, null),

],

"abeginning.html":[
new OutLink("1982.html", "1982", null, null),
new InLink("wolflake.html", "a beginning", null, null),
new InLink("transubstantiate.html", "a beginning", "relics", "When we were children we knew the system of relics. First class was bone, hair or other body part of a saint or virgin; second class the cloak or handkerchief; third class was something the holy one had touched"),
new InLink("mother.html", "a beginning", "favor", "found favor in the eyes of the mother"),
new InLink("elkid.html", "a beginning", "keed no longer", "no longer strangers"),
new InLink("belowanoldmountain.html", "a beginning", null, null),
new InLink("10.html", "a beginning", null, null),

],

"a.html":[
new OutLink("aleagueofnations.html", "a League of Nations", null, null),
new InLink("q.html", "A", null, null),
new InLink("A_.html", "@", null, null),

],

"9.html":[
new OutLink("10.html", "10", null, null),
new InLink("theend.html", "9", null, null),

],

"8.html":[
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new InLink("tempsvierge.html", "8", null, null),

],

"720.html":[
new OutLink("heights.html", "Heights", "interval", "“Indeed all the music that has ever been can now become a background against which the impulse to make listener-supplied connections is the new foreground.”“The Prospects of Recording” (1966)"),
new InLink("heights.html", "720", "intervals", "So far the clearest quantitative measure of anyone’s understanding of death is the twelve minute difference between Glenn Gould’s"),

],

"7.html":[
new OutLink("thirdekphrastic.html", "third ekphrastic", null, null),
new InLink("secondekphrastic.html", "7", null, null),

],

"6continental.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("cave.html", "cave", null, null),
new OutLink("caring.html", "caring", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new OutLink("anotherhouse.html", "another house", null, null),
new OutLink("1955.html", "1955", "radio boy", "Marathon radio buoy"),
new OutLink("1982.html", "1982", "currency", "the current frequency"),
new OutLink("aphoto.html", "a photo", "literally", "the “facts” of the story– history if you will"),
new OutLink("here.html", "here", "Zauberberg", "a symposium on death upon a royal mountain"),
new InLink("stories.html", "6 continental", "further prospects", "The Twilight Doctor looks back"),
new InLink("seesee.html", "Continental", "aye aye", "oyo"),
new InLink("prospects.html", "6. Continental", null, null),
new InLink("eyes.html", "6. Continental", null, null),
new InLink("5worldsedge.html", "6. Continental", null, null),

],

"6.html":[
new OutLink("tempsvierge.html", "temps vierge", null, null),
new InLink("cixous.html", "6", null, null),

],

"5worldsedge.html":[
new OutLink("stories.html", "stories", null, null),
new OutLink("fifthekphrastic.html", "fifth ekphrastic", null, null),
new OutLink("adeath.html", "A: death", null, null),
new OutLink("6continental.html", "6. Continental", null, null),
new OutLink("inthehigherair.html", "", "", "marked by passing satellites and spy planes of decades past"),
new InLink("whether.html", "5. World\'s edge", "cold", "snow in geovalleys"),
new InLink("takenbythecontinual.html", "5. World\'s edge", "rising", "the nub of your nipple in my mouth, caught (gently) in my teeth, tongued over, glistening. so quick a feeling that i am confused, then know—"),
new InLink("speech.html", "5. World\'s edge", null, null),
new InLink("riding.html", "5. World\'s edge", "he her hero", "mere terrors of the night, phantoms himself. The greater part of the time he my hero and his steed."),
new InLink("anescaperoute.html", "5. World\'s edge", "an escape route to", "You do one stupid thing, you see, and you change your life in ways unimaginable before. A whole life of dreams explains itself, those recurring nightmares where someone’s chasing you, and you try to decide whether to keep running or slide behind the rock and hide and hope they pass, but whatever way you do decide you get caught."),
new InLink("aloversdiscourse.html", "5. World\'s edge", null, null),
new InLink("4annam.html", "5. World\'s edge", null, null),

],

"5.html":[
new OutLink("1982.html", "1982", null, null),
new InLink("whetherreport.html", "5", null, null),

],

"4annam.html":[
new OutLink("thirdekphrastic.html", "third ekphrastic", null, null),
new OutLink("aswan.html", "A swan", null, null),
new OutLink("5worldsedge.html", "5. World\'s edge", null, null),
new OutLink("birdsweave.html", "birds weave", null, null),
new InLink("stories.html", "4 anna m", "tender offer", "find a way to be very tender"),
new InLink("ideograms.html", "4. Anna M.", null, null),
new InLink("couplet_1.html", "4. Anna M.", null, null),
new InLink("cosifantutte.html", "4. Anna M.", null, null),
new InLink("3johan.html", "4. Anna M.", null, null),

],

"4.html":[
new OutLink("riddle.html", "Riddle", null, null),
new InLink("transformation.html", "4", null, null),

],

"3johan.html":[
new OutLink("4annam.html", "4. Anna M.", null, null),
new OutLink("fourthekphrastic.html", "fourth ekphrastic", null, null),
new OutLink("inthehigherair.html", "in the higher air", "aer", "a plane high above"),
new InLink("inthehigherair.html", "3. Johan", null, null),
new InLink("howthingshappen-guns.html", "3. Johan", "brandish", "I look at them now with different eyes, understand the mind which might buy one and, cornered, think to brandish it."),
new InLink("3.html", "3. Johan", null, null),

],

"3.html":[
new OutLink("3johan.html", "3. Johan", null, null),
new InLink("2timesgeometry.html", "3", null, null),

],

"2timesgeometry.html":[
new OutLink("3.html", "3", null, null),
new OutLink("wonders.html", "wonders", null, null),
new OutLink("22shortfilmsrerpower.html", "22short films re R Power", "shards", "Shards of things"),
new InLink("songs.html", "2. Time\'s geometry", null, null),
new InLink("saltorchopinin6.html", "2. Time\'s geometry", "sweet spinet", "or the taproom spinet, so sweetly"),

],

"22shortfilmsrerpower.html":[
new OutLink("noons.html", "noons", null, null),
new OutLink("noons.html", "", "", ""),
new OutLink("ariddleman.html", "A Riddleman", "red L man", "A Riddleman"),
new OutLink("doeshenrysee.html", "", "", "Does Henry see?"),
new OutLink("bazaar.html", "", "", "The scarabs dangle"),
new OutLink("dickshunairy.html", "", "", "(colloq: “an angle to your _____”)"),
new OutLink("youllsees.html", "you\'ll sees", "cement", "Or are you just harpy to semen?"),
new OutLink("seesee.html", "see see", "seizure (seashore)", "cc:"),
new OutLink("elkid.html", "el kid", "matinee", "(Si si Senor)"),
new OutLink("echolalia.html", "", "", "or what Senor Eco said"),
new OutLink("housahoser.html", "Housa Hoser", "Umberto\'s Claim House", "(Knocka knock who’sa there?"),
new OutLink("pasadena.html", "Pasadena", "twinny questions", "“Little old lady who”)"),
new OutLink("yoda.html", "yoda", "dint 0 Euclid", "Didn’t know you could yodel"),
new OutLink("hensandchicks.html", "", "", "or is that a cigar?"),
new OutLink("servicemarks.html", "service marks", "surface marks", "A: Oshkosh b’gosh,"),
new OutLink("outerspace.html", "outer space", "ricurso", "maestro outside San Marino"),
new OutLink("spelt.html", "spelt", "the son\'s fleece", "(sheep for 400, Alex)"),
new OutLink("workplay.html", "work play", "riddlememe", "in red sneaks"),
new OutLink("eerjordan.html", "", "", "(nope with gold laces)"),
new OutLink("motherlandfathertongue.html", "motherland fathertongue", "whocalls whatcheer", "Quotha: w/c,"),
new OutLink("chryalis.html", "Chryalis", "nose", "Chris knows Best"),
new OutLink("protector.html", "protector", "one son", "eamon."),
new OutLink("prophet.html", "prophet", "drum son", "(Chair o’ maya)"),
new InLink("spelt.html", "22short films re R Power", null, null),
new InLink("severity.html", "22short films re R Power", null, null),
new InLink("seesee.html", "22 short films re R Power", null, null),
new InLink("seesee.html", "22 short films re R Power", "chemise tree", "A lost gesture. We are the last race of the carbon copy, the generation before the migration into light"),
new InLink("savaissabrett.html", "22 short films re R Power", null, null),
new InLink("saltorchopinin6.html", "22short films re R Power", null, null),
new InLink("phantom.html", "22short films re R Power", null, null),
new InLink("moredogons.html", "22 short films re R Power.html", null, null),
new InLink("housahoser.html", "22short films re R Power", null, null),
new InLink("heights.html", "fail us?", "is that a lotus?", "other instances of penile humor"),
new InLink("elkid.html", "22short films re R Power", null, null),
new InLink("echolalia.html", "22 short films re R Power", "", ""),
new InLink("doeshenrysee.html", "22 short films re R Power", null, null),
new InLink("couplet.html", "22short films re R Power", null, null),
new InLink("bazaar.html", "22 short films re R Power", null, null),
new InLink("bazaar.html", "22 short films re R Power", "pain of ekprasis", "Variations"),
new InLink("ariddleman.html", "22short films re R Power", "riddleme", "Pun on “riddle, man” and reddleman (ruddleman), the character who appears in the first pages of the Hardy novel we read each other in the idyllic few first days of marriage before the call to Michigan, days (daze) when we thought it would be possible to make a marriage so: reading to one another"),
new InLink("2timesgeometry.html", "22short films re R Power", "shards", "Shards of things"),

],

"2.html":[
new OutLink("meaning.html", "Meaning", null, null),
new InLink("theendofthecoldwar.html", "2", null, null),
new InLink("stepone.html", "2", null, null),

],

"1calliopeatmarathon.html":[
new OutLink("weoftenfelt.html", "We often felt", null, null),
new OutLink("firstekphrastic.html", "first ekphrastic", null, null),
new OutLink("reineofhearts.html", "Reine of hearts", "birds far", "O listen. Birds far from shore. Who can know?"),
new OutLink("weoftenfelt.html", "", "", ""),
new InLink("youllsees.html", "1. Calliope at Marathon", "happy too", "who is happy to see men, especially seamen"),
new InLink("stepone.html", "1. Calliope at Marathon", null, null),
new InLink("songs.html", "1. Calliope at Marathon", null, null),

],

"1982.html":[
new OutLink("here.html", "here", null, null),
new OutLink("blueboat-city.html", "Blue boat-city", null, null),
new OutLink("scent.html", "scent", null, null),
new InLink("prophet.html", "1982", "aborning", "He"),
new InLink("prophet.html", "1982", "aborning", ""),
new InLink("prophet.html", "1982", "aborning", "For my sister’s chair (a Mayanist) but also for a German ear (my grandfather’s for instance) the way we say it: chaiir-moany, far away from the vatter land, nicht wahr."),
new InLink("pasadena.html", "1982", "herstory", "Magdalena and the mother here"),
new InLink("goldbugs.html", "ems", "flirt", "still"),
new InLink("goldbugs.html", "1982", "flirt", "flirt with"),
new InLink("essencily.html", "1982", null, null),
new InLink("elf.html", "1982", "his scholars", "laying it on those of the ears after, and from whom this inflicted, for his scholars were a musket-ball with a small-sword, beneath the slightest pressure"),
new InLink("butter.html", "1982", null, null),
new InLink("abeginning.html", "1982", null, null),
new InLink("6continental.html", "1982", "currency", "the current frequency"),
new InLink("5.html", "1982", null, null),
new InLink("1955.html", "1982", null, null),

],

"1955.html":[
new OutLink("history.html", "History", null, null),
new OutLink("biomass.html", "biomass", null, null),
new OutLink("1982.html", "1982", null, null),
new OutLink("stories.html", "stories", null, null),
new InLink("whetherreport.html", "1955", "rattledom", "rattle dem bones"),
new InLink("saltorchopinin6.html", "1955", null, null),
new InLink("hishopes.html", "1955", "heiress", "he entered the heiress"),
new InLink("heights.html", "1955", "ML5060", "two recordings of the Goldberg Variations."),
new InLink("damndearbloombloor.html", "1955", null, null),
new InLink("adeath.html", "1955", "Mike", "Mike Nichols in an air conditioned trailer gazes through an unfocused lens on the sea, sips gin and tonic with a splash of Rose’s lime."),
new InLink("6continental.html", "1955", "radio boy", "Marathon radio buoy"),

],

"15.html":[
new OutLink("fiveelements.html", "five elements", null, null),
new InLink("everyones.html", "15", "lightless", "without light his eyes now"),

],

"14.html":[
new OutLink("nousnote.html", "nousnote", null, null),
new OutLink("towersinair.html", "towers in air", null, null),
new OutLink("outerspace.html", "outer space", null, null),
new OutLink("outerspace.html", "", "", ""),
new InLink("birdsweave.html", "14", null, null),

],

"13.html":[
new OutLink("birdsweave.html", "birds weave", null, null),
new InLink("andshouldhavewonit.html", "13", null, null),

],

"12.html":[
new OutLink("actionandpassion.html", "Action and Passion", null, null),
new InLink("sweaters.html", "12", null, null),

],

"11.html":[
new OutLink("centmilledefacts.html", "Cent mille de facts", null, null),
new InLink("weoftenfelt.html", "11", null, null),
new InLink("anotherhouse.html", "11", null, null),

],

"10.html":[
new OutLink("abeginning.html", "a beginning", null, null),
new InLink("9.html", "10", null, null),

],

"1.html":[
new OutLink("weoftenfelt.html", "We often felt", null, null),
new OutLink("there.html", "there", null, null),
new OutLink("fiveelements.html", "five elements", null, null),
new OutLink("stories.html", "stories", null, null),
new InLink("here.html", "1", null, null),

],

"-30-.html":[
new OutLink("tapes56.html", "Tapes 5&6", null, null),
new InLink("__.html", "-30-", null, null),
new InLink("memory.html", "", "", "What features differentiate the species?"),

],


};


let arr=INBOUND_OUTBOUND_MAP["aerver.html"];


console.log(">>>IO:")
console.log(arr)