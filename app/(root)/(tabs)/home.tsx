// import { SignOutButton } from "@/app/components/SignOutButton";
import { SignedIn, useUser } from "@clerk/clerk-expo";
import { SafeAreaView, Text } from "react-native";

export default function Home() {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
    </SafeAreaView>
  );
}
