import { combineReducers } from 'redux';
import cards from './cards-reducer';
import uiCards from './ui-cards';
import youtube from './youtube-url';
import config from './config';

export default combineReducers({
    cards,
    uiCards,
    youtube,
    config
});
