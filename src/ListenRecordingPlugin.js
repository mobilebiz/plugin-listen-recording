import React from 'react';
import { VERSION, Tab } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import japanese from './i18n/JP'; // 日本語サブセット

import RecordContainer from './components/Record/Record.Container';

const PLUGIN_NAME = 'ListenRecordingPlugin';

export default class ListenRecordingPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    // 日本語コンソールへ切り替え
    manager.strings = { ...manager.strings, ...japanese };

    // 通録コンポーネントの配置
    flex.TaskCanvasTabs.Content.add(
      <Tab label='Record' key='record-tab'>
        <RecordContainer key='record-component' />
      </Tab>,
    );
  }
}
