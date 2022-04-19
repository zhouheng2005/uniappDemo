
export function stringifyQuery(url, data) {
	let str = url.split('#')
	const hash = str[1] || ''
	str = str[0].split('?')
	let query = str[1] || ''
	url = str[0]
	const search = query.split('&').filter(item => item)
	query = {}
	search.forEach(item => {
		item = item.split('=')
		query[item[0]] = item[1]
	})
	for (let key in data) {
		if (data.hasOwnProperty(key)) {
			if (isPlainObject(data[key])) {
				query[encode(key)] = encode(JSON.stringify(data[key]))
			} else {
				query[encode(key)] = encode(data[key])
			}
		}
	}
	query = Object.keys(query).map(item => `${item}=${query[item]}`).join('&')
	return url + (query ? '?' + query : '') + (hash ? '#' + hash : '')
}
