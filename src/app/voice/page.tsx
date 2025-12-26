import Navbar from "@/components/Navbar";
import FeatureCards from "@/components/voice/FeatureCards";
import ProPlanRequired from "@/components/voice/ProPlanRequired";
import VapiWidget from "@/components/voice/VapiWidget";
import WelcomeSection from "@/components/voice/WelcomeSection";
import { auth } from "@clerk/nextjs/server";

const VoicePage = async () => {
  const { has } = await auth();
  const hasProPlan = has({ plan: "ai_basic" }) || has({ plan: "ai_pro" });

  //   console.log("has proplan", has);

  if (!hasProPlan) return <ProPlanRequired></ProPlanRequired>;
  return (
    <div className="min-h-screen bg-background">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection></WelcomeSection>
        <FeatureCards></FeatureCards>
      </div>

      <VapiWidget></VapiWidget>
    </div>
  );
};

export default VoicePage;
