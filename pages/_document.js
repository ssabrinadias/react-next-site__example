import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, viewport-fit=contain"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
