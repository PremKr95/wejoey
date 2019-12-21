import React, { Component } from 'react';
import {View,ImageBackground,Text,FlatList,Image,TouchableOpacity } from 'react-native'
import {firstPageData} from '../utils/dummyJson'
let data
const arrow_down = require('../../assets/UIComponents/arrow_down.png')
const arrow_up = require('../../assets/UIComponents/arrow_up.png')
class SecondScreen extends Component {
    
    constructor(props){
        super(props)
        this.state={
            vegOpen:false,
            nonVegOpen:false
        }
        data = this.props.navigation.getParam('item',{})
    }

    static navigationOptions = {
        header: null
      };

    renderItem=(item)=>{
        console.log("TCL: renderItem -> item", item)
        const selectedIndex = data && data.index
        console.log("TCL: renderItem -> selectedIndex", selectedIndex)
        const _item = item && item.item
        return(
            <TouchableOpacity onPress={()=>{
                data['item'] = firstPageData[item.index]
                data['index']= item.index
                console.log("TCL: renderItem -> data", data)
                this.setState({vegOpen:false,nonVegOpen:false})
            } }style={{justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode={'contain'} style={{height:120,width:120,marginTop:16}} source={item.index == selectedIndex ?  _item.selectedImage :  _item.image}/>
                <Text style={{fontSize:20,color:'#fff'}}>{_item.name}</Text>
            </TouchableOpacity>
        )
    }

    toggleMenu(from){
        if(from === 'veg'){
            this.setState(prevState=>({vegOpen:!prevState.vegOpen,nonVegOpen:false , }))
        } else {
            this.setState(prevState=>({vegOpen:false , nonVegOpen:!prevState.nonVegOpen }))
        }

        
    }

    renderMenu=(item)=>{
        console.log("TCL: renderMenu -> item", item)
        const _item = item && item.item
        return(
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ThirdScreen',{data:data, item:_item , selectedArr : data.item.vegMenu })} style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode={'contain'} style={{height:120,width:120,marginTop:16}} source={_item.image}/>
                <Text style={{fontSize:20,color:'#fff'}}>{_item.name}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        //#D58226 #AA410A
        const {vegOpen,nonVegOpen}= this.state
        const name = data && data.item && data.item.name 
        const vegMenu = data && data.item && data.item.vegMenu
        const nonVegMenu = data && data.item && data.item.nonVegMenu
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
            
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>this.toggleMenu('veg')} style={{backgroundColor:'black', flexDirection:'row',alignItems:'center', marginTop:32, height:80,width:'100%'}}>
                                <Image style={{height:40,width:40,marginLeft:20}} source={require('../../assets/UIComponents/veg.png')} />
                                <Text style={{color:'#D58226',fontSize:32, marginLeft:20}}>{`Veg ${name}`}</Text>
                                <Image style={{position:'absolute',right:24, height:30,width:30}} source={vegOpen?arrow_up:arrow_down} />
                        </TouchableOpacity>
                        
                        {vegOpen &&
                        <FlatList
                            style={{margin:8,backgroundColor:'rgba(0,0,0,0.6)' , padding:24 }}
                            data={vegMenu}
                            renderItem={item=>this.renderMenu(item)}
                            numColumns={5}
                        />}

                        <TouchableOpacity onPress={()=>this.toggleMenu('nonveg')} style={{backgroundColor:'black', flexDirection:'row',alignItems:'center', marginTop:32, height:80,width:'100%'}}>
                               <Image style={{height:40,width:40,marginLeft:20}} source={require('../../assets/UIComponents/veg.png')} />
                                <Text style={{color:'#D58226',fontSize:32, marginLeft:20}}>{`Non-Veg ${name}`}</Text>
                                <Image style={{position:'absolute',right:24, height:30,width:30}} source={nonVegOpen?arrow_up:arrow_down} />
                        </TouchableOpacity>

                        {nonVegOpen &&
                        <FlatList
                            style={{margin:8,backgroundColor:'rgba(0,0,0,0.6)'}}
                            data={nonVegMenu}
                            renderItem={item=>this.renderMenu(item)}
                            numColumns={5}
                        />}
                    </View>
            </ImageBackground>
        );
    }
}
 
export default SecondScreen;