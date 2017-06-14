/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import ReactQuill from 'react-quill';
import ContentWrapper from './ContentWrapper';
import {Row, Col, Button} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class HtmlEditor extends React.Component {
    constructor(props) {
    super(props)
    this.state = { text: '' }
    }

    handleChange(value) {
        this.setState({ text: value })
        console.log(this.state.text);
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col span={12}>
                        <ReactQuill theme="snow" value={this.state.text} onChange={this.handleChange.bind(this)}>
                            <div className="my-editing-area"/>
                        </ReactQuill>
                    </Col>
                    <Col span={12}>
                        <div className="tool-bar">
                            <CopyToClipboard text={this.state.text}
                                onCopy={() => this.setState({copied: true})}>
                                <Button type="primary">Copy To Clipboard</Button>
                            </CopyToClipboard>
                        </div>
                        {this.state.text}
                    </Col>
                </Row>
            </ContentWrapper>
        )
    }
} 
