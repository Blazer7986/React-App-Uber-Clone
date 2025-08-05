import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity>
        {/* 48:45 */}
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
