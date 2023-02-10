import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomPerfil from "./BottomPerfil";

const TopoPerfil=()=> {
    return (
        <View style={{flex: 1}}> 
             <View >
                 <Text style={{paddingLeft: 15, paddingTop: 40,fontSize: 14,fontWeight: 'bold',color: '#DCC7BE', }}>PROFILE</Text>
              </View>

            <View >
              <Text style={{height: 40, width:120, marginLeft:230, paddingVertical: 8, fontSize: 14,fontWeight: "bold",color: '#DCC7BE'}}>Nome: Jane Doe</Text>
            </View>

            <View >
              <Text style={{textAlign: 'center',paddingTop: 50,paddingLeft: 130,fontSize: 14,fontWeight: "bold",color: '#DCC7BE'}}>Idade: 18 {'\n'}Altura:1.65 m {'\n'}Peso: 54 kg{'\n'}Signo: Touro</Text>
            </View>
        
            <View>
                <Image 
                source={require('../assets/icon-exemplo.jpg')}
                style={style.image}
                />
            </View>

            <View style={style.linhaHorizontal}></View>

            
        </View>
       
    )
};
const style = StyleSheet.create({

    linhaHorizontal: {
        borderBottomWidth: 1,
        marginTop: 140,
        marginLeft: 40,
        marginRight: 40,
        borderBottomColor:'#0B4F6C' ,
    },
    
    image: {
          marginVertical: -100,
          marginLeft: 20,
          borderRadius: 75,
          height: 150,
          width: 150,
          borderStyle: "solid",
          borderWidth: 8,
          borderColor: '#0B4F6C',
      },
});
export default TopoPerfil;