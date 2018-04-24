import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TimerWebPartStrings';
import Timer from './components/Timer';
import { ITimerProps } from './components/ITimerProps';
 
export interface ITimerWebPartProps {
  description: string;
}

export default class TimerWebPart extends BaseClientSideWebPart<ITimerWebPartProps> {
  public constructor() {
    super();
    
  }
  public render(): void {
    const element: React.ReactElement<ITimerProps > = React.createElement(
      Timer,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private formatDateIso(date: Date): string {
    return date.toISOString();
 }
 
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
