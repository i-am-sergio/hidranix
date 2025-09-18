export interface WebinarItemContent {
  id?: string;
  title: string;
  date: string;
  time: string;
  description: string;
  speaker: {
    name: string;
    title: string;
    bio: string;
  };
  link: string;
  isFree: boolean;
  platform: string;
  organizer: string;
  extraNotes?: string;
  imgSrc: string;
}
