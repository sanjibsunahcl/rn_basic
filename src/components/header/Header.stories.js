import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Header from '../header/Header';

import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Header', module)
  .addDecorator(getStory => getStory())
  .add('default', () => (
    <Header text={'Virtual List'} isBackButtonVisible={false} />
  ))
  .add('btn visible', () => (
    <Header text={'Virtual List'} isBackButtonVisible={true} />
  ));
