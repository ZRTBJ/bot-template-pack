import TapBotTemplate from "../components/TapBotTemplate";

export default function TapBot() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center space-y-8">
      {/* h1 Heading */}
      <h1 className="text-white text-3xl font-bold text-center">
        Launch-ready Projects
      </h1>

      {/* TemplateCard Component */}
      <TapBotTemplate />
    </div>
  );
}
