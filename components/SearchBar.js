import React from 'react';
import { View, Header, Item, Input, Icon, Button, Text } from 'native-base';
const SearchBar = () =>  {
  return (
    <View>
      <Header searchBar rounded>
        <Item rounded>
          <Icon type="FontAwesome" name="search" />
          <Input placeholder="Search" />
        </Item>
      </Header>
    </View>
  );
}

export default SearchBar;