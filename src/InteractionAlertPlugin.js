import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomInteractionAlert from './components/CustomTaskAlert/CustomInteractionAlert';

const PLUGIN_NAME = 'InteractionAlertPlugin';

export default class InteractionAlertPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomInteractionAlert key="CustomInteractionAlert-component" />, options);
  }
}
