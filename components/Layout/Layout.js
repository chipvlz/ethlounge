import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Menu from './Menu';
import store from '../../redux/store';
import '../../static/css/layout.css';
import 'react-rangeslider/lib/index.css';

const layout = ChildPage =>
  class extends Component {
    static async getInitialProps(initialProps) {
      let props = {};

      const getInitialProps = ChildPage.getInitialProps;

      if (getInitialProps) {
        let childPageProps = await getInitialProps(initialProps);

        props = {
          ...props,
          ...childPageProps
        };
      }

      return props;
    }

    render() {
      return (
        <Provider store={store}>
          <Container>
            <Head>
              <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
              />
            </Head>
            <Menu />
            <ChildPage initial={this.props} />
            <h2>Footer</h2>
          </Container>
        </Provider>
      );
    }
  };

export default layout;
