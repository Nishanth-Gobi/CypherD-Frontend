import { styled } from "nativewind";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import CoinList from "../components/coin-list";
import NavPanel from "../components/navigation";
import Header from "../components/header";

const StyledView = styled(View);

const Separator = () => (
    <View style={styles.separator} />
);


export default function Home(){
    return (
        <StyledView className="w-full h-full">
            <Header/>
            <CoinList/>
            <NavPanel/>
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