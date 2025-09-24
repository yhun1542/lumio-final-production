export type AgentRole = 'Researcher' | 'Critic' | 'Synthesizer' | 'M6-Pathfinder';
export type TeamName = 'Alpha' | 'Beta' | 'Gamma' | 'Delta';

export interface AgentState {
  id: string;
  team: TeamName;
  role: AgentRole;
  status: 'pending' | 'running' | 'completed' | 'error';
  thought: string;
  result: string;
}

export interface Source {
  id: string;
  url: string;
  title: string;
  snippet: string;
}

export interface ActionButton {
  button_text: string;
  action_type: 'DEEPEN' | 'BROADEN' | 'ACTIONIZE';
}

export interface FinalResult {
  winner: TeamName | 'synthesized';
  answer: string;
  sources: Source[];
  query: string;
  actionButtons?: ActionButton[];
  winnerAI?: string;
  finalScore?: number;
  allTeamScores?: Array<{
    team: TeamName;
    aiModel: string;
    score: number;
  }>;
}

export type StreamEvent =
  | { type: 'agent-update', data: AgentState }
  | { type: 'sources-update', data: Source[] }
  | { type: 'final-result', data: FinalResult }
  | { type: 'team-score', data: { team: TeamName; aiModel: string; score: number } }
  | { type: 'error', data: { message: string } };

export interface SignalPackageItem {
  signal_id: string;
  fact?: string;
  superposition?: Array<{
    hypothesis: string;
    evidence_strength: number;
  }>;
  source_ids: string[];
  data_type?: string;
}

export interface VectorAnalysis {
  overall_relevance: number;
  key_strengths: string[];
  critical_weaknesses: string[];
}

export interface ResearcherResult {
  signal_package: SignalPackageItem[];
}

export interface CriticResult {
  vector_analysis: VectorAnalysis;
  cognitive_reframing_suggestion: string;
  entangled_constraints: string[];
}

export interface SynthesizerResult {
  final_answer_markdown: string;
}

export interface M6Result {
  analysis_summary: string;
  action_buttons: ActionButton[];
}
