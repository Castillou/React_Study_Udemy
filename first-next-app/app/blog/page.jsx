import Link from 'next/link';

export default function BlogPage() {
	return (
		<main>
			<h1>MY BLOG</h1>
			<p>
				<Link href="/blog/page-1">page-1</Link>
			</p>
			<p>
				<Link href="/blog/page-2">page-2</Link>
			</p>
		</main>
	);
}
