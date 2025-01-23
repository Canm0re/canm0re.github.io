import { Component } from 'react';

declare module 'recharts' {
  export class PolarAngleAxis extends Component<any> {}
  export class PolarGrid extends Component<any> {}
  export class Radar extends Component<any> {}
  export class RadarChart extends Component<any> {}
  export class ResponsiveContainer extends Component<any> {}
  export class Tooltip extends Component<any> {}
} 