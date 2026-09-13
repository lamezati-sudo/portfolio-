export interface CadImage {
  src: string;
  title: string;
  caption: string;
  alt: string;
  kind: 'Reference' | 'My CAD design';
}

const image = (file: string) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

// Keep the reference first, then group the two views of each recreated part.
export const cadImages: CadImage[] = [
  {
    src: image('cad-demo.jpg'),
    title: 'SolidWorks reference',
    caption: 'The original mounting-bracket reference used in the demo.',
    alt: 'Original SOLIDWORKS screenshot of the mounting bracket used as a reference',
    kind: 'Reference',
  },
  {
    src: image('My design pic 11.png'),
    title: 'Mounting bracket · perspective',
    caption: 'The recreated bracket in FreeCAD, with the AI assistant and approved geometry changes.',
    alt: 'Perspective view of Leonel’s recreated mounting bracket in FreeCAD beside the AI assistant',
    kind: 'My CAD design',
  },
  {
    src: image('My design pic 1.png'),
    title: 'Mounting bracket · top view',
    caption: 'A top view of the bracket, showing its mounting holes and rounded central junction.',
    alt: 'Top view of the recreated mounting bracket with four mounting holes and a rounded central boss',
    kind: 'My CAD design',
  },
  {
    src: image('My design pic 2.png'),
    title: 'Hex-head screw · perspective',
    caption: 'A threaded screw in the CAD workspace, with the geometry proposal ready for review.',
    alt: 'Perspective view of a threaded hex-head screw beside the CAD assistant’s accept and reject controls',
    kind: 'My CAD design',
  },
  {
    src: image('My design pic 22.png'),
    title: 'Hex-head screw · side view',
    caption: 'The screw in profile, showing the modeled threads and the FreeCAD feature tree.',
    alt: 'Side view of the threaded hex-head screw in FreeCAD, with the feature tree and AI assistant visible',
    kind: 'My CAD design',
  },
];
