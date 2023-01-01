import { round } from "lodash";
import { styled } from "nativewind";
import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DataContext } from "../pages/home";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchView = styled(TouchableOpacity);


export default function Header() {
    
    const profileContext = useContext<any>(DataContext);
    
    return (
        <StyledView className="flex flex-col p-4 w-full ">
            <StyledView className="flex flex-col">
                <StyledView className="flex w-full items-end">
                    <StyledTouchView className="bg-blue-300 w-1/3 p-2 rounded-full">
                        <StyledText className="text-center">
                            ALL CHAINS
                        </StyledText>
                    </StyledTouchView>
                </StyledView>
            <StyledView>
            <StyledText>
                Total balance
            </StyledText>
        
            <StyledView>
                <StyledText className="text-2xl font-bold">
                    {round(profileContext.profileData.total_balance, 2)}
                </StyledText>
            </StyledView>
            <StyledView className="pt-5">
                <StyledTouchView className="flex pl-3 pr-3 pt-2 w-1/3 pb-2 bg-yellow-300 rounded-3xl">
                    <StyledText className="text-center">
                        Load Wallet
                    </StyledText>
                </StyledTouchView>
            </StyledView>
        </StyledView>

      </StyledView>
    </StyledView>
    );
}
  