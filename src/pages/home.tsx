import { styled } from "nativewind";
import { ImageBackground, View } from "react-native";
import CoinList from "../components/coin-list";
import NavPanel from "../components/navigation";
import Header from "../components/header";

const StyledView = styled(View);
const image = { 
    uri: "https://img.freepik.com/free-photo/3d-hand-hold-wallet-with-paper-money-cash_107791-16187.jpg?w=740&t=st=1672405260~exp=1672405860~hmac=59e28d17b04fd2153cad2b5e97c120bd1efb303c59b635763b6c5f99c0ecce5b" 
}

export default function Home(){
    return (
        <StyledView className="w-full h-full">
                        <ImageBackground source={image} resizeMode="center">
            <Header/>
</ImageBackground>
            <CoinList/>
            <NavPanel/>
        </StyledView>
    );
};
