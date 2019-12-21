import React, { Component } from 'react';
import {View,ImageBackground,Text,FlatList,Image,TouchableOpacity } from 'react-native'
import {firstPageData} from '../utils/dummyJson'
let data, dataItem,selectedArr
const arrow_down = require('../../assets/UIComponents/arrow_down.png')
const arrow_up = require('../../assets/UIComponents/arrow_up.png')
class ThirdScreen extends Component {
    
    constructor(props){
        super(props)
        this.state={
            vegOpen:false,
            nonVegOpen:false 
        }
        data = this.props.navigation.getParam('data',{})
        dataItem = this.props.navigation.getParam('item',{})
        selectedArr = this.props.navigation.getParam('selectedArr',[])
    }

    static navigationOptions = {
        header: null
    };

    renderItem=(item)=>{
        const selectedIndex = data && data.index
        const _item = item && item.item
        return(
            <TouchableOpacity onPress={()=>{
                data['item'] = firstPageData[item.index]
                data['index']= item.index
                this.setState({vegOpen:false,nonVegOpen:false})
            }} style={{justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode={'contain'} style={{height:120,width:120,marginTop:16}} source={item.index == selectedIndex ?  _item.selectedImage :  _item.image}/>
                <Text style={{fontSize:20,color:'#fff'}}>{_item.name}</Text>
            </TouchableOpacity>
        )
    }

    renderMenu=(item)=>{
        const selectedIndex = data && data.index
        const _item = item && item.item
        return(
            <TouchableOpacity onPress={()=>{
            }} style={{marginTop:8, backgroundColor:selectedIndex === item.index ? '#D58226':'transparent' ,justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode={'contain'} style={{height:120,width:120,marginTop:16}} source={_item.image}/>
                <Text style={{fontSize:20,color:'#fff'}}>{_item.name}</Text>
            </TouchableOpacity>
        )
    }

    renderHeader=()=>{
        return(
            <View style={{ justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode={'contain'} style={{height:120,width:120,marginTop:16}} source={data.item.selectedImage}/>
                <Text style={{fontSize:20,color:'#fff'}}>{data.item.name}</Text>
            </View>
        )
    }

    renderItemForIngredients=(item)=>{
        const index = item.index
        console.log("TCL: renderItemForIngredients -> item", item)
        return(
            <View style={{marginTop:index===0 ?  8 : 0, paddingLeft:16,backgroundColor: 'rgba(0,0,0,0.6)', height:52,width:'80%',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontSize:22}}>{'* 5 Table Spoon of Sugar'}</Text> 
            </View>
            
        )
    }

   
    render() { 
        console.log("TCL: render -> selectedArr", selectedArr)
        return (
        <ImageBackground style={{flex:1,flexDirection:'row',borderWidth:4,borderColor:'#D58226'}} source={require('../../assets/background.png')}>
                   <View style={{height:'100%',width:170,backgroundColor:'rgba(0,0,0,0.6)'}}>
                        <FlatList
                            keyExtractor={(item,index)=>index.toString()}
                            data={firstPageData}
                            renderItem={(item)=>this.renderItem(item)}
                            style={{}}
                            showsVerticalScrollIndicator={true}
                        />
                    </View>

                    <View style={{height:'100%',width:170,backgroundColor:'rgba(0,0,0,0.6)'}}>
                        <FlatList
                            keyExtractor={(item,index)=>index.toString()}
                            data={selectedArr}
                            renderItem={(item)=>this.renderMenu(item)}
                            style={{}}
                            showsVerticalScrollIndicator={true}
                            ListHeaderComponent={this.renderHeader()}

                        />
                    </View>

                    <View style={{height:'100%',justifyContent:'space-between', width:'40%'}}>
                        <Image
                            source={require('../../assets/UIComponents/Pizza2.png')}
                            style={{height:'50%',width:'80%',alignSelf:'center',marginTop:16}}
                            resizeMode={'stretch'}
                        />

                        <View style={{height:'20%',width:'80%',alignSelf:'center', backgroundColor:'rgba(0,0,0,0.6)'}}>
                            <View style={{paddingLeft:32, marginLeft:12,marginTop:32, width:'80%', alignItems:'center', flexDirection:'row', }}>
                                <Text style={{color:'#fff',fontSize:24}}>{'Pepporoni Pizza'}</Text>
                             </View>

                             <View style={{paddingLeft:32, marginLeft:12,marginTop:32, width:'80%', alignItems:'center', flexDirection:'row', }}>
                                <Text style={{color:'#D58226',fontSize:24}}>{'Prize'}</Text>
                                <Text style={{marginLeft:48, color:'#fff',fontWeight:'bold', fontSize:24,}} >{'Rs. 599'}</Text> 
                             </View>
                        </View>

                        <View style={{height:'10%', marginBottom:80 , marginLeft:32 }}>
                             <View style={{paddingLeft:32, marginLeft:12, height:'80%',width:'80%', alignItems:'center', flexDirection:'row', backgroundColor:'rgba(0,0,0,0.6)' }}>
                                <Text style={{color:'#D58226',fontSize:24}}>{'Serving Size'}</Text>
                                <Text style={{marginLeft:48, color:'#fff',fontWeight:'bold', fontSize:24,}} >{'2 People'}</Text> 
                             </View>
                         </View>

                        
                    </View>

                    <View style={{height:'100%',justifyContent:'space-between', width:'40%'}}>
                        
                         <View style={{height:'60%'}}>
                                <FlatList
                                        style={{padding:32,height:'100%'}}
                                        data={['1','2','3','4','5','6']}
                                        renderItem={(item)=>this.renderItemForIngredients(item)}
                                        ListHeaderComponent={<Text style={{color:'#D58226',fontSize:24,}}>{'Ingredients'}</Text>}
                                        ListHeaderComponentStyle={{height:52,width:'80%',backgroundColor:'black',justifyContent:'center',paddingLeft:16}}
                                    />
                         </View>

                         <View style={{height:'10%', }}>
                             <View style={{marginLeft:12, height:'80%',width:'80%', alignItems:'center',justifyContent:'center', flexDirection:'row', backgroundColor:'rgba(0,0,0,0.6)' }}>
                                <Text style={{color:'#D58226',fontSize:24}}>{'Preparation Time'}</Text>
                                <Text style={{marginLeft:48, color:'#fff',fontWeight:'bold', fontSize:24,}} >{'30 Minutes'}</Text> 
                             </View>
                         </View>

                         <View style={{marginLeft:16,width:'78%', flexDirection:'row', height:'20%',backgroundColor:'rgba(0,0,0,0.6)',marginBottom:32}}>
                               
                               <View style={{backgroundColor:'black', justifyContent:'center',alignItems:'center', height:'100%',width:80,marginLeft:-90,borderTopLeftRadius:200,borderBottomLeftRadius:200 }}>
                                    <Text style={{textAlign:'center',alignSelf:'center', color:'#D58226',fontSize:24,fontWeight:'bold'}}>{'Best \n width'}</Text>
                               </View>
                               
                                {[1,2,3,4].map((item,index)=>{
                                    return(
                                        <View style={{justifyContent:'center',alignItems:'center'}}>
                                            <Image style={{height:100,width:100}} source={require('../../assets/UIComponents/beer.png')}/>
                                            <Text style={{marginTop:8, color:'#fff',fontSize:18}}>{'Beer'}</Text>
                                        </View>
                                    )
                                })}
                         </View>

                    </View>
            
                    
            </ImageBackground> );
    }
}
 
export default ThirdScreen;