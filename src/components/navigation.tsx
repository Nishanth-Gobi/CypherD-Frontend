import { Text, TouchableOpacity, View } from "react-native";
import { styled } from "nativewind";
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchView = styled(TouchableOpacity);

export default function NavPanel(){
    return (
        <StyledView className="flex flex-row justify-between px-6 py-3 border-t-[1px] border-slate-200">
            <StyledTouchView className="flex flex-col items-center gap-1">
                
                <SimpleLineIcons name="globe" size={30}/>
                <StyledText className="text-xs">
                    Browser
                </StyledText>
            </StyledTouchView>
            <StyledTouchView className="flex flex-col items-center gap-1">
                <MaterialIcons name="pie-chart" size={30}/>
                <StyledText className="text-xs">
                    Portfolio
                </StyledText>
            </StyledTouchView>
            <StyledTouchView className="flex flex-col items-center gap-1">
                <SimpleLineIcons name="link" size={30}/>
                <StyledText className="text-xs">
                    Shortcuts
                </StyledText>
            </StyledTouchView>
            <StyledTouchView className="flex flex-col items-center gap-1">
                <SimpleLineIcons name="options" size={30}/>
                <StyledText className="text-xs">
                    Options
                </StyledText>
            </StyledTouchView>
      </StyledView>
    );
};