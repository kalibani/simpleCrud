import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import SearchBar from '../../components/SearchBar';
import Modal from '../../components/Modal';
 
const Home = () => {
  return (
    <Container>
      <SearchBar />
      <Content>
        <Modal />
      </Content>
      <Footer>
        <FooterTab>
          <Button>
            <Icon type="FontAwesome" name="trash" />
          </Button>
          <Button active>
            <Icon type="FontAwesome" name="pencil-square" />
          </Button>
          <Button>
            <Icon type="FontAwesome" name="plus-circle" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default Home;