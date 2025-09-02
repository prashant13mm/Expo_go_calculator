import { StyleSheet, Text, View ,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from './colors'
import Button from './button'

const calculator = () => {
  const[firstValue,setFirstValue]=useState('');
  const[displayValue,setDisplayValue]=useState('0');
  const[operator,setOperator]=useState('');

  const handleNumberInput=(num:string)=>{
    if(displayValue=='0'){
      setDisplayValue(num);
    }else{
      setDisplayValue(displayValue+num);
    }
  }
  const handleDel=()=>{
    if(displayValue.length==1){
      setDisplayValue('0')
    }else{
    setDisplayValue(displayValue.slice(0,-1));
  }
};
  const handleClear=()=>{
    setDisplayValue('0');
    setFirstValue('');
    setOperator('')
  }
  const handleCalculation=()=>{
    const num1=parseFloat(firstValue);
    const num2=parseFloat(displayValue);

    if(operator==='+'){
      setDisplayValue((num1+num2).toString());
    }else if(operator==='-'){
      setDisplayValue((num1-num2).toString());
    }else if(operator==='%'){
      setDisplayValue((num1%num2).toString());
    }else if(operator==='÷'){
      setDisplayValue((num1/num2).toString());
    }else if(operator==='X'){
      setDisplayValue((num1*num2).toString());
    }

    setFirstValue('')
    setOperator('')
  }
  const handleOperator=(operator:string)=>{
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0')
  }
  const buttons = [
    [{ title: 'C', type: 'top' }, { title: 'CE', type: 'top' }, { title: '%', type: 'top' }, { title: '÷', type: 'right' }],
    [{ title: '7', type: 'number' }, { title: '8', type: 'number' }, { title: '9', type: 'number' }, { title: 'X', type: 'right' }],
    [{ title: '4', type: 'number' }, { title: '5', type: 'number' }, { title: '6', type: 'number' }, { title: '-', type: 'right' }],
    [{ title: '1', type: 'number' }, { title: '2', type: 'number' }, { title: '3', type: 'number' }, { title: '+', type: 'right' }],
    [{ title: '0', type: 'number' }, { title: '00', type: 'number' }, { title: '.', type: 'number' }, { title: '=', type: 'right' }],
  ]
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:40,fontWeight:'300'}}>{firstValue+operator}</Text>
        <Text style={styles.font}>{displayValue}</Text>
        {/* <TextInput
          style={styles.font}
          value={displayValue}
          editable={true}         
          caretHidden={false}     
          showSoftInputOnFocus={false} 
          autoFocus={true}       
        /> */}

      </View>
          <View style={styles.keypad}>
        {buttons.flat().map((btn, index) => (
          <Button
            key={index}
            title={btn.title}
            type={btn.type}
            onPress={() => {
              if (btn.title === 'C') handleClear()
              else if (btn.title === 'CE') handleDel()
              else if (btn.title === '=') handleCalculation()
              else if (['+', '-', 'X', '÷', '%'].includes(btn.title)) handleOperator(btn.title)
              else handleNumberInput(btn.title)
            }}
          />
        ))}
      </View>
      {/* <View style={styles.keypad}>
        <Button title='C' type='top' onPress={()=>handleClear('C')} />
        <Button title='CE' type='top' onPress={()=>handleDel('CE')}/>
        <Button title='%' type='top' onPress={()=>handleOperator('%')}/>
        <Button title='÷' type='right'onPress={()=>handleOperator('÷')}/>
        <Button title='7' type='number' onPress={()=>handleNumberInput('7')}/>
        <Button title='8' type='number' onPress={()=>handleNumberInput('8')}/>
        <Button title='9' type='number' onPress={()=>handleNumberInput('9')}/>
        <Button title='X' type='right'onPress={()=>handleOperator('X')}/>
        <Button title='4' type='number' onPress={()=>handleNumberInput('4')}/>
        <Button title='5' type='number'onPress={()=>handleNumberInput('5')}/>
        <Button title='6' type='number' onPress={()=>handleNumberInput('6')}/>        
        <Button title='-' type='right'onPress={()=>handleOperator('-')} />
        <Button title='1' type='number' onPress={()=>handleNumberInput('1')}/>
        <Button title='2' type='number' onPress={()=>handleNumberInput('2')}/>
        <Button title='3' type='number' onPress={()=>handleNumberInput('3')}/>
        <Button title='+' type='right' onPress={()=>handleOperator('+')}/>
        <Button title='0'type='number' onPress={()=>handleNumberInput('0')}/>
        <Button title='00' type='number' onPress={()=>handleNumberInput('00')}/>
        <Button title='.' type='number' onPress={()=>handleNumberInput('.')}/>
        <Button title='=' type='right'onPress={()=>handleCalculation('=')}/>
        
      </View> */}
    </View>
  )
}

export default calculator

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    display:{
        flex:1.3,
        backgroundColor:Colors.gray,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingVertical:10,
        
        },
    font:{
      fontSize:70,
      fontWeight:'300',
      color: '#000'
    },
    keypad:{
        flex:2,
        backgroundColor:'#6767b0dd',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        padding:20,
        gap:22,
      
    },



})