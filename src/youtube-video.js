import React from 'react';
import { CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class YoutubeVideo extends React.Component {
    render() {
        return (
            <div>

                {!this.props.youtubeUrl && (
                    <CardBody>
                        <CardTitle>Live em breve!</CardTitle>
                        <CardText>A transmissão do Chá Revelação comerá mais tarde</CardText>
                    </CardBody>
                )}

                {this.props.youtubeUrl && (
                    <Row className="youtube-row">
                        <Col md="12">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    title="youtube-live-stream"
                                    className="embed-responsive-item"
                                    src={this.props.youtubeUrl}
                                    allow="encrypted-media" allowFullScreen>
                                </iframe>
                            </div>
                        </Col>
                    </Row>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        youtubeUrl: state.youtube.url
    };
};

export default connect(mapStateToProps)(YoutubeVideo);
