import React, { Component } from 'react';
import {View,ImageBackground,Text,FlatList,Image,TouchableOpacity } from 'react-native'
import {firstPageData} from '../utils/dummyJson'
class FirstScreen extends Component {
    
    static navigationOptions = {
        header: null
      };
    
    renderItem=(item)=>{
        const _item = item && item.item
        return(
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('SecondScreen',{item:item})} style={{justifyContent:'center',alignItems:'center'}}>
                <Image style={{height:140,width:140, marginLeft:item.index == 0 ? 16 : 0 , marginRight:8}} source={_item.image}/>
                <Text style={{fontSize:24,color:'#fff',fontWeight:'bold'}}>{_item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() { 
        return ( 
        <ImageBackground style={{flex:1}} source={require('../../assets/background.png')}>
                
                <Image resizeMode={'contain'} style={{height:400,width:400,alignSelf:'center'}} source={require('../../assets/UIComponents/marriott.png')}/>

                <View style={{position:'absolute',bottom:100, height:200,width:'100%',backgroundColor:'rgba(252,252,252,0.2)'}}>
                        <FlatList
                            keyExtractor={(item,index)=>index.toString()}
                            data={firstPageData}
                            renderItem={(item)=>this.renderItem(item)}
                            style={{}}
                            horizontal={true}
                        />
                </View>
        </ImageBackground> );
    }
}
 
export default FirstScreen;