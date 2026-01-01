
import { Player, Game, NewsItem, Team } from './types';

export const TEAM_NAME = "MO Dawgs Baseball Club";
export const TEAM_SLOGAN = "Fear the DAWG. Join the PACK.";
export const TEAM_LOGO_URL = "https://i.ibb.co/Xrb912F/mo-dawgs-logo.png";

export const TEAM_COLORS = {
  primary: "#ce1126", // Competition Red
  secondary: "#000000", // Onyx Black
  accent: "#ffffff" // Pure White
};

export const TRAINING_HUBS = [
  { name: 'Ellisville Athletic Association', address: '17351 Old Manchester Rd, Wildwood, MO 63038', lat: 38.5831, lng: -90.6274 },
  { name: 'The Vet Sports', address: '1210 Gilsinn Ln, Fenton, MO 63026', lat: 38.5208, lng: -90.4632 },
  { name: 'Bud Dome', address: '9711 Green Park Industrial Dr, St. Louis, MO 63123', lat: 38.5256, lng: -90.3444 }
];

export const TEAMS: Team[] = [
  { id: 't1', name: 'MO Dawgs 9U', ageGroup: '9U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-9u' },
  { id: 't2', name: 'MO Dawgs 10U', ageGroup: '10U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-10u' },
  { id: 't3', name: 'MO Dawgs 11U', ageGroup: '11U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-11u' },
  { id: 't4', name: 'MO Dawgs 12U', ageGroup: '12U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-12u' },
  { id: 't5', name: 'MO Dawgs 13U', ageGroup: '13U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-13u' },
  { id: 't6', name: 'MO Dawgs 14U', ageGroup: '14U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-14u' },
  { id: 't7', name: 'MO Dawgs 15U', ageGroup: '15U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-15u' },
  { id: 't8', name: 'MO Dawgs 16U', ageGroup: '16U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-16u' },
  { id: 't9', name: 'MO Dawgs Showcase', ageGroup: '17U', gameChangerUrl: 'https://gc.com/t/mo-dawgs-showcase' },
  { id: 't10', name: 'MO Dawgs Collegiate', ageGroup: 'College', gameChangerUrl: 'https://gc.com/t/mo-dawgs-collegiate' },
];

export const MOCK_ROSTER: Player[] = [
  { 
    id: '1', 
    teamId: 't9', 
    name: 'Marcus Rivera', 
    number: '12', 
    primaryPosition: 'P', 
    secondaryPosition: 'OF', 
    class: '2025', 
    batThrows: 'R/R', 
    hometown: 'St. Louis, MO', 
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&h=533&auto=format&fit=crop', 
    stats: { era: '2.45', so: 84 },
    videoHighlights: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ']
  },
  { 
    id: '2', 
    teamId: 't9', 
    name: 'Tyler Chen', 
    number: '5', 
    primaryPosition: 'SS', 
    secondaryPosition: '2B', 
    class: '2026', 
    batThrows: 'L/R', 
    hometown: 'Columbia, MO', 
    imageUrl: 'https://images.unsplash.com/photo-1562124638-724e13052daf?q=80&w=400&h=533&auto=format&fit=crop', 
    stats: { avg: '.342', hr: 8 },
    videoHighlights: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ']
  },
  { 
    id: '3', 
    teamId: 't1', 
    name: 'Jackson Moore', 
    number: '27', 
    primaryPosition: 'C', 
    secondaryPosition: '1B', 
    class: '2033', 
    batThrows: 'R/R', 
    hometown: 'Kansas City, MO', 
    imageUrl: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=400&h=533&auto=format&fit=crop', 
    stats: { avg: '.315', hr: 12 },
    videoHighlights: []
  },
  { 
    id: '4', 
    teamId: 't1', 
    name: 'Ethan Hunt', 
    number: '2', 
    primaryPosition: '2B', 
    secondaryPosition: 'SS', 
    class: '2033', 
    batThrows: 'R/R', 
    hometown: 'Jefferson City, MO', 
    imageUrl: 'https://images.unsplash.com/photo-1562124638-724e13052daf?q=80&w=400&h=533&auto=format&fit=crop', 
    stats: { avg: '.288', hr: 3 },
    videoHighlights: ['https://www.youtube.com/watch?v=dQw4w9WgXcQ']
  },
];

export const MOCK_SCHEDULE: Game[] = [
  { id: 'g1', teamId: 't9', date: '2024-06-15', opponent: 'Gateway Grizzlies', location: 'Showcase Stadium', status: 'Upcoming', type: 'Home' },
  { id: 'g2', teamId: 't9', date: '2024-06-18', opponent: 'STL Prospects', location: 'Prospect Park', status: 'Upcoming', type: 'Away' },
  { id: 'g3', teamId: 't1', date: '2024-06-15', opponent: 'Little Giants', location: 'Dawg Field #1', status: 'Upcoming', type: 'Home' },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Winter Training Clinics Announced',
    date: '2024-11-01',
    summary: 'Join us at The Dawghouse for our elite winter development series focusing on high-speed velocity and core mechanics.',
    category: 'Training',
    imageUrl: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'n2',
    title: '2025 Summer Tryouts: Open Registration',
    date: '2024-10-15',
    summary: 'Think you have what it takes to join the pack? Registration is now open for all age groups for the upcoming season.',
    category: 'Recruiting',
    imageUrl: 'https://images.unsplash.com/photo-1516731415730-0c6419096c7c?q=80&w=600&h=400&auto=format&fit=crop'
  }
];
