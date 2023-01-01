import { View, SafeAreaView } from "react-native";
import { styled } from "nativewind";
import Home from "./src/pages/home";
import { LogBox } from "react-native";

const StyledView = styled(View);
function App(){
  LogBox.ignoreAllLogs();
  
  return (
    <SafeAreaView>
      <StyledView className="h-screen w-screen mt-12">
        <Home/>
      </StyledView>
    </SafeAreaView>
   );
};

export default App;