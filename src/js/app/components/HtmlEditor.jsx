/*!
 * stanley song (sxhuan@gmail.com)
 */

import React from 'react';
import FroalaEditor from 'react-froala-editor';
import ContentWrapper from './ContentWrapper';
import {Row, Col, Button, Input, Form} from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class HtmlEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = 
            { 
                text: '', 
                code: ''
            }
    }

    getData() {
        let value = this.froalaEditor.getHtml(true);
        this.setState({code: value});
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col span={12}>
                        <FroalaEditor 
                            base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.6.1'
                            alignP={true}
                            codeBeautifierP={true}
                            colorsP={true}
                            codeViewP={true}
                            draggableP={true}
                            tableP={true}
                            fontFamilyP={true}
                            fontSizeP={true}
                            imageP={true}
                            linkP={true}
                            listsP={true}
                            inlineStyleP={true}
                            lineBreakerP={true}
                            fileP={true}
                            entitiesP={true}
                            emoticonsP={true}
                            paragraphFormatP={true}
                            paragraphStyleP={true}
                            quickInsertP={true}
                            quoteP={true}
                            saveP={true}
                            urlP={true}
                            videoP={true}
                            value={this.state.text} 
                            ref={(r) => {this.froalaEditor = r;}}
                        />
                    </Col>
                    <Col span={12}>
                        <div className="toolbar">
                            <Button type="primary" className="generate" onClick={this.getData.bind(this)}>Generate Html</Button>
                            <CopyToClipboard text={this.state.code}
                                onCopy={() => this.setState({copied: true})}>
                                <Button type="primary">Copy To Clipboard</Button>
                            </CopyToClipboard>
                        </div>
                        {this.state.code}
                    </Col>
                </Row>
            </ContentWrapper> 
        )
    }
}