import react from "react";
import { View, Image, Text } from "react-native";

const IconLabel = ({ containerStyle, icon, iconStyle, title, titleStyle})=>{
    return(
        <View
            style={{
                flexDirection:'row',
                alignItems: 'center',
                ...containerStyle
            }}
        >
            <Image
                source={icon}
                style={{
                    width:20,
                    height:20,
                    tintColor: '#f9133a',
                    ...iconStyle
                }}
            />
            <Text
            style={{
                marginLeft:10,
                ...titleStyle
            }}>
                {title}
            </Text>
        </View>
    )
}
export default IconLabel;

