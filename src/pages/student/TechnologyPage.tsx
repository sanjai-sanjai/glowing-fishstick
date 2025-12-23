import { SubjectLayout } from "@/components/student/SubjectLayout";
import { GameMissionCard } from "@/components/student/GameMissionCard";
import {
  VillageLightUp,
  AppBuilderStudio,
  DebugDungeon,
  SystemBuilder,
  CircuitBuilder,
  InputOutputLab,
  NetworkBuilder,
} from "@/components/games";
import {
  Laptop,
  Zap,
  Code,
  Bug,
  Cog,
  Lightbulb,
  RefreshCw,
  Wifi,
} from "lucide-react";
import { useState } from "react";

const techGames = [
  {
    title: "Village Light-Up",
    description: "Build electrical circuits to light up the festival",
    icon: Zap,
    reward: 150,
    difficulty: "easy" as const,
    status: "available" as const,
    gameId: "lightup",
  },
  {
    title: "App Builder Studio",
    description: "Create working apps by connecting UI and logic",
    icon: Code,
    reward: 160,
    difficulty: "easy" as const,
    status: "available" as const,
    gameId: "appbuilder",
  },
  {
    title: "Debug Dungeon",
    description: "Find and fix logical errors in code",
    icon: Bug,
    reward: 155,
    difficulty: "medium" as const,
    status: "available" as const,
    gameId: "debug",
  },
  {
    title: "System Builder",
    description: "Arrange steps in the correct order for systems to work",
    icon: Cog,
    reward: 165,
    difficulty: "medium" as const,
    status: "available" as const,
    gameId: "system",
  },
  {
    title: "Circuit Builder",
    description: "Assemble electronic circuits and test them",
    icon: Lightbulb,
    reward: 170,
    difficulty: "medium" as const,
    status: "available" as const,
    gameId: "circuit",
  },
  {
    title: "Input Output Lab",
    description: "Understand how systems process inputs and outputs",
    icon: RefreshCw,
    reward: 175,
    difficulty: "hard" as const,
    status: "available" as const,
    gameId: "iolab",
  },
  {
    title: "Network Builder",
    description: "Connect devices and build communication networks",
    icon: Wifi,
    reward: 180,
    difficulty: "hard" as const,
    status: "available" as const,
    gameId: "network",
  },
];

export default function TechnologyPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleGameSelect = (gameId: string) => {
    setActiveGame(gameId);
  };

  const handleGameClose = () => {
    setActiveGame(null);
  };

  return (
    <>
      <SubjectLayout
        title="Technology"
        icon={Laptop}
        iconColor="text-primary"
        progress={0}
        totalLessons={7}
        completedLessons={0}
        xpEarned={0}
      >
        <div className="slide-up" style={{ animationDelay: "150ms" }}>
          <h3 className="mb-4 font-heading font-semibold">Gamified Learning Missions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Master technology concepts through interactive games. Each game teaches one key concept through hands-on learning.
          </p>
          <div className="space-y-3">
            {techGames.map((game, index) => (
              <div
                key={game.gameId}
                className="slide-up"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <GameMissionCard
                  title={game.title}
                  description={game.description}
                  icon={game.icon}
                  reward={game.reward}
                  difficulty={game.difficulty}
                  status={game.status}
                  onClick={() => handleGameSelect(game.gameId)}
                />
              </div>
            ))}
          </div>
        </div>
      </SubjectLayout>

      {/* Game Components */}
      {activeGame === "lightup" && <VillageLightUp onClose={handleGameClose} />}
      {activeGame === "appbuilder" && <AppBuilderStudio onClose={handleGameClose} />}
      {activeGame === "debug" && <DebugDungeon onClose={handleGameClose} />}
      {activeGame === "system" && <SystemBuilder onClose={handleGameClose} />}
      {activeGame === "circuit" && <CircuitBuilder onClose={handleGameClose} />}
      {activeGame === "iolab" && <InputOutputLab onClose={handleGameClose} />}
      {activeGame === "network" && <NetworkBuilder onClose={handleGameClose} />}
    </>
  );
}
