import axios from "axios";
import { styled } from "nativewind";
import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import CheckBox from 'expo-checkbox';
import { round } from 'lodash';
import { DataContext } from "../pages/home";
// import {BASE_URL} from '@env';

// Configs 
const UNVERIFIED_LOGO_URL = "https://cdn-icons-png.flaticon.com/512/9297/9297293.png";
const BASE_URL = "https://cypherd-production.up.railway.app/covalent/balance/"
const WALLET_ADDRESS = "0x6AE65a7033a84bb36778fEA6607A25a0d6c8EE50"

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledScrollView = styled(ScrollView);


export default function CoinList(){
    
    const [lastUpdated, setUpdatedAt] = useState(0); 
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [coinsArray, setCoinsArray] = useState<any[]>([]);

    const profileContext = useContext<any>(DataContext);


    async function getData() {

        try {
            const { data } = await axios.get(BASE_URL + WALLET_ADDRESS);    
            setCoinsArray(data.balances);
            setUpdatedAt(data.updated_at);
            profileContext.setProfileData({...data});
        }
        catch (error) {
            console.log('Error in retreiving data from the API endpoint');
        }
    }

    useEffect(() => {
        void getData();
    }, [])

    function formatLastUpdated(lastUpdated: any){
        var d = new Date(lastUpdated);
        var c = new Date();
        var minutes = round((c.getTime()-d.getTime()) / 60000);
        return minutes;
    }    
 
    return ( 
        
        <StyledView className="flex flex-col gap-2">
            
            {/* Last updated box */}
            <StyledView className="flex flex-row border-t-[1px] border-b-[1px] border-slate-300 justify-between p-3">
                <StyledView className="flex">
                    <StyledText className="text-xs">
                     Last Updated: {formatLastUpdated(lastUpdated)} Mins ago
                    </StyledText>
                </StyledView>
                <StyledView className="flex flex-row align-middle space-x-1">
                    <StyledView className="h-full">
                        <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        color={"black"}
                        style={{ width:15, height:15 }}
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
            <StyledScrollView className="h-[60vh]">
            {
                coinsArray.map((item, index) => (
                    <StyledView key={ item.name.concat(index) }>
                    {(item.is_verified && toggleCheckBox || !toggleCheckBox)
                    &&
                    <StyledView className="flex w-full py-5 px-4 flex-row justify-between border-b-[1px] border-slate-200">
                    <><StyledView className="flex flex-row gap-3 align-middle">
                                <StyledView>
                                    <StyledImage source={{ uri: item.is_verified ? item.logo_url : UNVERIFIED_LOGO_URL }}
                                        className="w-10 h-10 p-1" />
                                </StyledView>
                                <StyledView className="flex flex-col">
                                    <StyledText className="text-lg text-gray-600 font-bold">{item.name}</StyledText>
                                    <StyledText className="text-gray-600">{item.ticker}</StyledText>
                                </StyledView>
                            </StyledView><StyledView className="flex flex-col">
                                    <StyledText className="text-lg font-bold text-gray-600 text-right">${round(item.holding, 2)}</StyledText>
                                    <StyledText className="text-xs text-gray-600 text-right">{round(parseFloat(item.balance), 4)}</StyledText>
                                </StyledView></>
                    </StyledView>
}
                    </StyledView>
                ))
            }              
            </StyledScrollView>
        </StyledView>

    );
};
