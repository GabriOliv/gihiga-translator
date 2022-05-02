function generate(){
	let input_text = document.getElementById("input_field").value;

	let output_text = translate(input_text)

	document.getElementById("output_field").value = output_text;
}

function clear_all(){
	document.getElementById("input_field").value = "";

	document.getElementById("output_field").value = "";
}

function translate(text){
	// Dicionário de Sílabas Atual
	// ca -> ga
	// ce -> ze
	// co -> go
	// lh(ao) -> i(ao)
	// p(aeiou) -> b(aeiou)
	// pr(ae) -> br(ae)
	// que -> gue
	// s. -> z
	// ss(aeiou) -> z(aeiou)
	// t(aeiou) -> d(aeiou)
	// tr(aou) -> dr(aou)
	// .gem -> gi
	// .nho -> n
	// .care -> guere
	// --------------------------------
	// ca -> ga
	// co -> go => c(aou) -> g(aou)

	let translated = text.replace(/Gihiga/gi, "Giga");
	// translated = translated.replace(/a/gi, "");
	// translated = translated.replace(/ba/gi, "");
	// translated = translated.replace(/bâ/gi, "");
	// translated = translated.replace(/bá/gi, "");
	// translated = translated.replace(/bã/gi, "");
	// translated = translated.replace(/be/gi, "");
	// translated = translated.replace(/bê/gi, "");
	// translated = translated.replace(/bé/gi, "");
	// translated = translated.replace(/bi/gi, "");
	// translated = translated.replace(/bî/gi, "");
	// translated = translated.replace(/bí/gi, "");
	// translated = translated.replace(/bo/gi, "");
	// translated = translated.replace(/bô/gi, "");
	// translated = translated.replace(/bó/gi, "");
	// translated = translated.replace(/bõ/gi, "");
	// translated = translated.replace(/bu/gi, "");
	// translated = translated.replace(/bû/gi, "");
	// translated = translated.replace(/bú/gi, "");
	// translated = translated.replace(/bla/gi, "");
	// translated = translated.replace(/blâ/gi, "");
	// translated = translated.replace(/blá/gi, "");
	// translated = translated.replace(/blã/gi, "");
	// translated = translated.replace(/ble/gi, "");
	// translated = translated.replace(/blê/gi, "");
	// translated = translated.replace(/blé/gi, "");
	// translated = translated.replace(/bli/gi, "");
	// translated = translated.replace(/blî/gi, "");
	// translated = translated.replace(/blí/gi, "");
	// translated = translated.replace(/blo/gi, "");
	// translated = translated.replace(/blô/gi, "");
	// translated = translated.replace(/bló/gi, "");
	// translated = translated.replace(/blõ/gi, "");
	// translated = translated.replace(/blu/gi, "");
	// translated = translated.replace(/blû/gi, "");
	// translated = translated.replace(/blú/gi, "");
	// translated = translated.replace(/bra/gi, "");
	// translated = translated.replace(/brâ/gi, "");
	// translated = translated.replace(/brá/gi, "");
	// translated = translated.replace(/brã/gi, "");
	// translated = translated.replace(/bre/gi, "");
	// translated = translated.replace(/brê/gi, "");
	// translated = translated.replace(/bré/gi, "");
	// translated = translated.replace(/bri/gi, "");
	// translated = translated.replace(/brî/gi, "");
	// translated = translated.replace(/brí/gi, "");
	// translated = translated.replace(/bro/gi, "");
	// translated = translated.replace(/brô/gi, "");
	// translated = translated.replace(/bró/gi, "");
	// translated = translated.replace(/brõ/gi, "");
	// translated = translated.replace(/bru/gi, "");
	// translated = translated.replace(/brû/gi, "");
	// translated = translated.replace(/brú/gi, "");
	translated = translated.replace(/care( |$)/gi, "guere ");
	translated = translated.replace(/carê( |$)/gi, "guere ");
	translated = translated.replace(/caré( |$)/gi, "guere ");
	translated = translated.replace(/ca/gi, "ga");
	translated = translated.replace(/câ/gi, "gâ");
	translated = translated.replace(/cá/gi, "gá");
	translated = translated.replace(/cã/gi, "gã");
	translated = translated.replace(/ce/gi, "ze");
	translated = translated.replace(/cê/gi, "zê");
	translated = translated.replace(/cé/gi, "zé");
	// translated = translated.replace(/ci/gi, "");
	// translated = translated.replace(/cî/gi, "");
	// translated = translated.replace(/cí/gi, "");
	translated = translated.replace(/co/gi, "go");
	translated = translated.replace(/cô/gi, "gô");
	translated = translated.replace(/có/gi, "gó");
	translated = translated.replace(/cõ/gi, "gõ");
	// translated = translated.replace(/cu/gi, "");
	// translated = translated.replace(/cû/gi, "");
	// translated = translated.replace(/cú/gi, "");
	// translated = translated.replace(/cha/gi, "");
	// translated = translated.replace(/châ/gi, "");
	// translated = translated.replace(/chá/gi, "");
	// translated = translated.replace(/chã/gi, "");
	// translated = translated.replace(/che/gi, "");
	// translated = translated.replace(/chê/gi, "");
	// translated = translated.replace(/ché/gi, "");
	// translated = translated.replace(/chi/gi, "");
	// translated = translated.replace(/chî/gi, "");
	// translated = translated.replace(/chí/gi, "");
	// translated = translated.replace(/cho/gi, "");
	// translated = translated.replace(/chô/gi, "");
	// translated = translated.replace(/chó/gi, "");
	// translated = translated.replace(/chõ/gi, "");
	// translated = translated.replace(/chu/gi, "");
	// translated = translated.replace(/chû/gi, "");
	// translated = translated.replace(/chú/gi, "");
	// translated = translated.replace(/cla/gi, "");
	// translated = translated.replace(/clâ/gi, "");
	// translated = translated.replace(/clá/gi, "");
	// translated = translated.replace(/clã/gi, "");
	// translated = translated.replace(/cle/gi, "");
	// translated = translated.replace(/clê/gi, "");
	// translated = translated.replace(/clé/gi, "");
	// translated = translated.replace(/cli/gi, "");
	// translated = translated.replace(/clî/gi, "");
	// translated = translated.replace(/clí/gi, "");
	// translated = translated.replace(/clo/gi, "");
	// translated = translated.replace(/clô/gi, "");
	// translated = translated.replace(/cló/gi, "");
	// translated = translated.replace(/clõ/gi, "");
	// translated = translated.replace(/clu/gi, "");
	// translated = translated.replace(/clû/gi, "");
	// translated = translated.replace(/clú/gi, "");
	// translated = translated.replace(/cra/gi, "");
	// translated = translated.replace(/crâ/gi, "");
	// translated = translated.replace(/crá/gi, "");
	// translated = translated.replace(/crã/gi, "");
	// translated = translated.replace(/cre/gi, "");
	// translated = translated.replace(/crê/gi, "");
	// translated = translated.replace(/cré/gi, "");
	// translated = translated.replace(/cri/gi, "");
	// translated = translated.replace(/crî/gi, "");
	// translated = translated.replace(/crí/gi, "");
	// translated = translated.replace(/cro/gi, "");
	// translated = translated.replace(/crô/gi, "");
	// translated = translated.replace(/cró/gi, "");
	// translated = translated.replace(/crõ/gi, "");
	// translated = translated.replace(/cru/gi, "");
	// translated = translated.replace(/crû/gi, "");
	// translated = translated.replace(/crú/gi, "");
	// translated = translated.replace(/da/gi, "");
	// translated = translated.replace(/dâ/gi, "");
	// translated = translated.replace(/dá/gi, "");
	// translated = translated.replace(/dã/gi, "");
	// translated = translated.replace(/de/gi, "");
	// translated = translated.replace(/dê/gi, "");
	// translated = translated.replace(/dé/gi, "");
	// translated = translated.replace(/di/gi, "");
	// translated = translated.replace(/dî/gi, "");
	// translated = translated.replace(/dí/gi, "");
	// translated = translated.replace(/do/gi, "");
	// translated = translated.replace(/dô/gi, "");
	// translated = translated.replace(/dó/gi, "");
	// translated = translated.replace(/dõ/gi, "");
	// translated = translated.replace(/du/gi, "");
	// translated = translated.replace(/dû/gi, "");
	// translated = translated.replace(/dú/gi, "");
	// translated = translated.replace(/dra/gi, "");
	// translated = translated.replace(/drâ/gi, "");
	// translated = translated.replace(/drá/gi, "");
	// translated = translated.replace(/drã/gi, "");
	// translated = translated.replace(/dre/gi, "");
	// translated = translated.replace(/drê/gi, "");
	// translated = translated.replace(/dré/gi, "");
	// translated = translated.replace(/dri/gi, "");
	// translated = translated.replace(/drî/gi, "");
	// translated = translated.replace(/drí/gi, "");
	// translated = translated.replace(/dro/gi, "");
	// translated = translated.replace(/drô/gi, "");
	// translated = translated.replace(/dró/gi, "");
	// translated = translated.replace(/drõ/gi, "");
	// translated = translated.replace(/dru/gi, "");
	// translated = translated.replace(/drû/gi, "");
	// translated = translated.replace(/drú/gi, "");
	// translated = translated.replace(/e/gi, "");
	// translated = translated.replace(/fa/gi, "");
	// translated = translated.replace(/fâ/gi, "");
	// translated = translated.replace(/fá/gi, "");
	// translated = translated.replace(/fã/gi, "");
	// translated = translated.replace(/fe/gi, "");
	// translated = translated.replace(/fê/gi, "");
	// translated = translated.replace(/fé/gi, "");
	// translated = translated.replace(/fi/gi, "");
	// translated = translated.replace(/fî/gi, "");
	// translated = translated.replace(/fí/gi, "");
	// translated = translated.replace(/fo/gi, "");
	// translated = translated.replace(/fô/gi, "");
	// translated = translated.replace(/fó/gi, "");
	// translated = translated.replace(/fõ/gi, "");
	// translated = translated.replace(/fu/gi, "");
	// translated = translated.replace(/fû/gi, "");
	// translated = translated.replace(/fú/gi, "");
	// translated = translated.replace(/fla/gi, "");
	// translated = translated.replace(/flâ/gi, "");
	// translated = translated.replace(/flá/gi, "");
	// translated = translated.replace(/flã/gi, "");
	// translated = translated.replace(/fle/gi, "");
	// translated = translated.replace(/flê/gi, "");
	// translated = translated.replace(/flé/gi, "");
	// translated = translated.replace(/fli/gi, "");
	// translated = translated.replace(/flî/gi, "");
	// translated = translated.replace(/flí/gi, "");
	// translated = translated.replace(/flo/gi, "");
	// translated = translated.replace(/flô/gi, "");
	// translated = translated.replace(/fló/gi, "");
	// translated = translated.replace(/flõ/gi, "");
	// translated = translated.replace(/flu/gi, "");
	// translated = translated.replace(/flû/gi, "");
	// translated = translated.replace(/flú/gi, "");
	// translated = translated.replace(/fra/gi, "");
	// translated = translated.replace(/frâ/gi, "");
	// translated = translated.replace(/frá/gi, "");
	// translated = translated.replace(/frã/gi, "");
	// translated = translated.replace(/fre/gi, "");
	// translated = translated.replace(/frê/gi, "");
	// translated = translated.replace(/fré/gi, "");
	// translated = translated.replace(/fri/gi, "");
	// translated = translated.replace(/frî/gi, "");
	// translated = translated.replace(/frí/gi, "");
	// translated = translated.replace(/fro/gi, "");
	// translated = translated.replace(/frô/gi, "");
	// translated = translated.replace(/fró/gi, "");
	// translated = translated.replace(/frõ/gi, "");
	// translated = translated.replace(/fru/gi, "");
	// translated = translated.replace(/frû/gi, "");
	// translated = translated.replace(/frú/gi, "");
	// translated = translated.replace(/ga/gi, "");
	// translated = translated.replace(/gâ/gi, "");
	// translated = translated.replace(/gá/gi, "");
	// translated = translated.replace(/gã/gi, "");
	// translated = translated.replace(/ge/gi, "");
	translated = translated.replace(/gem( |$)/gi, "gi ");
	// translated = translated.replace(/gê/gi, "");
	// translated = translated.replace(/gé/gi, "");
	// translated = translated.replace(/gi/gi, "");
	// translated = translated.replace(/gî/gi, "");
	// translated = translated.replace(/gí/gi, "");
	// translated = translated.replace(/go/gi, "");
	// translated = translated.replace(/gô/gi, "");
	// translated = translated.replace(/gó/gi, "");
	// translated = translated.replace(/gõ/gi, "");
	// translated = translated.replace(/gu/gi, "");
	// translated = translated.replace(/gû/gi, "");
	// translated = translated.replace(/gú/gi, "");
	// translated = translated.replace(/gla/gi, "");
	// translated = translated.replace(/glâ/gi, "");
	// translated = translated.replace(/glá/gi, "");
	// translated = translated.replace(/glã/gi, "");
	// translated = translated.replace(/gle/gi, "");
	// translated = translated.replace(/glê/gi, "");
	// translated = translated.replace(/glé/gi, "");
	// translated = translated.replace(/gli/gi, "");
	// translated = translated.replace(/glî/gi, "");
	// translated = translated.replace(/glí/gi, "");
	// translated = translated.replace(/glo/gi, "");
	// translated = translated.replace(/glô/gi, "");
	// translated = translated.replace(/gló/gi, "");
	// translated = translated.replace(/glõ/gi, "");
	// translated = translated.replace(/glu/gi, "");
	// translated = translated.replace(/glû/gi, "");
	// translated = translated.replace(/glú/gi, "");
	// translated = translated.replace(/gra/gi, "");
	// translated = translated.replace(/grâ/gi, "");
	// translated = translated.replace(/grá/gi, "");
	// translated = translated.replace(/grã/gi, "");
	// translated = translated.replace(/gre/gi, "");
	// translated = translated.replace(/grê/gi, "");
	// translated = translated.replace(/gré/gi, "");
	// translated = translated.replace(/gri/gi, "");
	// translated = translated.replace(/grî/gi, "");
	// translated = translated.replace(/grí/gi, "");
	// translated = translated.replace(/gro/gi, "");
	// translated = translated.replace(/grô/gi, "");
	// translated = translated.replace(/gró/gi, "");
	// translated = translated.replace(/grõ/gi, "");
	// translated = translated.replace(/gru/gi, "");
	// translated = translated.replace(/grû/gi, "");
	// translated = translated.replace(/grú/gi, "");
	// translated = translated.replace(/gua/gi, "");
	// translated = translated.replace(/guâ/gi, "");
	// translated = translated.replace(/guá/gi, "");
	// translated = translated.replace(/guã/gi, "");
	// translated = translated.replace(/gue/gi, "");
	// translated = translated.replace(/guê/gi, "");
	// translated = translated.replace(/gué/gi, "");
	// translated = translated.replace(/gui/gi, "");
	// translated = translated.replace(/guî/gi, "");
	// translated = translated.replace(/guí/gi, "");
	// translated = translated.replace(/guo/gi, "");
	// translated = translated.replace(/guô/gi, "");
	// translated = translated.replace(/guó/gi, "");
	// translated = translated.replace(/guõ/gi, "");
	// translated = translated.replace(/guu/gi, "");
	// translated = translated.replace(/guû/gi, "");
	// translated = translated.replace(/guú/gi, "");
	// translated = translated.replace(/ha/gi, "");
	// translated = translated.replace(/hâ/gi, "");
	// translated = translated.replace(/há/gi, "");
	// translated = translated.replace(/hã/gi, "");
	// translated = translated.replace(/he/gi, "");
	// translated = translated.replace(/hê/gi, "");
	// translated = translated.replace(/hé/gi, "");
	// translated = translated.replace(/hi/gi, "");
	// translated = translated.replace(/hî/gi, "");
	// translated = translated.replace(/hí/gi, "");
	// translated = translated.replace(/ho/gi, "");
	// translated = translated.replace(/hô/gi, "");
	// translated = translated.replace(/hó/gi, "");
	// translated = translated.replace(/hõ/gi, "");
	// translated = translated.replace(/hu/gi, "");
	// translated = translated.replace(/hû/gi, "");
	// translated = translated.replace(/hú/gi, "");
	// translated = translated.replace(/i/gi, "");
	// translated = translated.replace(/ja/gi, "");
	// translated = translated.replace(/jâ/gi, "");
	// translated = translated.replace(/já/gi, "");
	// translated = translated.replace(/jã/gi, "");
	// translated = translated.replace(/je/gi, "");
	// translated = translated.replace(/jê/gi, "");
	// translated = translated.replace(/jé/gi, "");
	// translated = translated.replace(/ji/gi, "");
	// translated = translated.replace(/jî/gi, "");
	// translated = translated.replace(/jí/gi, "");
	// translated = translated.replace(/jo/gi, "");
	// translated = translated.replace(/jô/gi, "");
	// translated = translated.replace(/jó/gi, "");
	// translated = translated.replace(/jõ/gi, "");
	// translated = translated.replace(/ju/gi, "");
	// translated = translated.replace(/jû/gi, "");
	// translated = translated.replace(/jú/gi, "");
	// translated = translated.replace(/ka/gi, "");
	// translated = translated.replace(/kâ/gi, "");
	// translated = translated.replace(/ká/gi, "");
	// translated = translated.replace(/kã/gi, "");
	// translated = translated.replace(/ke/gi, "");
	// translated = translated.replace(/kê/gi, "");
	// translated = translated.replace(/ké/gi, "");
	// translated = translated.replace(/ki/gi, "");
	// translated = translated.replace(/kî/gi, "");
	// translated = translated.replace(/kí/gi, "");
	// translated = translated.replace(/ko/gi, "");
	// translated = translated.replace(/kô/gi, "");
	// translated = translated.replace(/kó/gi, "");
	// translated = translated.replace(/kõ/gi, "");
	// translated = translated.replace(/ku/gi, "");
	// translated = translated.replace(/kû/gi, "");
	// translated = translated.replace(/kú/gi, "");
	// translated = translated.replace(/kla/gi, "");
	// translated = translated.replace(/klâ/gi, "");
	// translated = translated.replace(/klá/gi, "");
	// translated = translated.replace(/klã/gi, "");
	// translated = translated.replace(/kle/gi, "");
	// translated = translated.replace(/klê/gi, "");
	// translated = translated.replace(/klé/gi, "");
	// translated = translated.replace(/kli/gi, "");
	// translated = translated.replace(/klî/gi, "");
	// translated = translated.replace(/klí/gi, "");
	// translated = translated.replace(/klo/gi, "");
	// translated = translated.replace(/klô/gi, "");
	// translated = translated.replace(/kló/gi, "");
	// translated = translated.replace(/klõ/gi, "");
	// translated = translated.replace(/klu/gi, "");
	// translated = translated.replace(/klû/gi, "");
	// translated = translated.replace(/klú/gi, "");
	// translated = translated.replace(/kra/gi, "");
	// translated = translated.replace(/krâ/gi, "");
	// translated = translated.replace(/krá/gi, "");
	// translated = translated.replace(/krã/gi, "");
	// translated = translated.replace(/kre/gi, "");
	// translated = translated.replace(/krê/gi, "");
	// translated = translated.replace(/kré/gi, "");
	// translated = translated.replace(/kri/gi, "");
	// translated = translated.replace(/krî/gi, "");
	// translated = translated.replace(/krí/gi, "");
	// translated = translated.replace(/kro/gi, "");
	// translated = translated.replace(/krô/gi, "");
	// translated = translated.replace(/kró/gi, "");
	// translated = translated.replace(/krõ/gi, "");
	// translated = translated.replace(/kru/gi, "");
	// translated = translated.replace(/krû/gi, "");
	// translated = translated.replace(/krú/gi, "");
	// translated = translated.replace(/la/gi, "");
	// translated = translated.replace(/lâ/gi, "");
	// translated = translated.replace(/lá/gi, "");
	// translated = translated.replace(/lã/gi, "");
	// translated = translated.replace(/le/gi, "");
	// translated = translated.replace(/lê/gi, "");
	// translated = translated.replace(/lé/gi, "");
	// translated = translated.replace(/li/gi, "");
	// translated = translated.replace(/lî/gi, "");
	// translated = translated.replace(/lí/gi, "");
	// translated = translated.replace(/lo/gi, "");
	// translated = translated.replace(/lô/gi, "");
	// translated = translated.replace(/ló/gi, "");
	// translated = translated.replace(/lõ/gi, "");
	// translated = translated.replace(/lu/gi, "");
	// translated = translated.replace(/lû/gi, "");
	// translated = translated.replace(/lú/gi, "");
	translated = translated.replace(/lha/gi, "ia");
	translated = translated.replace(/lhâ/gi, "iâ");
	translated = translated.replace(/lhá/gi, "iá");
	translated = translated.replace(/lhã/gi, "iã");
	// translated = translated.replace(/lhe/gi, "");
	// translated = translated.replace(/lhê/gi, "");
	// translated = translated.replace(/lhé/gi, "");
	// translated = translated.replace(/lhi/gi, "");
	// translated = translated.replace(/lhî/gi, "");
	// translated = translated.replace(/lhí/gi, "");
	translated = translated.replace(/lho/gi, "io");
	translated = translated.replace(/lhô/gi, "iô");
	translated = translated.replace(/lhó/gi, "ió");
	translated = translated.replace(/lhõ/gi, "iõ");
	// translated = translated.replace(/lhu/gi, "");
	// translated = translated.replace(/lhû/gi, "");
	// translated = translated.replace(/lhú/gi, "");
	// translated = translated.replace(/ma/gi, "");
	// translated = translated.replace(/mâ/gi, "");
	// translated = translated.replace(/má/gi, "");
	// translated = translated.replace(/mã/gi, "");
	// translated = translated.replace(/me/gi, "");
	// translated = translated.replace(/mê/gi, "");
	// translated = translated.replace(/mé/gi, "");
	// translated = translated.replace(/mi/gi, "");
	// translated = translated.replace(/mî/gi, "");
	// translated = translated.replace(/mí/gi, "");
	// translated = translated.replace(/mo/gi, "");
	// translated = translated.replace(/mô/gi, "");
	// translated = translated.replace(/mó/gi, "");
	// translated = translated.replace(/mõ/gi, "");
	// translated = translated.replace(/mu/gi, "");
	// translated = translated.replace(/mû/gi, "");
	// translated = translated.replace(/mú/gi, "");
	// translated = translated.replace(/na/gi, "");
	// translated = translated.replace(/nâ/gi, "");
	// translated = translated.replace(/ná/gi, "");
	// translated = translated.replace(/nã/gi, "");
	// translated = translated.replace(/ne/gi, "");
	// translated = translated.replace(/nê/gi, "");
	// translated = translated.replace(/né/gi, "");
	// translated = translated.replace(/ni/gi, "");
	// translated = translated.replace(/nî/gi, "");
	// translated = translated.replace(/ní/gi, "");
	// translated = translated.replace(/no/gi, "");
	// translated = translated.replace(/nô/gi, "");
	// translated = translated.replace(/nó/gi, "");
	// translated = translated.replace(/nõ/gi, "");
	// translated = translated.replace(/nu/gi, "");
	// translated = translated.replace(/nû/gi, "");
	// translated = translated.replace(/nú/gi, "");
	// translated = translated.replace(/nha/gi, "");
	// translated = translated.replace(/nhâ/gi, "");
	// translated = translated.replace(/nhá/gi, "");
	// translated = translated.replace(/nhã/gi, "");
	// translated = translated.replace(/nhe/gi, "");
	// translated = translated.replace(/nhê/gi, "");
	// translated = translated.replace(/nhé/gi, "");
	// translated = translated.replace(/nhi/gi, "");
	// translated = translated.replace(/nhî/gi, "");
	// translated = translated.replace(/nhí/gi, "");
	translated = translated.replace(/nho( |$)/gi, "n ");
	translated = translated.replace(/nhô( |$)/gi, "n ");
	// translated = translated.replace(/nho/gi, "");
	// translated = translated.replace(/nhô/gi, "");
	// translated = translated.replace(/nhó/gi, "");
	// translated = translated.replace(/nhõ/gi, "");
	// translated = translated.replace(/nhu/gi, "");
	// translated = translated.replace(/nhû/gi, "");
	// translated = translated.replace(/nhú/gi, "");
	// translated = translated.replace(/o/gi, "");
	translated = translated.replace(/pa/gi, "ba");
	translated = translated.replace(/pâ/gi, "bâ");
	translated = translated.replace(/pá/gi, "bá");
	translated = translated.replace(/pã/gi, "bã");
	translated = translated.replace(/pe/gi, "be");
	translated = translated.replace(/pê/gi, "bê");
	translated = translated.replace(/pé/gi, "bé");
	translated = translated.replace(/pi/gi, "bi");
	translated = translated.replace(/pî/gi, "bî");
	translated = translated.replace(/pí/gi, "bí");
	translated = translated.replace(/po/gi, "bo");
	translated = translated.replace(/pô/gi, "bô");
	translated = translated.replace(/pó/gi, "bó");
	translated = translated.replace(/põ/gi, "bõ");
	translated = translated.replace(/pu/gi, "bu");
	translated = translated.replace(/pû/gi, "bû");
	translated = translated.replace(/pú/gi, "bú");
	// translated = translated.replace(/pla/gi, "");
	// translated = translated.replace(/plâ/gi, "");
	// translated = translated.replace(/plá/gi, "");
	// translated = translated.replace(/plã/gi, "");
	// translated = translated.replace(/ple/gi, "");
	// translated = translated.replace(/plê/gi, "");
	// translated = translated.replace(/plé/gi, "");
	// translated = translated.replace(/pli/gi, "");
	// translated = translated.replace(/plî/gi, "");
	// translated = translated.replace(/plí/gi, "");
	// translated = translated.replace(/plo/gi, "");
	// translated = translated.replace(/plô/gi, "");
	// translated = translated.replace(/pló/gi, "");
	// translated = translated.replace(/plõ/gi, "");
	// translated = translated.replace(/plu/gi, "");
	// translated = translated.replace(/plû/gi, "");
	// translated = translated.replace(/plú/gi, "");
	translated = translated.replace(/pra/gi, "bra");
	translated = translated.replace(/prâ/gi, "brâ");
	translated = translated.replace(/prá/gi, "brá");
	translated = translated.replace(/prã/gi, "brã");
	translated = translated.replace(/pre/gi, "bre");
	translated = translated.replace(/prê/gi, "brê");
	translated = translated.replace(/pré/gi, "bré");
	// translated = translated.replace(/pri/gi, "");
	// translated = translated.replace(/prî/gi, "");
	// translated = translated.replace(/prí/gi, "");
	// translated = translated.replace(/pro/gi, "");
	// translated = translated.replace(/prô/gi, "");
	// translated = translated.replace(/pró/gi, "");
	// translated = translated.replace(/prõ/gi, "");
	// translated = translated.replace(/pru/gi, "");
	// translated = translated.replace(/prû/gi, "");
	// translated = translated.replace(/prú/gi, "");
	// translated = translated.replace(/qa/gi, "");
	// translated = translated.replace(/qâ/gi, "");
	// translated = translated.replace(/qá/gi, "");
	// translated = translated.replace(/qã/gi, "");
	// translated = translated.replace(/qe/gi, "");
	// translated = translated.replace(/qê/gi, "");
	// translated = translated.replace(/qé/gi, "");
	// translated = translated.replace(/qi/gi, "");
	// translated = translated.replace(/qî/gi, "");
	// translated = translated.replace(/qí/gi, "");
	// translated = translated.replace(/qo/gi, "");
	// translated = translated.replace(/qô/gi, "");
	// translated = translated.replace(/qó/gi, "");
	// translated = translated.replace(/qõ/gi, "");
	// translated = translated.replace(/qu/gi, "");
	// translated = translated.replace(/qû/gi, "");
	// translated = translated.replace(/qú/gi, "");
	translated = translated.replace(/qua/gi, "gua");
	translated = translated.replace(/quâ/gi, "guâ");
	translated = translated.replace(/quá/gi, "guá");
	translated = translated.replace(/quã/gi, "guã");
	translated = translated.replace(/que/gi, "gue");
	translated = translated.replace(/quê/gi, "guê");
	translated = translated.replace(/qué/gi, "gué");
	translated = translated.replace(/qui/gi, "gui");
	translated = translated.replace(/quî/gi, "guî");
	translated = translated.replace(/quí/gi, "guí");
	// translated = translated.replace(/quo/gi, "");
	// translated = translated.replace(/quô/gi, "");
	// translated = translated.replace(/quó/gi, "");
	// translated = translated.replace(/quõ/gi, "");
	// translated = translated.replace(/quu/gi, "");
	// translated = translated.replace(/quû/gi, "");
	// translated = translated.replace(/quú/gi, "");
	// translated = translated.replace(/ra/gi, "");
	// translated = translated.replace(/râ/gi, "");
	// translated = translated.replace(/rá/gi, "");
	// translated = translated.replace(/rã/gi, "");
	// translated = translated.replace(/re/gi, "");
	// translated = translated.replace(/rê/gi, "");
	// translated = translated.replace(/ré/gi, "");
	// translated = translated.replace(/ri/gi, "");
	// translated = translated.replace(/rî/gi, "");
	// translated = translated.replace(/rí/gi, "");
	// translated = translated.replace(/ro/gi, "");
	// translated = translated.replace(/rô/gi, "");
	// translated = translated.replace(/ró/gi, "");
	// translated = translated.replace(/rõ/gi, "");
	// translated = translated.replace(/ru/gi, "");
	// translated = translated.replace(/rû/gi, "");
	// translated = translated.replace(/rú/gi, "");
	// translated = translated.replace(/sa/gi, "");
	translated = translated.replace(/ssa/gi, "za");
	translated = translated.replace(/ssâ/gi, "zâ");
	translated = translated.replace(/ssá/gi, "zá");
	translated = translated.replace(/ssã/gi, "zã");
	translated = translated.replace(/sse/gi, "ze");
	translated = translated.replace(/ssê/gi, "zê");
	translated = translated.replace(/ssé/gi, "zé");
	translated = translated.replace(/ssi/gi, "zi");
	translated = translated.replace(/ssî/gi, "zî");
	translated = translated.replace(/ssí/gi, "zí");
	translated = translated.replace(/sso/gi, "zo");
	translated = translated.replace(/ssô/gi, "zô");
	translated = translated.replace(/ssó/gi, "zó");
	translated = translated.replace(/ssõ/gi, "zõ");
	translated = translated.replace(/ssu/gi, "zu");
	translated = translated.replace(/ssû/gi, "zû");
	translated = translated.replace(/ssú/gi, "zú");
	translated = translated.replace(/\bsa/gi, "za");
	translated = translated.replace(/\bsâ/gi, "zâ");
	translated = translated.replace(/\bsá/gi, "zá");
	translated = translated.replace(/\bsã/gi, "zã");
	translated = translated.replace(/\bse/gi, "ze");
	translated = translated.replace(/\bsê/gi, "zê");
	translated = translated.replace(/\bsé/gi, "zé");
	translated = translated.replace(/\bsi/gi, "zi");
	translated = translated.replace(/\bsî/gi, "zî");
	translated = translated.replace(/\bsí/gi, "zí");
	translated = translated.replace(/\bso/gi, "zo");
	translated = translated.replace(/\bsô/gi, "zô");
	translated = translated.replace(/\bsó/gi, "zó");
	translated = translated.replace(/\bsõ/gi, "zõ");
	translated = translated.replace(/\bsu/gi, "zu");
	translated = translated.replace(/\bsû/gi, "zû");
	translated = translated.replace(/\bsú/gi, "zú");
	// translated = translated.replace(/sa/gi, "");
	// translated = translated.replace(/sâ/gi, "");
	// translated = translated.replace(/sá/gi, "");
	// translated = translated.replace(/sã/gi, "");
	// translated = translated.replace(/sã/gi, "");
	// translated = translated.replace(/se/gi, "");
	// translated = translated.replace(/sê/gi, "");
	// translated = translated.replace(/sé/gi, "");
	// translated = translated.replace(/si/gi, "");
	// translated = translated.replace(/sî/gi, "");
	// translated = translated.replace(/sí/gi, "");
	// translated = translated.replace(/so/gi, "");
	// translated = translated.replace(/sô/gi, "");
	// translated = translated.replace(/só/gi, "");
	// translated = translated.replace(/sõ/gi, "");
	// translated = translated.replace(/su/gi, "");
	// translated = translated.replace(/sû/gi, "");
	// translated = translated.replace(/sú/gi, "");
	translated = translated.replace(/ta/gi, "da");
	translated = translated.replace(/tâ/gi, "dâ");
	translated = translated.replace(/tá/gi, "dá");
	translated = translated.replace(/tã/gi, "dã");
	translated = translated.replace(/te/gi, "de");
	translated = translated.replace(/tê/gi, "dê");
	translated = translated.replace(/té/gi, "dé");
	translated = translated.replace(/ti/gi, "di");
	translated = translated.replace(/tî/gi, "dî");
	translated = translated.replace(/tí/gi, "dí");
	translated = translated.replace(/to/gi, "do");
	translated = translated.replace(/tô/gi, "dô");
	translated = translated.replace(/tó/gi, "dó");
	translated = translated.replace(/tõ/gi, "dõ");
	translated = translated.replace(/tu/gi, "du");
	translated = translated.replace(/tû/gi, "dû");
	translated = translated.replace(/tú/gi, "dú");
	translated = translated.replace(/tra/gi, "dra");
	translated = translated.replace(/trâ/gi, "drâ");
	translated = translated.replace(/trá/gi, "drá");
	translated = translated.replace(/trã/gi, "drã");
	// translated = translated.replace(/tre/gi, "");
	// translated = translated.replace(/trê/gi, "");
	// translated = translated.replace(/tré/gi, "");
	// translated = translated.replace(/tri/gi, "");
	// translated = translated.replace(/trî/gi, "");
	// translated = translated.replace(/trí/gi, "");
	translated = translated.replace(/tro/gi, "dro");
	translated = translated.replace(/trô/gi, "drô");
	translated = translated.replace(/tró/gi, "dró");
	translated = translated.replace(/trõ/gi, "drõ");
	translated = translated.replace(/tru/gi, "dru");
	translated = translated.replace(/trû/gi, "drû");
	translated = translated.replace(/trú/gi, "drú");
	// translated = translated.replace(/u/gi, "");
	// translated = translated.replace(/va/gi, "");
	// translated = translated.replace(/vâ/gi, "");
	// translated = translated.replace(/vá/gi, "");
	// translated = translated.replace(/vã/gi, "");
	// translated = translated.replace(/ve/gi, "");
	// translated = translated.replace(/vê/gi, "");
	// translated = translated.replace(/vé/gi, "");
	// translated = translated.replace(/vi/gi, "");
	// translated = translated.replace(/vî/gi, "");
	// translated = translated.replace(/ví/gi, "");
	// translated = translated.replace(/vo/gi, "");
	// translated = translated.replace(/vô/gi, "");
	// translated = translated.replace(/vó/gi, "");
	// translated = translated.replace(/võ/gi, "");
	// translated = translated.replace(/vu/gi, "");
	// translated = translated.replace(/vû/gi, "");
	// translated = translated.replace(/vú/gi, "");
	// translated = translated.replace(/vra/gi, "");
	// translated = translated.replace(/vrâ/gi, "");
	// translated = translated.replace(/vrá/gi, "");
	// translated = translated.replace(/vrã/gi, "");
	// translated = translated.replace(/vre/gi, "");
	// translated = translated.replace(/vrê/gi, "");
	// translated = translated.replace(/vré/gi, "");
	// translated = translated.replace(/vri/gi, "");
	// translated = translated.replace(/vrî/gi, "");
	// translated = translated.replace(/vrí/gi, "");
	// translated = translated.replace(/vro/gi, "");
	// translated = translated.replace(/vrô/gi, "");
	// translated = translated.replace(/vró/gi, "");
	// translated = translated.replace(/vrõ/gi, "");
	// translated = translated.replace(/vru/gi, "");
	// translated = translated.replace(/vrû/gi, "");
	// translated = translated.replace(/vrú/gi, "");
	// translated = translated.replace(/wa/gi, "");
	// translated = translated.replace(/wâ/gi, "");
	// translated = translated.replace(/wá/gi, "");
	// translated = translated.replace(/wã/gi, "");
	// translated = translated.replace(/we/gi, "");
	// translated = translated.replace(/wê/gi, "");
	// translated = translated.replace(/wé/gi, "");
	// translated = translated.replace(/wi/gi, "");
	// translated = translated.replace(/wî/gi, "");
	// translated = translated.replace(/wí/gi, "");
	// translated = translated.replace(/wo/gi, "");
	// translated = translated.replace(/wô/gi, "");
	// translated = translated.replace(/wó/gi, "");
	// translated = translated.replace(/wõ/gi, "");
	// translated = translated.replace(/wu/gi, "");
	// translated = translated.replace(/wû/gi, "");
	// translated = translated.replace(/wú/gi, "");
	// translated = translated.replace(/xa/gi, "");
	// translated = translated.replace(/xâ/gi, "");
	// translated = translated.replace(/xá/gi, "");
	// translated = translated.replace(/xã/gi, "");
	// translated = translated.replace(/xe/gi, "");
	// translated = translated.replace(/xê/gi, "");
	// translated = translated.replace(/xé/gi, "");
	// translated = translated.replace(/xi/gi, "");
	// translated = translated.replace(/xî/gi, "");
	// translated = translated.replace(/xí/gi, "");
	// translated = translated.replace(/xo/gi, "");
	// translated = translated.replace(/xô/gi, "");
	// translated = translated.replace(/xó/gi, "");
	// translated = translated.replace(/xõ/gi, "");
	// translated = translated.replace(/xu/gi, "");
	// translated = translated.replace(/xû/gi, "");
	// translated = translated.replace(/xú/gi, "");
	// translated = translated.replace(/ya/gi, "");
	// translated = translated.replace(/yâ/gi, "");
	// translated = translated.replace(/yá/gi, "");
	// translated = translated.replace(/yã/gi, "");
	// translated = translated.replace(/ye/gi, "");
	// translated = translated.replace(/yê/gi, "");
	// translated = translated.replace(/yé/gi, "");
	// translated = translated.replace(/yi/gi, "");
	// translated = translated.replace(/yî/gi, "");
	// translated = translated.replace(/yí/gi, "");
	// translated = translated.replace(/yo/gi, "");
	// translated = translated.replace(/yô/gi, "");
	// translated = translated.replace(/yó/gi, "");
	// translated = translated.replace(/yõ/gi, "");
	// translated = translated.replace(/yu/gi, "");
	// translated = translated.replace(/yû/gi, "");
	// translated = translated.replace(/yú/gi, "");
	// translated = translated.replace(/za/gi, "");
	// translated = translated.replace(/zâ/gi, "");
	// translated = translated.replace(/zá/gi, "");
	// translated = translated.replace(/zã/gi, "");
	// translated = translated.replace(/ze/gi, "");
	// translated = translated.replace(/zê/gi, "");
	// translated = translated.replace(/zé/gi, "");
	// translated = translated.replace(/zi/gi, "");
	// translated = translated.replace(/zî/gi, "");
	// translated = translated.replace(/zí/gi, "");
	// translated = translated.replace(/zo/gi, "");
	// translated = translated.replace(/zô/gi, "");
	// translated = translated.replace(/zó/gi, "");
	// translated = translated.replace(/zõ/gi, "");
	// translated = translated.replace(/zu/gi, "");
	// translated = translated.replace(/zû/gi, "");
	// translated = translated.replace(/zú/gi, "");

	return translated
}
