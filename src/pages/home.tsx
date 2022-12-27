import { styled } from "nativewind";
import { View } from "react-native";
import CoinList from "../components/coin-list";
import NavPanel from "../components/navigation";
import Header from "../components/header";

const StyledView = styled(View);

export default function Home(){
    return (
        <StyledView className="w-full h-full">
            <Header/>
            <CoinList/>
            <NavPanel/>
        </StyledView>
    );
};
