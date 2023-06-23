import type {InferGetStaticPropsType, GetStaticProps} from 'next'

type Repo = {
	name: string
	stargazers_count: number
}

export const getStaticProps: GetStaticProps<{
	repo: Repo
}> = async () => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js')
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const repo: Repo = await res.json()
	return {props: {repo}}
}

export default function Page({
	repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <div className='text-xl'>{repo.stargazers_count}</div>
}
