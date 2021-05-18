import React from 'react';
import { Text, View } from 'react-native';
import db from '../config'

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allTransactions:[]
      lastVisibleTransaction=null
    }
  }
  ComponentDidMount=async()=>{
    const query=await db.collection('transactions').get{}
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:(... this.state.allTransactions,doc.data())
      })
    })
  }
    render() {
      return (
        <ScrollView>
 {  this.state.allTransactions((transaction)=>{
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <Text>Search</Text>
</View>}
 })     


        </ScrollView>
 
      );
    }
  }