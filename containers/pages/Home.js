import React , { useState } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import SearchBar from '../../components/SearchBar';
import Modal from '../../components/Modal';
import Table from '../../components/Table';
 
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setValue] = useState({
    noContainer: '',
    size: '',
    type: '',
    slot: '',
    row: '',
    tier: ''
  })

  const [tableData, setTableData] = useState(
    [
      ['xyz123', '20', 'Dry', '10', '2', '2'],
      ['abc123', '20', 'Dry', '10', '2', '2'],
      ['def123', '40', 'Dry', '10', '2', '2'],
      ['hij123', '40', 'Dry', '10', '2', '2'],
      ['klm123', '45', 'No', '10', '2', '2'],
      ['nop123', '45', 'No', '10', '2', '2']
    ]
  )


  // determine form type (add, update or delete)
  const [formType, setFormType] = useState('');
  const handleEmptyField = () => {
    setValue({
      ...form,
      noContainer: '',
      size: '',
      type: '',
      slot: '',
      row: '',
      tier: ''
    })
  }
  const handleAddData = (data) => {
    // converting object data to array
    const newData = Object.values(data)
    setTableData(tableData => [...tableData, newData]);
    setModalVisible(false);
  }

  const handleUpdateData = (data) => {
    // converting object data to array
    const newData = Object.values(data)
    let newTableData = [...tableData]
    newTableData[0] = newData
    setTableData(newTableData);
    setModalVisible(false);
  }

  const handleDeleteData = () => {
    setTableData([])
    setModalVisible(false);
    handleEmptyField();
  }

  const handleSubmit = (dataForm) => {
    switch(formType) {
      case 'add':
        handleAddData(dataForm);
        break;
      case 'update':
        handleUpdateData(dataForm);
        break;
      case 'delete':
        handleDeleteData();
        break;
      default:
        handleAddData(dataForm);
    }
  }

  const handleChangeText = (attrName, value) => {
    setValue({
      ...form,
      [attrName]: value
    });
  }

  const handleOpenModal = (type, isOpen) => {
    switch(type) {
      case 'add':
        setModalVisible(isOpen)
        setFormType(type)
        handleEmptyField()
        break;
      case 'update':
        setModalVisible(isOpen)
        tableData.length > 0 && setValue({
          ...form,
          noContainer: tableData[0][0],
          size: tableData[0][1],
          type: tableData[0][2],
          slot: '',
          row: '',
          tier: ''
        })
        setFormType(type)
        break;
      case 'delete':
        setModalVisible(isOpen)
        setFormType(type)
        break;
      default:
        setModalVisible(isOpen)
    }
  }

  return (
    <Container>
      <SearchBar />
      <Content>
        <Modal
          handleChangeText={handleChangeText}
          dataForm={form}
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(false)}
          handleClick={handleSubmit}
          formType={formType}
        />
        <Table tableData={tableData} />
      </Content>
      <Footer>
        <FooterTab>
          <Button onPress={() => handleOpenModal('delete', true)}>
            <Icon type="FontAwesome" name="trash" />
          </Button>
          <Button onPress={() => handleOpenModal('update', true)}>
            <Icon type="FontAwesome" name="pencil-square" />
          </Button>
          <Button onPress={() => handleOpenModal('add', true)}>
            <Icon type="FontAwesome" name="plus-circle" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default Home;