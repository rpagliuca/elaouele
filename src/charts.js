import React from 'react';
import { Pie } from 'react-chartjs';
import { connect } from 'react-redux';
import _ from 'lodash';

class MyPie extends React.Component {
    componentDidMount() {
        const style = getComputedStyle(document.body);
        this.colorBlue = style.getPropertyValue('--blue');
        this.colorPink = style.getPropertyValue('--pink');
    }
    render() {
        const raw = _.countBy(this.props.cards.map(i => i.palpite));
        const data = Object.keys(raw).map(i => {
            const color = i === 'Menino' ? this.colorBlue : this.colorPink;
            return {
                value: raw[i],
                label: i,
                color: color
            };
        }).sort((a, b) => a.label < b.label);
        const options = {
            responsive: true
        };
        return (
            <div><Pie data={data} options={options} /></div>
        );
    }
};

const mapStateToProps = state => {
    return {
        cards: state.cards
    };
};

export default connect(mapStateToProps)(MyPie);
