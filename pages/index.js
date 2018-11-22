import "../less/blog-homepage.less"
import Link from 'next/link'
import Router from 'next/router'

const Index = () => (
	<div>
		<p>Hello Next.js</p>
		<div>
		Click <a href='#' onClick={() => Router.push('/blog/1234')}>here</a> to read more
		</div>
	</div>
)

export default Index