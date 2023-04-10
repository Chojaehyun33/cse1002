import Link from 'next/link';

export default function FirstPost() {
	return (
		<>
		<h1>My name is Jaehyun Cho.</h1> 
	          <h2>I like green and I like the sea.</h2>
			  <h2>I am so sleepy right now.</h2> 
			  <h2>
				  <Link href="/">Back to home</Link>
			  </h2>
		</>
);
}