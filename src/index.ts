import qs from 'querystring';

const search = async () => {
	const baseUrl = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?';
	const options = {
		ttbkey : 'ttbqkrtnsgud02291234001',
		Query: 're:제로',
		output:'js',
		Cover:'Big'
	};

	const res = await fetch(`${baseUrl}${qs.stringify(options)}`);
	const text = await res.text()
	const data = JSON.parse(text.slice(0, text.length-1));

	console.log(data);
}

