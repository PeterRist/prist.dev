import {useEffect, useState} from 'react'

export default function State() {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
			.then((response) => response.json())
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			.then((json) => setData(json))
			.catch((error) => console.error(error))
	}, [])

	return (
		<div>
			{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
		</div>
	)
}
