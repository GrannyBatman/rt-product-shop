interface Props {
	error: string
}

export function ErrorMessage({ error }: Props) {
	return <p className="text-center text-red-600">{error}</p>
}
