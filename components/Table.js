import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
 
export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No Container', 'Size', 'Type', 'Slot', 'Row', 'Tier'],
      widthArr: [100, 40, 60, 54, 54, 54],
    }
  }
 
  render() {
    const state = this.state;
    const { tableData } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={state.tableHead} 
                widthArr={state.widthArr} 
                style={styles.head} 
                textStyle={styles.text}/>
                <TableWrapper style={styles.wrapper}>
                  <Rows 
                    data={tableData} 
                    widthArr={state.widthArr} 
                    style={styles.row} 
                    textStyle={styles.text}
                  />
                </TableWrapper>
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});