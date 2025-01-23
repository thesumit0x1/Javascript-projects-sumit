(function() {
	const baseCodes={
		1:"USD",
		2:"AED",
		3:"AFN",
		4:"ALL",
		5:"AMD",
		6:"ANG",
		7:"AOA",
		8:"ARS",
		9:"AUD" ,
		10:"AWG",
		12:"AZN",
		13:"BAM",
		14:"BBD",
		15:"BDT", 
		16:"BGN", 
		17:"BHD",
		18:"BIF",
		19:"BMD", 
		20:"BND",
		21:"BOB",
		22:"BRL",
		23:"BSD", 
		24:"BTN", 
		25:"BWP", 
		26:"BYN",
		27:"BZD", 
		28:"CAD", 
		29:"CDF", 
		30:"CHF", 
		31:"CLP", 
		32:"CNY", 
		33:"COP",
		34:"CRC", 
		35:"CUP", 
		36:"CVE", 
		37:"CZK", 
		38:"DJF", 
		39:"DKK",
		40:"DOP", 
		41:"DZD",
		42:"EGP", 
		43:"ERN", 
		44:"ETB",
		45:"EUR",
		46:"FJD",
		47:"FKP",
		48:"FOK",
		49:"GBP",
		50:"GEL",
		51:"GGP",
		52:"GHS", 
		53:"GIP",
		54:"GMD", 
		55:"GNF", 
		56:"GTQ",
		57:"GYD", 
		58:"HKD",
		59:"HNL", 
		60:"HRK",
		61:"HTG" ,
		62:"HUF" ,
		63:"IDR" ,
		64:"ILS",
		65:"IMP",
		66:"INR" ,
		67:"IQD" ,
		68:"IRR" ,
		69:"ISK" ,
		70:"JEP",
		71:"JMD" ,
		72:"JOD",
		73:"JPY" ,
		74:"KES" ,
		75:"KGS" ,
		76:"KHR" ,
		77:"KID" ,
		78:"KMF" ,
		79:"KRW" ,
		80:"KWD" ,
		81:"KYD" ,
		82:"KZT" ,
		83:"LAK" ,
		84:"LBP" ,
		85:"LKR" ,
		86:"LRD" ,
		87:"LSL" ,
		88:"LYD" ,
		89:"MAD" ,
		90:"MDL" ,
		91:"MGA" ,
		92:"MKD" ,
		93:"MMK" ,
		94:"MNT" ,
		95:"MOP" ,
		96:"MRU" ,
		97:"MUR" ,
		98:"MVR" ,
		99:"MWK" ,
		100:"MXN", 
		101:"MYR", 
		102:"MZN", 
		103:"NAD", 
		104:"NGN", 
		105:"NIO", 
		106:"NOK", 
		107:"NPR", 
		108:"NZD", 
		109:"OMR", 
		110:"PAB",
		111:"PEN", 
		112:"PGK",
		113:"PHP", 
		114:"PKR",
		115:"PLN",
		116:"PYG", 
		117:"QAR", 
		118:"RON", 
		119:"RSD", 
		120:"RUB", 
		121:"RWF", 
		122:"SAR", 
		123:"SBD",
		124:"SCR",
		125:"SDG", 
		126:"SEK", 
		127:"SGD",
		128:"SHP", 
		129:"SLE",
		130:"SLL", 
		131:"SOS", 
		132:"SRD",
		133:"SSP",
		134:"STN",
		135:"SYP",
		136:"SZL",
		137:"THB",
		138:"TJS", 
		139:"TMT", 
		140:"TND", 
		141:"TOP", 
		142:"TRY", 
		143:"TTD", 
		144:"TVD", 
		145:"TWD", 
		146:"TZS", 
		147:"UAH", 
		148:"UGX", 
		149:"UYU",
		150:"UZS", 
		151:"VES", 
		152:"VND", 
		153:"VUV", 
		154:"WST", 
		155:"XAF", 
		156:"XCD", 
		157:"XDR", 
		158:"XOF", 
		159:"XPF", 
		160:"YER", 
		161:"ZAR",
		162:"ZMW",
		163:"ZWL",
		}
	
	const inputAmount =document.querySelector('.amount')
	const showResultTAg =document.querySelector('.result')
	const buttonTag=document.querySelector('button')
	let fromCurrency =document.querySelector('.fromCurrency')
	let toCurrency =document.querySelector('.toCurrency')
	assignBaseCodes(fromCurrency)
	assignBaseCodes(toCurrency)
	
	inputAmount.addEventListener('click',()=>{
		showResultTAg.value =''
	})
	buttonTag.addEventListener('click', () =>{
		showResultFun()
	})
	
	function assignBaseCodes(currencyOption){
		Object.values(baseCodes).forEach((baseCode) => {
			let option =document.createElement('option')
			option.value=baseCode
			option.innerText =baseCode
			currencyOption.append(option)
		});
	}
	
	
	function showResultFun(){
	const APIKey=' 344804dddac2e1a58b87428a'
	fetch(` https://v6.exchangerate-api.com/v6/344804dddac2e1a58b87428a/latest/${fromCurrency.value}`).then((res) => res.json())
	.then((data)=>{
		if(inputAmount.value){
		let fromCurrencyVAlue =toCurrency.value
		let conversionRates=data.conversion_rates
		let ConversionResult =((conversionRates)[fromCurrencyVAlue] * inputAmount.value).toFixed(2)
		showResultTAg.disabled=false
		showResultTAg.value=ConversionResult
		} else{
			alert('Enter the Amount First:')
		}
	})
	}
})();