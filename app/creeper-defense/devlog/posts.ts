export type DevlogPost = {
  id: string;
  title: string;
  date: string; // e.g. "2026-04-15"
  summary: string;
  body: string;
  images: string[]; // paths relative to /public, e.g. "/devlog/post-1/screenshot.png"
};

export const posts: DevlogPost[] = [
    {
    id: "Update 2",
    title: "Progress Update",
    date: "2026-04-14",
    summary: "Bug Squashing",
    body: `The Creeper now interacts with the nodes correctly and Blasters work perfect! Now I needed to implemnt the morter node and the nullifier node to be able to push the creeper more and nullifer to win! `,
    images: [],
  },
  
  {
    id: "Update 1",
    title: "Progress Update",
    date: "2026-04-09",
    summary: "We have some of the basics",
    body: `We have some of the basics! I can place nodes, connect them together and have the creeper flow working! I had to get some help from my friend Claude on the physics of the creeper interacting with the terrain elevation differently but we got there!
    
    \n\n Currently, I can not place nodes on areas with creepers, but the nodes do not get destroyed if the creeper flow gets to the node. Also, the blasters do not fire correctly.  They will fire on the same elevation but not below.
    
    \n\n We still have some bugs to fix, and its still ugly. But, we are getting there! `,
    images: [],
  },
  {
    id: "kickoff",
    title: "Project Inspiration",
    date: "2026-04-03",
    summary: "Creeper Defense is officially in development. Here's what we're building.",
    body: `I used to play Creeper World alllll the time when it was a flash game. Then I bought Creeper World 4, shout out Knuckle Cracker, in a browser back when Flash was still a thing. I don't even remember how I found it. I just know I kept going back to it. When Flash died and the game showed up on Steam, I bought it right away. Played it all over again.
    
    \n\nEventually I started thinking about what it would look like if I built something similar myself. A mobile game, free, same type of feel but my own spin on it. I didn't act on it right away. The idea just kind of lived in my head for a while until I finally decided to figure out if it was even doable.
    
    \n\nSo I started scoping. I spent time on itch.io looking through asset packs to see if I could find art that matched what I had in my head. I compared styles, looked at what would work out of the box versus what I'd need to tweak, and tried to get a realistic picture of how much I could pull together without bringing on an artist. That was the big question early on for me if the art pipeline wasn't there, the whole thing falls apart because I am not an artist, and I have no money to hire one!
    
    \n\nOnce I felt good about the assets and had a rough idea of the mechanics I wanted to build around, it clicked. This wasn't just an idea anymore. I started building.`,
    images: [],
  },
];
