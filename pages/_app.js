import React from 'react'
import App, {Container} from 'next/app'
import Error from 'next/error'
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../store';
import { Provider } from 'react-redux';
import axios from 'axios';
import generalServer from '../service/general'
import choicesServer from '../service/choices'


class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    let { req, store } = ctx;
    if(req) {
      const general = await generalServer({store})
      if(!general) return true
      await choicesServer({store, general})

    }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render() {
    const { Component, store, pageProps } = this.props;
    if(!pageProps) {
      return (<Error status={404} />)
    }
		return (
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withRedux(initializeStore)(MyApp);