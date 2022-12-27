import axios from "axios";
import { styled } from "nativewind";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CheckBox from 'expo-checkbox';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Separator = () => (
    <View style={styles.separator} />
);

export default function CoinList(){
    
    const [data, setData] = useState([]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    useEffect(() => {
        const getData = async () => {
            axios({
                method: 'get',
                url: `http://127.0.0.1:3000/covalent/balance/ethereum`,
              }).then((response) => {
                console.log(response.data);
              });        }
        try {
            void getData();
        }
        catch(error){
            console.log(error);
        }
    }, [])

    const coinsArray = ["", "", ""];
    
    return ( 
        
        <StyledView className="flex flex-col gap-2">
            
            {/* Last updated box */}
            <StyledView className="flex flex-row border-t-[1px] border-b-[1px] border-slate-300 justify-between p-3">
                <StyledView className="flex">
                    <StyledText className="text-xs">
                     Last Updated: 4 Mins ago
                    </StyledText>
                </StyledView>
                <StyledView className="flex flex-row align-middle space-x-1">
                    <StyledView className="h-full">
                        <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        color={"black"}
                        />
                     </StyledView>
                    <StyledView className="align-middle h-full">
                        <StyledText className="text-xs">
                            Only verified coins
                        </StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>

            {/* coins list */}
            <StyledView className="divide-y">
                {/* <FlatList
                    data = {}
                    renderItem={}>

                </FlatList> */}
            </StyledView>


            {/* {
                coinsArray.map(item => (
                    <StyledView key={item.name} className="flex w-full flex-row justify-between">
         
                    <StyledView className="flex flex-row gap-3 align-middle">
                        <StyledView>
                            <StyledImage source={{uri:"https://imgs.search.brave.com/ctaac7Upc_Hl955_3i26IYYz2ZQjOJHhONBqFpduYiY/rs:fit:980:980:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18yMzQ5NTcucG5n"}}
                            className="w-10 h-10 p-1"/>
                        </StyledView>
                        <StyledView className="flex flex-col">
                            <StyledText>item.name</StyledText>
                            <StyledText>item.ticker</StyledText>
                        </StyledView>
                    </StyledView>
             
                    <StyledView className="flex flex-col">
                        <StyledText className="text-md">item.holding</StyledText>
                        <StyledText className="text-xs text-right">item.balance</StyledText>
                    </StyledView>
    
                    <Separator/>
                    </StyledView>

                ))
            }                 */}
        </StyledView>

    );
};

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
});