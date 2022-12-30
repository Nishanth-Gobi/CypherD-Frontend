import axios from "axios";
import { styled } from "nativewind";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CheckBox from 'expo-checkbox';
import { round } from 'lodash';
// import ApiData, { coinsArray, lastUpdated } from "../../api";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);

export default function CoinList(){
    
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [coinsArray, setcoinsArray] = useState<any[]>([]);
    const [lastUpdated, setUpdatedAt] = useState();

    async function getData() {
        const { data } = await axios.get('https://cypherd-production.up.railway.app/covalent/balance/0x6AE65a7033a84bb36778fEA6607A25a0d6c8EE50/ethereum')
        // console.log("🚀 ~ file: coin-list.tsx:18 ~ getData ~ data", data)
        setcoinsArray(data.balances);
        setUpdatedAt(data.updated_at);
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
                     Last Updated: {lastUpdated} Mins ago
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

            {/* List */}
            <StyledScrollView className="h-[60vh] divide-y-[1px] divide-slate-200">
            {
                coinsArray.map(item => (
                    <StyledView key={ item.name.concat(item.ticker) } className="flex w-full py-5 px-4 flex-row justify-between">
         
                    <StyledView className="flex flex-row gap-3 align-middle">
                        <StyledView>
                            <StyledImage source={{uri: item.logo_url }}
                            className="w-10 h-10 p-1"/>
                        </StyledView>
                        <StyledView className="flex flex-col">
                            <StyledText className="text-lg text-gray-600 font-bold">{item.name}</StyledText>
                            <StyledText className="text-gray-600">{item.ticker}</StyledText>
                        </StyledView>
                    </StyledView>
             
                    <StyledView className="flex flex-col">
                        <StyledText className="text-lg font-bold text-gray-600 text-right">${item.holding}</StyledText>
                        <StyledText className="text-xs text-gray-600 text-right">{round(parseFloat(item.balance), 6)}</StyledText>
                    </StyledView>
                    </StyledView>
                ))
            }              
            </StyledScrollView>
        </StyledView>

    );
};

