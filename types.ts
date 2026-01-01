
export interface Team {
  id: string;
  name: string;
  ageGroup: string;
  gameChangerUrl: string;
}

export interface Player {
  id: string;
  teamId: string;
  name: string;
  number: string;
  primaryPosition: string;
  secondaryPosition?: string;
  class: string;
  batThrows: string;
  hometown: string;
  imageUrl: string;
  videoHighlights?: string[];
  stats?: {
    avg?: string;
    era?: string;
    hr?: number;
    so?: number;
  };
}

export interface Game {
  id: string;
  teamId: string;
  date: string;
  opponent: string;
  location: string;
  result?: string;
  score?: string;
  type: 'Home' | 'Away';
  status: 'Upcoming' | 'Completed' | 'Live';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  imageUrl: string;
}

export enum AppTab {
  HOME = 'home',
  ROSTER = 'roster',
  SCHEDULE = 'schedule',
  STATS = 'stats',
  NEWS = 'news',
  ASSISTANT = 'assistant'
}
