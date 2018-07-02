declare interface ITimerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  InfoGroupName:string;
  WebPartSerialNo:string;
}

declare module 'TimerWebPartStrings' {
  const strings: ITimerWebPartStrings;
  export = strings;
}
