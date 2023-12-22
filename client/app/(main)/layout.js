import Background from "@/components/layout/main/Background";
import Title from "@/components/layout/main/Title";

export const metadata = {
  title: "VUZI",
  description: "Wallet that your grandma approves",
};

export default function LandingLayout({ children }) {
  return (
    <>
      <div className="h-screen w-screen relative overflow-hidden flex flex-col items-center">
        <Title />
        {children}
        <Background />
      </div>
    </>
  );
}