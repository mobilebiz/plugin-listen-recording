import React from 'react';
import { withTaskContext, TaskHelper } from '@twilio/flex-ui';
import Record from './Record';

const RecordContainer = (props) => {
  // Voiceチャンネル以外は処理しない
  if (!props.task || props.task.channelType !== 'voice') return null;

  // 後処理中かを確認する
  const taskHelper = new TaskHelper(props.task);
  if (!taskHelper.isInWrapupMode) return null;

  return <Record {...props} />;
};
export default withTaskContext(RecordContainer);
