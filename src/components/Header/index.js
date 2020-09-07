import React, {Component} from 'react';

import {
    HeaderWrap,
    TimeCounterBar,
    HeaderInfo
} from './styles';

class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <HeaderInfo>
                    <h1>Teste de digitação</h1>
                </HeaderInfo>
                <TimeCounterBar width={(this.props.timeSpent * 100) / 60} />
            </HeaderWrap>
        );
    }
}

export default Header;