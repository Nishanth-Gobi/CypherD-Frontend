import axios from "axios";
import { styled } from "nativewind";
import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CheckBox from 'expo-checkbox';
import { round } from 'lodash';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

export default function CoinList(){
    
    const [data, setData] = useState([]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [coinsArray, setcoinsArray] = useState([]);

    async function getData() {
        const { data } = await axios.get('https://cypherd-production.up.railway.app/covalent/balance/ethereum')
        console.log("🚀 ~ file: coin-list.tsx:18 ~ getData ~ data", data)
        setcoinsArray(data.balances)


    }

    useEffect(() => {
        void getData();
       
    }, [])
    
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

            <StyledScrollView className="h-[60vh]">
            {
                coinsArray.map(item => (
                    <StyledView key={item.name} className="flex w-full p-4  flex-row justify-between">
         
                    <StyledView className="flex flex-row gap-3 align-middle">
                        <StyledView>
                            <StyledImage source={{uri: item.logo_url }}
                            className="w-10 h-10 p-1"/>
                        </StyledView>
                        <StyledView className="flex flex-col">
                            <StyledText>{item.name}</StyledText>
                            <StyledText>{item.ticker}</StyledText>
                        </StyledView>
                    </StyledView>
             
                    <StyledView className="flex flex-col">
                        <StyledText className="text-md">{item.holding}</StyledText>
                        <StyledText className="text-xs text-right">{round(parseFloat(item.balance), 6)}</StyledText>
                    </StyledView>
                    </StyledView>
                ))
            }              
            </StyledScrollView>
        </StyledView>

    );
};

