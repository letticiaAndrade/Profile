import React from "react";
import { View, Text } from "react-native";

const BottomPerfil =() => {
    return (
        <View style={{flex:1}}>
            <Text style={{marginTop:40, marginLeft:40, marginRight:40, fontWeight:'bold', color:'#DCC7BE'}}>BIOGRAFIA</Text>
            <View>
                <Text style={{color:'#DCC7BE', margin: 40, textAlign:'justify'}}>Jane Doe, nascida em 12 de janeiro de 1990 em Nova York, é conhecida por sua carreira como ativista ambiental. 
                Depois de se formar em Ciência Ambiental pela Universidade de Columbia, Jane começou sua carreira como voluntária em uma ONG local e rapidamente se destacou com sua paixão pelo meio ambiente e suas habilidades de liderança. Hoje,
                 Jane é respeitada como líder da comunidade ambiental e tem uma paixão por viajar o mundo e explorar diferentes culturas. Ela é admirada por muitos por sua coragem e dedicação à proteção do planeta..</Text>
            </View>
        </View>
      
    );
};

export default BottomPerfil;
