import React from "react";
import { View, ScrollView, Text, Image } from "react-native";


export default function Start(){

return(
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image
                    source={require("../../assets/icons/logo3.png")}/>

                <Text>
                    Vanos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
                </Text>


            </View>
        </ScrollView>
    </View>

)

}