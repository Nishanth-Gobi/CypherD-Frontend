import { styled } from "nativewind";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchView = styled(TouchableOpacity);

const image = { uri: "https://imgs.search.brave.com/wEHx4L0ISIyHfXUn4M9TTOtv0ME58xFEz_hgy2D_yos/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzU5/My8xNjkvb3JpZ2lu/YWwvdmVjdG9yLXdh/bGxldC1pY29uLmpw/Zw" }

export default function Header() {
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
                    $89.87
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
  