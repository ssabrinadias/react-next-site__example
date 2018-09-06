import React from 'react'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../store';
import { Provider } from 'react-redux';

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withRedux(initializeStore)(MyApp);